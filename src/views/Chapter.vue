<template>
  <v-container class="ff">
    <v-row>
      <v-col cols="12">
        <div v-html="chapter"></div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      chapter: ''
    }
  },
  methods: {
    async getChapter() {
      let params = {
        id: this.$route.query.id
      }
      try {
        let result = await this.$axios.get('/getChapter', { params })
        let { code, chapter } = result.data
        if (code === '0000') {
          this.chapter = chapter
        } else {
          this.$store.commit('showMsg', { text: '获取小说内容失败！', type: 'warning' })
        }
      } catch (e) {
        this.$store.commit('showMsg', { text: e.message, type: 'error' })
      }
    }
  },
  async mounted() {
    await this.getChapter()
  }
}
</script>
<style lang="scss" scoped>
.ff {
  background-color: #bed0bf;
}
.read {
  height: 100%;
  #content {
    background: #bed0bf;
    margin: 0px auto;
    padding: 20px 8%;
    font-size: 18px;
  }
}
</style>
