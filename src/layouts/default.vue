<template>
  <v-app>
    <AppBar />

    <v-main>
      <v-container class="fluid fill-height">
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
          >
            <v-card
              class="px-md-5 mb-10 mb-md-0"
              dark
            >
              <nuxt />
            </v-card>
          </v-col>
        </v-row>
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
    const themeMessage = `notifications.theme.${newVal ? 'dark' : 'light'}`
    this.message = `${this.$t(themeMessage)}`
    this.icon = newVal ? 'far fa-moon' : 'fas fa-sun'
    this.turnOnNotification()
  }

  @Watch('$i18n.locale')
  localeChange (newVal: string, oldVal: string) {
    if (oldVal !== newVal) {
      this.message = `${this.$t('notifications.locale')}`
      this.icon = 'fas fa-globe'
      this.turnOnNotification()
    }
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
