<template>
  <v-sheet v-resize="onResize" height="100%">
    <v-card :loading="loading" :class="readTheme" v-touch="{
      left: () => swipe('Left'),
      right: () => swipe('Right'),
      up: () => swipe('Up'),
      down: () => swipe('Down')
    }" class="theme-read-base px-6">
      <v-row>
        <v-col cols="12">
          <div v-if="!loading" id="tiltle-chapter" class="text-truncate mb-6 mx-auto">{{title}}</div>
          <div class="mb-4" v-for="(p,index) in content" :key="'o-'+index">{{p}}</div>
        </v-col>
      </v-row>
    </v-card>
    <v-speed-dial v-model="fab" bottom right direction="top" :open-on-hover="false" transition="slide-y-reverse-transition">
      <template v-slot:activator>
        <v-btn v-model="fab" color="blue darken-2" dark fab>
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-btn @click="showCatalog = true" fab dark small color="green">
        <v-icon>mdi-format-list-bulleted</v-icon>
      </v-btn>
      <v-btn fab dark small color="indigo">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn fab dark small color="red">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-speed-dial>

    <v-navigation-drawer v-model="showCatalog" width="80%" :height="navHeight" absolute temporary>
      <!-- <v-list rounded>
        <v-subheader>{{selected}}</v-subheader>
        <v-list-item-group v-model="selected" active-class="green--text">
          <template v-for="(chapter, index) in chapters">
            <v-list-item @click="showCatalog=false;getChapter(chapter.chapterUrl,chapter.chapterName)" :key="'chapter'+index">
              <v-list-item-content>
                <v-list-item-title>{{chapter.chapterName}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list-item-group>
      </v-list> -->
      <v-virtual-scroll :items="chapters" :height="navHeight" bench="10" item-height="48">
        <template v-slot="{ item:chapter,index}">
          <v-list-item @click="showCatalog=false;selected=index;getChapter(chapter.chapterUrl,chapter.chapterName)" :key="'chapter'+index">
            <v-list-item-content>
              <v-list-item-title>{{chapter.chapterName}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
        </template>
      </v-virtual-scroll>
    </v-navigation-drawer>
  </v-sheet>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      title: '',
      content: [],
      fab: false,
      showCatalog: false,
      chapters: [],
      selected: 0,
      navHeight: document.documentElement.clientHeight
    }
  },
  computed: {
    readTheme() {
      return {
        'theme-read-dark': this.$vuetify.theme.dark,
        'theme-read-light': !this.$vuetify.theme.dark
      }
    }
  },
  methods: {
    onResize() {
      this.navHeight = document.documentElement.clientHeight
    },
    async swipe(d) {
      if (d === 'Left') {
        if (this.selected < this.chapters.length - 1) {
          let id = this.chapters[this.selected + 1].chapterUrl
          let name = this.chapters[this.selected + 1].chapterName
          await this.getChapter(id, name)
          this.selected++
        } else {
          this.$store.commit('showMsg', { text: '没有下一章啦！', type: 'warning' })
        }
      } else if (d === 'Right') {
        if (this.selected > 0) {
          let id = this.chapters[this.selected - 1].chapterUrl
          let name = this.chapters[this.selected - 1].chapterName
          await this.getChapter(id, name)
          this.selected--
        } else {
          this.$store.commit('showMsg', { text: '已是第一章！', type: 'warning' })
        }
      }
    },
    async getChapters(id) {
      let params = { id }
      try {
        this.loading = 'green darken-1'
        let result = await this.$axios.get('/getChapters', { params })
        this.loading = false
        let { code, chapters } = result.data
        if (code === '0000') {
          this.chapters = chapters
        } else {
          this.$store.commit('showMsg', { text: '获取小说目录失败！', type: 'warning' })
        }
      } catch (e) {
        this.loading = false
        this.$store.commit('showMsg', { text: e.message, type: 'error' })
      }
    },
    async getChapter(id, name) {
      this.content = []
      let params = { id }
      try {
        this.loading = 'green darken-1'
        let result = await this.$axios.get('/getContent', { params })
        this.loading = false
        let { code, content } = result.data
        if (code === '0000') {
          this.content = content
          this.title = name
        } else {
          this.$store.commit('showMsg', { text: '获取小说内容失败！', type: 'warning' })
        }
      } catch (e) {
        this.loading = false
        this.$store.commit('showMsg', { text: e.message, type: 'error' })
      }
    }
  },
  async mounted() {
    await this.getChapters(this.$route.query.id)
    await this.getChapter(this.chapters[0].chapterUrl, this.chapters[0].chapterName)
  }
}
</script>
<style lang="scss" scoped>
.theme-read-base {
  height: 100%;
  font-size: 1.2rem;
  text-indent: 2em;
  text-align: justify;
}
.theme-read-dark {
  color: #616161;
  background-color: #000000;
}
.theme-read-light {
  color: #212121;
  background-color: #bed0bf;
}
#tiltle-chapter {
  color: #424242;
  text-indent: 0;
}
.v-speed-dial,
.v-btn--floating {
  position: fixed;
  bottom: 4rem;
}

// 目录列表滚动条
::-webkit-scrollbar {
  width: 12px;
}
::-webkit-scrollbar-thumb {
  background: #BDBDBD;
  height: 40px;
  border-radius: 2px;
}
</style>
