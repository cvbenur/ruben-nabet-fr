<template>
  <v-container fluid>
    <Title title="A propos de moi" />

    <section>
      <v-row
        align="center"
        justify="center"
        class="mt-sm-15 mt-10 d-flex"
      >
        <v-col
          cols="12"
          sm="6"
          class="d-flex d-inline justify-md-end justify-center"
        >
          <div>
            <v-img
              class="rounded-img shifted-bottom-left"
              :src="require('@/assets/img/pp_fb.jpg')"
              alt="Ruben NABET"
              width="250"
              aspect-ratio="1"
              contain
            />
          </div>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          class="text-left mt-10 mt-md-0"
        >
          <p class="ma-0">
            Nam a ultricies mauris, sit amet euismod enim. Integer pulvinar, justo quis mollis rutrum, lacus quam ultrices turpis, ut iaculis sem leo sed neque. Aenean eget commodo lectus. Nam ut diam libero. Nam aliquam metus mauris, id rhoncus arcu blandit id. Nulla sagittis eleifend tortor, vulputate placerat ante auctor sit amet. Aenean fringilla, lacus nec lobortis consectetur, justo massa molestie nisi, id pretium mauris magna a ligula. Aenean nisl sapien, dictum ut dignissim consequat, rhoncus vel ipsum. Fusce convallis dolor id consectetur volutpat.
          </p>
        </v-col>
      </v-row>
    </section>

    <section>
      <Title
        title="Expérience professionnelle"
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
          right
        />
      </v-row>
    </section>

    <section>
      <Title title="Formation" />

      <v-row
        fill-height
        align="center"
        justify="center"
        class="mt-5"
      >
        <Timeline
          :exps="exps.edu"
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
          :href="'/docs/Ruben_NABET_CV-FR.pdf'"
          download
        >
          Télécharger mon CV_
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
          Me contacter_
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
