<template>
  <div class="search ma-4">
    <v-text-field v-model="keyword" @keyup.enter="search()" autofocus solo append-icon="mdi-magnify" label="Search"></v-text-field>
    <v-hover v-for="(book,index) in books" :key="'book-'+index" v-slot="{ hover }">
      <v-card @click="goToChapters(book.name,book.bookUrl)" :elevation="hover ? 4 : 2" class="mb-4">
        <v-container class="pa-4">
          <v-row>
            <!-- 封面 -->
            <v-col cols="4" class="py-0">
              <v-avatar height="120" width="88" tile>
                <v-img :src="decodeURIComponent(book.coverUrl).replace('/agent/','')" style="border-radius:4px"></v-img>
              </v-avatar>
            </v-col>
            <v-col cols="8" class="py-0">
              <v-row>
                <v-col cols="12" class="pa-0 pr-2">
                  <div class="text-subtitle-1 text-truncate">{{book.name}}</div>
                  <div class="text-subtitle-2 text--secondary text-truncate">——{{book.author}}</div>
                  <div class="text-body-2 pt-1" v-line-clamp="3">{{book.intro}}</div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-hover>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keyword: '',
      books: [],
      count: 7
    }
  },
  methods: {
    async search() {
      if (this.keyword) {
        let params = {
          q: this.keyword
        }
        try {
          let result = await this.$axios.get('/search', { params })
          console.log(result.data.books)
          let { code, books } = result.data
          if (code === '0000') {
            this.books = books
            this.$route.params.key = 'this.keyword'
          } else {
            this.$store.commit('showMsg', { text: '搜索失败！', type: 'warning' })
          }
        } catch (e) {
          this.$store.commit('showMsg', { text: e.message, type: 'error' })
        }
      } else {
        this.$store.commit('showMsg', { text: '搜索词不能为空！', type: 'warning' })
      }
    },
    goToChapters(name, id) {
      this.$router.push({
        name: 'Chapters',
        query: { name, id }
      })
    }
  },
  mounted() {}
}
</script>
