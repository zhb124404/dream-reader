<template>
  <v-app>
    <!-- <v-navigation-drawer v-model="drawer" app :mini-variant="miniDrawer" clipped>
      <v-list dense>
        <v-list-item link to="/">
          <v-list-item-action>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/setting">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Setting</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-switch v-model="miniDrawer" primary label=""></v-switch>
    </v-navigation-drawer> -->

    <!-- <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Reader</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">dddd</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar> -->

    <v-bottom-navigation v-if="showNav" v-model="navValue" grow shift app>
      <v-btn height="100%" value="search" to="/search">
        <span>搜索</span>
        <v-icon>mdi-cloud-search</v-icon>
      </v-btn>
      <v-btn height="100%" value="bookshelf" to="/bookshelf">
        <span>书架</span>
        <v-icon>mdi-book</v-icon>
      </v-btn>
      <v-btn height="100%" value="mine" to="/setting">
        <span>我的</span>
        <v-icon>mdi-face-profile</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <v-main>
      <router-view></router-view>
      <!-- 全局消息条 -->
      <v-snackbar v-model="showSnackbar" :color="$store.state.snackbar.type"
        :timeout="$store.state.snackbar.timeout" bottom>
        {{$store.state.snackbar.text}}
        <template v-slot:action="{ attrs }">
          <v-btn text v-bind="attrs" @click="showSnackbar = false">
            关闭
          </v-btn>
        </template>
      </v-snackbar>
    </v-main>

  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      drawer: false,
      miniDrawer: false,
      navValue: 'bookshelf'
    }
  },
  computed: {
    showNav() {
      return this.$store.state.theme.showNav
    },
    showSnackbar: {
      get() {
        return this.$store.state.snackbar.show
      },
      set(value) {
        this.$store.commit('showMsg', { show: value })
      }
    }
  },
  methods: {

  },
  mounted() {
    this.$store.commit('setTheme', { showNav: true }) // 还原可能缺失的底栏
    this.$vuetify.theme.dark = this.$store.state.theme.useDarktheme
  }
}
</script>
