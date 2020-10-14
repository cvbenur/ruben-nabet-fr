<template>
  <v-container fluid>
    <Title :title="$t(`pages.about.title`)" />

    <section>
      <v-row
        align="center"
        justify="center"
        class="mt-sm-15 mt-10 d-flex"
      >
        <v-col
          cols="6"
          sm="6"
          md="4"
          lg="2"
          class="d-flex flex-row-reverse"
        >
          <v-img
            class="rounded-img shifted-bottom-left"
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
          :exps="exps.pro"
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
          :exps="exps.edu"
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
        sm="3"
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
        sm="3"
      >
        <v-btn
          color="secondary"
          class="text-none font-weight-bold"
          block
          outlined
          ripple
          large
        >
          {{ $t('pages.about.contact.text') }}_
        </v-btn>
      </v-col>

      <v-col
        cols="12"
        sm="3"
        class="d-flex justify-space-around"
      >
        <v-btn
          v-for="(social, i) in socials"
          :key="i"
          color="#6699CC"
          ripple
          large
          :href="`${social.link}`"
          target="_blank"
        >
          <v-icon color="white">
            {{ social.icon }}
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Experience, professionalExperiences, education } from '@/models/experience'

@Component({})
export default class About extends Vue {
  private socials = [
    {
      title: 'LinkedIn',
      icon: 'fab fa-linkedin-in',
      link: 'https://linkedin.com/in/ruben-nabet'
    },
    {
      title: 'GitHub',
      icon: 'fab fa-github-alt',
      link: 'https://github.com/cvbenur'
    },
    {
      title: 'SoundCloud',
      icon: 'fab fa-soundcloud',
      link: 'https://soundcloud.com/benur_music'
    }
  ];

  private exps: {
  pro: Array<Experience>,
  edu: Array<Experience>
  } = {
    pro: [],
    edu: []
  };

  created () {
    professionalExperiences.forEach(exp => this.exps.pro.push(new Experience(exp.title, exp.description, exp.date)))
    education.forEach(exp => this.exps.edu.push(new Experience(exp.title, exp.description, exp.date)))
  }
}
</script>
