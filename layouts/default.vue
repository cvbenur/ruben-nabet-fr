<template>
  <v-app>
    <AppBar />

    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class Default extends Vue {
}
</script>

<style scoped>
.v-application {
  font-family: "Poppins";
}
</style>
