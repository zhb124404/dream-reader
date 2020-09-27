<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col cols="4">
        <v-row justify="start" align="center" class="grey lighten-5" style="height: 300px;">
          <v-card v-for="n in 3" :key="n" class="ma-3 pa-6" outlined tile>
            <v-badge color="pink" content="8">
              {{n}}
            </v-badge>
          </v-card>
        </v-row>
      </v-col>
      <v-col cols="4">
        <v-row justify="start" align="center" class="grey lighten-5" style="height: 300px;">
          <v-card v-for="n in 3" :key="n" class="ma-3 pa-6" outlined tile>
            {{n}}
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>

