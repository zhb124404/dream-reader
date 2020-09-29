<template>
  <div class="search ma-4">
    <v-text-field v-model="keyword" ref="search" @keyup.enter="search()" @click:prepend-inner="search()" clearable solo
      prepend-inner-icon="mdi-magnify" label="Search"></v-text-field>
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
    search() {
      if (this.keyword) {
        this.$refs.search.blur()
        this.$router.push({
          name: 'Result',
          query: { id:this.keyword }
        })
      } else {
        this.$store.commit('showMsg', { text: '搜索词不能为空！', type: 'warning' })
      }
    }
  },
  mounted() {}
}
</script>
