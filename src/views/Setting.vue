<template>
  <div class="setting">
    <v-switch v-model="useDarkTheme" primary label="启用暗黑主题"></v-switch>
    <v-form v-if="!$store.state.userData" class="ma-6">
      <v-text-field v-model="form.id" label="用户名" outlined autocomplete="off"></v-text-field>
      <v-text-field v-model="form.password" label="密码" outlined autocomplete="off"></v-text-field>
      <div class="d-flex flex-row justify-space-around">
        <v-btn color="success" class="px-6" @click="login()">登录</v-btn>
        <v-btn color="success" class="px-6" @click="register()">注册</v-btn>
      </div>
    </v-form>
    <div v-else>
      欢迎，{{$store.state.userData.id}}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        id: null,
        password: null
      }
    }
  },
  computed: {
    useDarkTheme: {
      get() {
        return this.$store.state.theme.useDarktheme
      },
      set(value) {
        this.$vuetify.theme.dark = value
        this.$store.commit('setTheme', { useDarktheme: value })
      }
    },
    token() {
      return this.$store.state.token
    }
  },
  methods: {
    async register() {
      if (this.form.id && this.form.password) {
        const res = await this.$axios.post('/register', {
          id: this.form.id,
          password: this.form.password
        })
        const { code, msg } = res.data

        if (code === '0000') {
          this.$store.commit('showMsg', { text: msg, type: 'success' })
        } else {
          this.$store.commit('showMsg', { text: msg, type: 'error' })
        }
      }
    },
    async login() {
      if (this.form.id && this.form.password) {
        const res = await this.$axios.post('/login', {
          id: this.form.id,
          password: this.form.password
        })
        const { code, msg, token } = res.data

        if (code === '0000') {
          this.$store.commit('setToken', token)
          await this.syncData()
        } else {
          this.$store.commit('showMsg', { text: msg, type: 'error' })
        }
      }
    },
    async syncData() {
      const token = this.$store.state.token
      if (token) {
        const userData = await this.$axios.post('/getUserData', { token })
        const { code, data } = userData.data
        if (code === '0000') {
          this.$store.commit('setUserData', data)
        } else {
          this.$store.commit('setUserData', null)
          this.$store.commit('setToken', null)
        }
      }
    }
  },
  mounted() {
    this.syncData()
  }
}
</script>
