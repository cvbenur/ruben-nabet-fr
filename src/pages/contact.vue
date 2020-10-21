<template>
  <v-container class="fluid fill-height">
    <Heading :title="$t('pages.contact.text')" />

    <v-row align="center" justify="center">
      <v-col cols="12">
        <p class="text-center text-h5 my-10">
          {{ $t('pages.contact.paragraph') }}
        </p>

        <ContactForm />
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col
        v-for="(social, i) in socials"
        :key="i"
        class="d-flex justify-center"
        cols="4"
        sm="1"
      >
        <SocialIcon
          :icon="social.icon"
          :title="social.title"
          :handle="social.handle"
          :link="social.link"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Social, socials } from '@/models/socials'

@Component({
  head (): object {
    return {
      title: this.$i18n.t('pages.contact.title')
    }
  }
})
export default class Contact extends Vue {
  private socials: Array<Social> | null = null;

  created () {
    if (!this.socials) {
      this.socials = socials
    }
  }
}
</script>
