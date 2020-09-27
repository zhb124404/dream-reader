<template>
  <div class="search ma-4">
    <v-list>
      <v-subheader>{{$route.query.name}}</v-subheader>
      <v-list-item @click="goToChapter(chapter.chapterUrl)" v-for="(chapter, index) in chapters" :key="'chapter'+index">
        <v-list-item-content>
          <v-list-item-title>{{chapter.chapterName}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>
<script>
export default {
  data() {
    return {
      chapters: []
    }
  },
  methods: {
    async getChapters() {
      let params = {
        id: this.$route.query.id
      }
      try {
        let result = await this.$axios.get('/getChapters', { params })
        let { code, chapters } = result.data
        if (code === '0000') {
          this.chapters = chapters
        } else {
          this.$store.commit('showMsg', { text: '获取小说目录失败！', type: 'warning' })
        }
      } catch (e) {
        this.$store.commit('showMsg', { text: e.message, type: 'error' })
      }
    },
    goToChapter(id) {
      this.$router.push({
        name: 'Chapter',
        query: { id }
      })
    }
  },
  async mounted() {
    await this.getChapters()
  }
}
</script>
