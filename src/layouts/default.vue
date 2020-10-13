<template>
  <v-app>
    <AppBar />

    <v-main>
      <v-container class="mt-10 mx-auto px-lg-10 px-2 px-sm-8">
        <nuxt />
        <NotifSnackbar
          ref="notifSnack"
          :message="message"
          :icon="icon"
        />
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<script lang="ts">
import { Vue, Component, Watch, Ref } from 'vue-property-decorator'
import NotifSnackbar from '~/components/app/NotifSnackbar.vue'

@Component({})
export default class Default extends Vue {
  private notif: boolean = false;

  private message: string = '';
  private icon: string = '';

  @Watch('$vuetify.theme.dark')
  themeChange (newVal: boolean) : void {
    this.message = newVal ? 'Dark' : 'Light'
    this.icon = newVal ? 'far fa-moon' : 'fas fa-sun'
    this.turnOnNotification()
  }

  @Ref() notifSnack!: NotifSnackbar;

  turnOnNotification () {
    this.notifSnack.turnOn()
  }
}
</script>

<style scoped>
.v-application {
  font-family: "Poppins";
}
</style>
