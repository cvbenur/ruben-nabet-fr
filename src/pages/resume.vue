<template>
  <v-container fluid>
    <Heading :title="$t(`pages.resume.heading`)" />

    <p class="text-h5 text-center mt-10">
      {{ $t('pages.resume.text') }}
    </p>

    <v-row align="center" justify="center" class="mt-10">
      <v-col cols="12" xl="9">
        <v-row align="center" justify="center">
          <v-col cols="12" sm="6">
            <v-lazy
              v-model="isActive"
              :options="{
                threshold: .5
              }"
              transition="scroll-y-reverse-transition"
            >
              <v-card
                :color="`${$vuetify.theme.dark ? 'black' : 'white'}`"
                elevation="0"
                height="250"
                class="d-flex flex-column"
              >
                <v-card-title :class="`text-h6 py-2 px-4 mb-0 ${$vuetify.theme.dark ? 'white' : 'black'}--text`">
                  <span class="pr-2">{{ $t('pages.resume.lang.title') }}_</span><span class="font-italic text-body-2">{{ $t('pages.resume.lang.human') }}</span>
                </v-card-title>

                <hr class="secondary mx-4 my-1">

                <v-row class="pt-2 px-3">
                  <v-card-text
                    v-for="i in lang"
                    :key="i"
                    :class="`py-0 my-0 ${$vuetify.theme.dark ? 'white' : 'black'}--text`"
                  >
                    {{ $t(`pages.resume.lang.items[${i-1}].title`) }} : {{ $t(`pages.resume.lang.items[${i-1}].level`) }}
                  </v-card-text>
                </v-row>
              </v-card>
            </v-lazy>
          </v-col>

          <v-col cols="12" sm="6">
            <v-lazy
              v-model="isActive"
              :options="{
                threshold: .5
              }"
              transition="scroll-y-reverse-transition"
            >
              <v-card
                :color="`${$vuetify.theme.dark ? 'black' : 'white'}`"
                elevation="0"
                height="250"
                class="d-flex flex-column"
              >
                <v-card-title :class="`text-h6 py-2 px-4 mb-0 ${$vuetify.theme.dark ? 'white' : 'black'}--text`">
                  {{ $t('pages.resume.interests.title') }}_
                </v-card-title>

                <hr class="secondary mx-4 my-1">

                <v-row
                  v-for="i in interests"
                  :key="i"
                  class="pt-4"
                >
                  <v-card-text
                    :class="`py-0 my-0 ${$vuetify.theme.dark ? 'white' : 'black'}--text`"
                  >
                    <v-icon
                      :class="`my-0 py-0 mx-3 ${$vuetify.theme.dark ? 'white' : 'black'}--text`"
                    >
                      {{ $t(`pages.resume.interests.items[${i-1}].icon`) }}
                    </v-icon>{{ $t(`pages.resume.interests.items[${i-1}].text`) }}
                  </v-card-text>
                </v-row>
              </v-card>
            </v-lazy>
          </v-col>

          <v-col cols="12" sm="6">
            <v-lazy
              v-model="isActive"
              :options="{
                threshold: .5
              }"
              transition="scroll-y-reverse-transition"
            >
              <v-card
                :color="`${$vuetify.theme.dark ? 'black' : 'white'} d-flex flex-column`"
                elevation="0"
                height="250"
              >
                <v-card-title :class="`text-h6 py-2 px-4 mb-0 ${$vuetify.theme.dark ? 'white' : 'black'}--text`">
                  {{ $t('pages.technologies.title') }}__
                </v-card-title>

                <hr class="secondary mx-4 my-1">

                <v-card-text :class="`mb-0 ${$vuetify.theme.dark ? 'white' : 'black'}--text`">
                  {{ $t('pages.technologies.text') }}
                </v-card-text>

                <v-spacer />

                <v-card-actions class="pt-0 pb-3">
                  <v-row align="center" justify="center">
                    <v-hover v-slot:default="{ hover }">
                      <v-btn
                        :elevation="hover ? 12 : 0"
                        dark
                        class="text-none"
                        color="secondary"
                        nuxt
                        :to="localePath('/technologies')"
                      >
                        {{ $t('misc.check') }}_
                      </v-btn>
                    </v-hover>
                  </v-row>
                </v-card-actions>
              </v-card>
            </v-lazy>
          </v-col>

          <v-col cols="12" sm="6">
            <v-lazy
              v-model="isActive"
              :options="{
                threshold: .5
              }"
              transition="scroll-y-reverse-transition"
            >
              <v-card
                :color="`${$vuetify.theme.dark ? 'black' : 'white'}`"
                elevation="0"
                height="250"
                class="d-flex flex-column"
              >
                <v-card-title :class="`text-h6 py-2 px-4 mb-0 ${$vuetify.theme.dark ? 'white' : 'black'}--text`">
                  {{ $t('pages.projects.heading') }}_
                </v-card-title>

                <hr class="secondary mx-4 my-1">

                <v-card-text :class="`mb-2 ${$vuetify.theme.dark ? 'white' : 'black'}--text`">
                  {{ $t('pages.projects.text') }}
                </v-card-text>

                <v-spacer />

                <v-card-actions class="pt-0 pb-3">
                  <v-row align="center" justify="center">
                    <v-hover v-slot:default="{ hover }">
                      <v-btn
                        :elevation="hover ? 12 : 0"
                        dark
                        class="text-none"
                        color="secondary"
                        nuxt
                        :to="localePath('/projects')"
                      >
                        {{ $t('misc.check') }}_
                      </v-btn>
                    </v-hover>
                  </v-row>
                </v-card-actions>
              </v-card>
            </v-lazy>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <section class="mt-10">
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

    <section class="mt-10">
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
        sm="6"
        lg="4"
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
        sm="6"
        lg="4"
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
import { nbrs } from '@/config/i18n.config'

@Component({
  head (): object {
    return {
      title: this.$i18n.t('pages.resume.title')
    }
  }
})
export default class Resume extends Vue {
  private socials: Array<Social> | null = null;
  private lang: number | null = null;
  private interests: number | null = null;

  private isActive: boolean = false;

  created () {
    if (!this.socials) {
      this.socials = socials
    }

    if (!this.lang) {
      this.lang = nbrs.lang
    }

    if (!this.interests) {
      this.interests = nbrs.interests
    }
  }
}
</script>
