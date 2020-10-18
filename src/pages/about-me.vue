<template>
  <v-container fluid>
    <Heading :title="$t(`pages.about.heading`)" />

    <section>
      <v-row
        align="center"
        justify="center"
        class="mt-sm-15 mt-10 d-flex mb-10"
      >
        <v-col
          cols="6"
          sm="6"
          md="4"
          lg="3"
          class="d-flex flex-row-reverse"
        >
          <v-img
            class="custom-rounded shifted-bottom-left mb-10 mb-md-0"
            :src="require('@/assets/img/pp_fb.jpg')"
            alt="Ruben NABET"
            width="250"
            aspect-ratio="1"
            contain
          />
        </v-col>

        <v-col
          cols="12"
          sm="6"
          class="d-flex flex-row mt-0"
        >
          <p class="ma-0">
            {{ $t('pages.about.paragraphs.first') }}
          </p>
        </v-col>
      </v-row>
    </section>

    <section>
      <Title
        :title="$t(`pages.about.pro.title`)"
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
      <Title :title="$t(`pages.about.edu.title`)" />

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
        <v-btn
          color="secondary"
          class="text-none"
          block
          ripple
          large
          :href="`/docs/Ruben_NABET_CV-${$t('pages.about.dl.lang')}.pdf`"
          download
        >
          {{ $t('pages.about.dl.text') }}_
        </v-btn>
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
        sm="5"
      >
        <v-btn
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
      title: this.$i18n.t('pages.about.title')
    }
  }
})
export default class About extends Vue {
  private socials: Array<Social> | null = null;

  created () {
    if (!this.socials) {
      this.socials = socials
    }
  }
}
</script>
