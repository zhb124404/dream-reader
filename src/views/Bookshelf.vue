<template>
  <div class="ma-4">
    <v-card @click="getContent(book)" v-for="(book,index) in books" :key="'book-'+index"
      class="mb-4">
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      books: 5
    }
  },
  methods: {
    getContent(book) {
      this.$router.push({
        name: 'Content',
        query: { id: book.chaptersUrl }
      })
    },
    async syncData() {
      const token = this.$store.state.token
      if (token) {
        const userData = await this.$axios.post('/getUserData', { token })
        const { code, data } = userData.data
        if (code === '0000') {
          this.$store.commit('setUserData', data)
          this.books = this.$store.state.userData.books || []
        } else {
          this.$store.commit('showMsg', { text: 'Token已过期，请重新登录', type: 'warning' })
          this.$store.commit('setUserData', null)
          this.$store.commit('setToken', null)
        }
      } else {
        this.$store.commit('showMsg', { text: '请登录后再试', type: 'warning' })
      }
    }
  },
  mounted() {
    this.syncData()
  }
}
</script>
