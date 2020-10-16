<template>
  <v-footer
    app
    color="black"
    absolute
  >
    <v-container class="fluid fill-height">
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          sm="3"
          class="d-flex justify-center px-0"
        >
          <v-btn
            class="text-none text-caption font-weight-light"
            text
            dark
            :href="localePath('/legal-notice')"
          >
            {{ $t('footer.legals') }}
          </v-btn>
        </v-col>

        <v-spacer />

        <v-col
          cols="12"
          sm="3"
          class="px-0"
        >
          <p class="my-0 text-caption font-weight-light text-center white--text">
            {{ $t('footer.credits.first') }} <v-icon x-small class="px-1" color="accent">
              {{ $vuetify.theme.dark ? 'far fa-heart' : 'fas fa-heart' }}
            </v-icon> {{ $t('footer.credits.second') }} Ruben <b>NABET_</b>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class Footer extends Vue {
}
</script>
