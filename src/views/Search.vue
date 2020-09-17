<template>
  <div class="search">
    <div class="ma-4">
      <v-text-field v-model="keyword" @keyup.enter="search()" autofocus solo append-icon="mdi-magnify" label="Search"></v-text-field>
      <v-hover v-for="book in books" :key="book._id" class="mb-4">
        <!-- 悬停卡片 悬停不支持移动端 -->
        <template v-slot="{ hover }">
          <v-card :elevation="hover ? 4 : 2" class="pa-4">
            <!-- <v-card-title>{{book.title}}</v-card-title>
              <v-card-subtitle>{{book.shortIntro.slice(0,48)}}...</v-card-subtitle> -->

            <v-avatar height="120" width="88" left tile>
              <v-img style="border-radius:4px" :src="decodeURIComponent(book.cover).replace('/agent/','')"></v-img>
            </v-avatar>
          </v-card>
        </template>
      </v-hover>

      <v-card>
        <div>
          <v-card-title class="headline">hhhh</v-card-title>
          <v-card-subtitle>36365356363563</v-card-subtitle>
        </div>

        <v-avatar class="ma-3" size="125" tile>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
        </v-avatar>
      </v-card>

    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    keyword: '',
    books: [],
    count: 7
  }),
  methods: {
    async search() {
      if (this.keyword) {
        let params = {
          query: this.keyword
        }
        try {
          let result = await this.$axios.get('/api/book/fuzzy-search', { params })
          console.log(result.data.books)
          let { ok: status, books, total } = result.data
          if (status) {
            this.books = books
          }
        } catch (e) {
          this.$store.commit('showMsg', { text: e.message })
        }
      } else {
        this.$store.commit('showMsg', { text: '搜索词不能为空！' })
      }
    }
  },
  mounted() {}
}
</script>
