<template>
  <v-container class="fluid fill-height">
    <Heading :title="project.title" />

    <v-row
      align="center"
      justify="center"
    >
      <v-col cols="12" class="pt-8">
        <p>{{ $t(`pages.projects.items[${nbr}].description`) }}</p>
      </v-col>

      <v-col
        cols="12"
        class="d-flex justify-center"
      >
        <v-img
          class="custom-rounded px-1"
          :src="require(`@/assets/img/projects/${$t(`pages.projects.items[${nbr}].img`)}`)"
          alt="Ruben NABET"
          width="200"
          height="320"
        />
      </v-col>
    </v-row>

    <v-row
      align="center"
      justify="start"
    >
      <v-col class="pb-0">
        <p class="mb-0">
          Technologies :
        </p>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col>
        <TechPill
          v-for="(tech, i) in techs"
          :key="i"
          cols="12"
          :techno="tech"
        />
      </v-col>
    </v-row>

    <v-row
      v-show="project.repo !== '' || project.link !== ''"
      align="center"
      justify="start"
    >
      <v-col class="pb-0 pt-5">
        <p class="mb-0">
          {{ $t('misc.socials') }} :
        </p>
      </v-col>
    </v-row>

    <v-row
      align="center"
      justify="center"
    >
      <v-col
        v-show="project.repo !== ''"
        cols="4"
        sm="1"
        class="text-center"
      >
        <SocialIcon
          :title="`${$t('misc.see')} ${$t('misc.project')} ${$t('misc.on')} GitHub`"
          :link="project.repo"
          icon="fab fa-github-alt"
        />
      </v-col>

      <v-col
        v-show="project.link !== ''"
        cols="4"
        sm="1"
        class="text-center"
      >
        <SocialIcon
          :title="`${$t('misc.see')} ${$t('misc.website')}`"
          :link="project.link"
          icon="fas fa-globe-africa"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Project } from '@/models/project'
import { Technology, technos } from '@/models/technologies'

const projects = require('@/assets/resources/projects.json').projects

@Component({
  head (): object {
    return {
      title: projects.find((pj: any) => pj.id === this.$route.params.id).title
    }
  }
})
export default class ProjectPage extends Vue {
  private id: string = this.$route.params.id;
  private nbr: number | null = null;
  private project: Project | null = null;
  private techs: Array<Technology> | null = null;

  getPageData () {
    return projects.find((pj: any) => pj.id === this.id)
  }

  created () {
    if (!this.project) {
      this.project = this.getPageData() as unknown as Project
    }

    if (!this.nbr) {
      this.nbr = projects.indexOf(this.project)
    }

    if (!this.techs && this.nbr !== null) {
      this.techs = []

      projects[this.nbr].techList.forEach(
        (techTitle: string) => {
          Object.values(technos).forEach(
            (category: Array<Technology>) => {
              if (category.some(tech => tech.title === techTitle)) {
                const found = category.find(tech => tech.title === techTitle)

                if (found !== undefined && this.techs) {
                  this.techs.push(found)
                }
              }
            }
          )
        }
      )
    }
  }
}
</script>
