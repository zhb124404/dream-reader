<template>
  <div class="search ma-4">
    <div class="mb-4">
      <v-icon @click="$router.back()">mdi-reply-all</v-icon>
    </div>
    <v-hover v-for="(book,index) in books" :key="'book-'+index" v-slot="{ hover }">
      <v-card @click="getBookInfo(book.bookUrl)" :elevation="hover ? 4 : 2" class="mb-4">
        <v-container class="pa-4">
          <v-row>
            <!-- 封面 -->
            <v-col align-self="center" cols="4" class="py-0">
              <v-avatar height="112" width="80" tile>
                <v-img :src="book.coverUrl" style="border-radius:4px">
                  <template v-slot:placeholder>
                    <PuSkeleton height="120px" width="88px"></PuSkeleton>
                  </template>
                </v-img>
              </v-avatar>
            </v-col>
            <v-col cols="8" class="py-0">
              <v-row>
                <v-col cols="12" class="pa-0 pr-2">
                  <div class="text-subtitle-1 text-truncate pb-1">
                    <PuSkeleton width="120px">{{book.name}}</PuSkeleton>
                  </div>
                  <div class="text-subtitle-2 text--secondary text-truncate pb-1">
                    <PuSkeleton width="80px">{{book.author}}</PuSkeleton>
                  </div>
                  <div class="text-body-2" v-line-clamp="3">
                    <PuSkeleton :count="3">{{book.intro}}</PuSkeleton>
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-hover>
    <!-- 小说详情 -->
    <v-dialog v-model="showBookInfo" max-width="400">
      <v-card>
        <v-container class="pa-4">
          <v-row>
            <!-- 封面 -->
            <v-col align-self="center" cols="4" class="py-0">
              <v-avatar v-if="showBookInfo" height="112" width="80" tile>
                <v-img :src="bookInfo.coverUrl" style="border-radius:4px">
                  <template v-slot:placeholder>
                    <PuSkeleton height="120px" width="88px"></PuSkeleton>
                  </template>
                </v-img>
              </v-avatar>
            </v-col>
            <v-col cols="8" class="py-0">
              <v-row>
                <v-col cols="12" class="pa-0 pr-2">
                  <div class="text-subtitle-1 text-truncate pb-1">
                    <PuSkeleton width="120px">{{bookInfo.name}}</PuSkeleton>
                  </div>
                  <div class="text-subtitle-2 text--secondary text-truncate">
                    <PuSkeleton v-if="bookInfoLoading" width="80px"></PuSkeleton>
                    <v-icon v-else size="20px">mdi-face</v-icon>{{bookInfo.author}}
                  </div>
                  <div class="text-subtitle-2 text--secondary text-truncate">
                    <PuSkeleton v-if="bookInfoLoading" width="72px"></PuSkeleton>
                    <v-icon v-else size="20px">mdi-tag</v-icon>{{bookInfo.type}}
                  </div>
                  <div class="text-subtitle-2 text--secondary text-truncate">
                    <PuSkeleton v-if="bookInfoLoading" width="200px"></PuSkeleton>
                    <v-icon v-else size="20px">mdi-ticket-confirmation</v-icon>{{bookInfo.lastChapter}}
                  </div>
                  <div class="text-subtitle-2 text--secondary text-truncate">
                    <PuSkeleton v-if="bookInfoLoading" width="200px"></PuSkeleton>
                    <v-icon v-else size="20px">mdi-clock-time-nine</v-icon>{{bookInfo.lastUpdate}}
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-divider class="mt-4"></v-divider>
          <v-row>
            <v-card-text>
              <div v-line-clamp="8" style="text-indent:2em;">
                <PuSkeleton :count="5">
                  {{bookInfo.intro}}
                </PuSkeleton>
              </div>
            </v-card-text>
          </v-row>
          <v-card-actions>
            <v-btn color="green darken-1" :disabled="bookInfoLoading" text @click="getContent(bookInfo.chaptersUrl)">
              开始阅读
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" :disabled="bookInfoLoading" text @click="showBookInfo = false">
              加入书架
            </v-btn>
          </v-card-actions>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      books: 5,
      bookInfo: {},
      loading: false,
      bookInfoLoading: false,
      showBookInfo: false
    }
  },
  methods: {
    async search(id) {
      try {
        let params = { id }
        this.loading = true
        let result = await this.$axios.get('/search', { params })
        this.loading = false
        let { code, books } = result.data
        if (code === '0000') {
          this.books = books
          if( this.books.length===0){
            this.$store.commit('showMsg', { text: '未搜索到相关小说！', type: 'info' })
          }
        } else {
          this.$store.commit('showMsg', { text: '搜索失败！', type: 'warning' })
        }
      } catch (e) {
        this.loading = false
        this.$store.commit('showMsg', { text: e.message, type: 'error' })
      }
    },
    async getBookInfo(id) {
      this.bookInfo = {}
      this.showBookInfo = true
      try {
        let params = { id }
        this.bookInfoLoading = true
        let result = await this.$axios.get('/getBook', { params })
        this.bookInfoLoading = false
        let { code, book } = result.data
        if (code === '0000') {
          this.bookInfo = book
        } else {
          this.$store.commit('showMsg', { text: '搜索失败！', type: 'warning' })
        }
      } catch (e) {
        this.bookInfoLoading = false
        this.$store.commit('showMsg', { text: e.message, type: 'error' })
      }
    },
    getChapters(name, id) {
      this.showBookInfo = false
      this.$router.push({
        name: 'Chapters',
        query: { name, id }
      })
    },
    getContent(id) {
      this.showBookInfo = false
      this.$router.push({
        name: 'Content',
        query: { id }
      })
    }
  },
  async mounted() {
    await this.search(this.$route.query.id)
  }
}
</script>
