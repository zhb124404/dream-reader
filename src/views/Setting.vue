<template>
  <div class="setting">
    <v-switch v-model="useDarkTheme" primary label="启用暗黑主题"></v-switch>
  </div>
</template>
<script>
export default {
  data: () => ({}),
  computed: {
    useDarkTheme: {
      get() {
        return this.$store.state.theme.useDarktheme
      },
      set(value) {
        this.$vuetify.theme.dark = value
        this.$store.commit('setTheme', { useDarktheme: value })
      }
    }
  },
  methods: {}
}
</script>
