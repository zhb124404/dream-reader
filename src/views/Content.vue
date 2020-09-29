<template>
  <v-container fluid class="content">
    <v-row>
      <v-col cols="12">
        <div v-if="!loading" class="text-subtitle text--secondary text-truncate mb-2">{{$route.query.name}}</div>
        <div class="mb-4" v-for="(p,index) in content" :key="'o-'+index">{{p}}</div>
      </v-col>
    </v-row>
    <!-- 加载中 -->
    <v-overlay :value="loading" :opacity="0">
      <v-progress-circular color="green darken-1" indeterminate size="48"></v-progress-circular>
    </v-overlay>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      loading:false,
      content: []
    }
  },
  methods: {
    async getChapter(id) {
      let params = { id }
      try {
        this.loading = true
        let result = await this.$axios.get('/getContent', { params })
        this.loading = false
        let { code, content } = result.data
        if (code === '0000') {
          this.content = content
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
    await this.getChapter(this.$route.query.id)
  }
}
</script>
<style lang="scss" scoped>
.content {
  background-color: #bed0bf;
  height: 100%;
  font-size: 1.4rem;
  text-indent: 2em;
}
</style>
