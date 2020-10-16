<template>
  <v-container class="fluid fill-height">
    <Heading :title="getPageData().title" />

    <v-row
      align="center"
      justify="center"
    >
      <v-col cols="12" class="pt-8">
        <p>Description sa mère</p>
      </v-col>

      <v-col
        cols="12"
        class="d-flex justify-center"
      >
        <v-img
          class="custom-rounded px-1"
          :src="require('@/assets/img/pp_fb.jpg')"
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
      align="center"
      justify="start"
    >
      <v-col class="pb-0 pt-5">
        <p class="mb-0">
          Socials :
        </p>
      </v-col>
    </v-row>
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        v-for="i in 3"
        :key="i"
        cols="4"
        sm="1"
        class="text-center"
      >
        <SocialIcon
          icon="fab fa-github-alt"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { projects } from '@/assets/resources/projects.json'
import { Project } from '@/models/project'
import { Technology, technos } from '@/models/technologies'

@Component({
  head (): object {
    return {
      title: (projects.find(pj => pj.id === this.$route.params.id) as unknown as Project).title
    }
  }
})
export default class ProjectPage extends Vue {
  private id: string = this.$route.params.id;
  private project: Project | null = null;
  private techs: Array<Technology> | null = null;

  private overlay: boolean = false;

  getPageData () {
    return projects.find(pj => pj.id === this.id) as unknown as Project
  }

  created () {
    if (!this.project) {
      this.project = this.getPageData()
    }

    if (!this.techs) {
      this.techs = []

      this.project.techList.forEach(
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
