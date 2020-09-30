<template>
  <div class="search ma-4">

    <v-list rounded>
      <v-subheader>{{$route.query.name}}</v-subheader>
      <v-list-item @click="goToChapter(chapter.chapterName,chapter.chapterUrl,chapters)" v-for="(chapter, index) in chapters"
        :key="'chapter'+index">
        <v-list-item-content>
          <v-list-item-title>
            <PuSkeleton>{{chapter.chapterName}}</PuSkeleton>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      chapters: 10
    }
  },
  methods: {
    async getChapters() {
      let params = {
        id: this.$route.query.id
      }
      try {
        this.loading = true
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
    goToChapter(name, id, chapters) {
      this.$router.push({
        name: 'Content',
        query: { name, id },
        params: { chapters }
      })
    }
  },
  async mounted() {
    await this.getChapters()
  }
}
</script>
