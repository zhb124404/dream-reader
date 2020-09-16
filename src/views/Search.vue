<template>
  <div class="search">

    <div class="ma-4">
      <v-text-field v-model="keyword" @keyup.enter="search()" autofocus solo append-icon="mdi-magnify" label="Search"></v-text-field>
      <v-hover>
        <!-- 悬停卡片 悬停不支持移动端 -->
        <template v-slot="{ hover }">
          <v-card :elevation="hover ? 4 : 2" class="pa-6">
            Prop based elevation
          </v-card>
        </template>
      </v-hover>

    </div>
    <v-snackbar v-model="snackbar" color="info" timeout="1400" bottom>
      请输入搜索词！
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar = false">
          关闭
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
export default {
  data: () => ({
    keyword: '',
    snackbar: false
  }),
  methods: {
    search() {
      if (this.keyword) {
        console.log('')
      } else {
        this.snackbar = true
      }
    }
  }
}
</script>
