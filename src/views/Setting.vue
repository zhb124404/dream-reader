<template>
  <div class="about">
    <v-switch v-model="$vuetify.theme.dark" primary label="启用暗黑主题"></v-switch>
  </div>
</template>
<script>
export default {
  data: () => ({
    miniDrawer: false
  })
}
</script>
