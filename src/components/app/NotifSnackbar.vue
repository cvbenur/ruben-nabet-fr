<template>
  <v-snackbar
    v-model="snackbar"
    :dark="themeDark"
    :color="themeDark ? 'primary' : 'white'"
    :timeout="5000"
  >
    <v-icon
      color="white"
      class="pr-2"
    >
      {{ icon }}
    </v-icon>

    {{ message }}

    <template v-slot:action="{ attrs }">
      <v-btn
        color="secondary"
        text
        v-bind="attrs"
        class="text--none"
        @click="snackbar = false"
      >
        Ok
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class NotifSnackbar extends Vue {
  private snackbar: boolean = false;
  private themeDark: boolean = this.$vuetify.theme.dark;

  @Prop({ required: false, default: 'notif' })
  message!: string;

  @Prop({ required: false, default: 'far fa-bell' })
  icon!: string;

  turnOn () : void {
    this.snackbar = true
  }
}
</script>

<style>

</style>
