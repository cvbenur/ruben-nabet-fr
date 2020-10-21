<template>
  <v-container class="fluid fill-height">
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="4"
        lg="5"
        class="d-inline-flex justify-center justify-sm-end text-center"
      >
        <div class="pa-1 secondary rounded-circle d-inline-block">
          <v-avatar
            size="102"
          >
            <v-img
              :src="require('@/assets/img/pp_fb.jpg')"
              alt="Ruben NABET"
              size="80px"
            />
          </v-avatar>
        </div>
      </v-col>

      <v-col
        cols="12"
        sm="8"
        lg="7"
      >
        <v-row class="mx-0 mb-4">
          <p class="text-h3 font-weight-thin ma-0">
            Ruben <b class="font-weight-bold">NABET_</b>
          </p>
        </v-row>

        <v-row class="mx-0">
          <p class="text-sm-h4 text-h5 font-weight-thin ma-0">
            {{ `${$t('pages.index.mainTitle.first')} ` }}<b class="font-weight-bold text-custom-blue">{{ $t('pages.index.mainTitle.second') }}</b>
          </p>
        </v-row>
      </v-col>
    </v-row>

    <section class="mt-md-15 mt-10 mb-5">
      <Title :title="$t('pages.index.about.title')" />

      <v-row
        align="center"
        justify="center"
        class="mt-8"
      >
        <v-col cols="12" xl="8">
          <p class="ma-0 text-h5 text-justify">
            Bonjour !
          </p>

          <p class="ma-0 text-h6 text-justify">
            {{ $t('pages.index.about.paragraphs.first') }}
          </p>
          <p class="ma-0 text-h6 text-justify">
            {{ $t('pages.index.about.paragraphs.second') }}
          </p>
          <p class="ma-0 text-h6 text-justify">
            {{ $t('pages.index.about.paragraphs.third') }}
          </p>
        </v-col>
      </v-row>

      <v-row align="center" justify="center" class="mt-5">
        <v-col cols="12" sm="6" xl="4">
          <v-hover v-slot:default="{ hover }">
            <v-btn
              :elevation="hover ? 12 : 0"
              color="secondary"
              class="text-none font-weight-bold"
              block
              ripple
              large
              nuxt
              :to="localePath('/resume')"
            >
              {{ $t('pages.resume.see') }}_
            </v-btn>
          </v-hover>
        </v-col>
      </v-row>
    </section>

    <Title
      :title="$t('pages.projects.featured')"
      alignment="right"
      class="mt-10 mt-md-15"
    />

    <v-row align="start" justify="center" class="mt-4">
      <v-col
        v-for="i in featured"
        :key="i"
        cols="12"
        sm="6"
        xl="4"
      >
        <ProjectTile :nbr="i-1" />
      </v-col>
    </v-row>

    <v-row align="center" justify="center" class="mb-5">
      <v-col cols="12" sm="6" xl="4">
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
            :to="localePath('/projects')"
          >
            {{ `${$t('misc.see')} ${nbrPj} ${$t('pages.projects.other')}${nbrPj > 1 ? 's' : ''}` }}_
          </v-btn>
        </v-hover>
      </v-col>
    </v-row>

    <Title
      :title="$t('pages.contact.text')"
      class="mt-10 mt-md-15"
    />

    <v-row align="center" justify="center" class="mt-4">
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
import { nbrs } from '@/config/i18n.config'

@Component({
  head (): object {
    return {
      title: this.$i18n.t('pages.index.title')
    }
  }
})
export default class Resume extends Vue {
  private socials: Array<Social> | null = null;
  private featured: number = 3;
  private nbrPj: number | null = null;

  created () {
    if (!this.socials) {
      this.socials = socials
    }

    if (!this.nbrPj) {
      this.nbrPj = nbrs.projects - this.featured
    }
  }
}
</script>
