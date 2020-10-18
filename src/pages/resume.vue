<template>
  <v-container fluid>
    <Heading :title="$t(`pages.resume.heading`)" />

    <section>
      <Title
        :title="$t(`pages.resume.pro.title`)"
        alignment="right"
      />

      <v-row
        fill-height
        align="center"
        justify="center"
        class="mt-5"
      >
        <Timeline
          category="pro"
          right
        />
      </v-row>
    </section>

    <section>
      <Title :title="$t(`pages.resume.edu.title`)" />

      <v-row
        fill-height
        align="center"
        justify="center"
        class="mt-5"
      >
        <Timeline
          category="edu"
        />
      </v-row>
    </section>

    <v-row
      fill-height
      align="center"
      justify="center"
      class="text-center mt-10"
    >
      <v-col
        cols="12"
        sm="4"
      >
        <v-hover v-slot:default="{ hover }">
          <v-btn
            :elevation="hover ? 12 : 0"
            color="secondary"
            class="text-none"
            block
            ripple
            large
            :href="`/docs/Ruben_NABET_CV-${$t('pages.resume.dl.lang')}.pdf`"
            download
          >
            {{ $t('pages.resume.dl.text') }}_
          </v-btn>
        </v-hover>
      </v-col>
    </v-row>

    <v-row
      fill-height
      align="center"
      justify="center"
      class="text-center mt-10"
    >
      <v-col
        cols="12"
        sm="4"
      >
        <v-hover v-slot:default="{ hover }">
          <v-btn
            :elevation="hover ? 12 : 0"
            color="secondary"
            class="text-none font-weight-bold"
            block
            outlined
            ripple
            large
            nuxt
            :to="localePath('contact')"
          >
            {{ $t('pages.contact.text') }}_
          </v-btn>
        </v-hover>
      </v-col>

      <v-col
        v-for="(social, i) in socials"
        :key="i"
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
      title: this.$i18n.t('pages.resume.title')
    }
  }
})
export default class Resume extends Vue {
  private socials: Array<Social> | null = null;

  created () {
    if (!this.socials) {
      this.socials = socials
    }
  }
}
</script>
