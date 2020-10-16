<template>
  <v-container class="fluid fill-height">
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        class="px-0"
      >
        <v-card
          rounded
          hover
          color="primary"
          :href="project.link"
          target="_blank"
        >
          <v-row
            align="center"
            justify="center"
          >
            <v-col
              cols="12"
              class="pt-0"
            >
              <v-img
                class="rounded-top px-1"
                :src="require('@/assets/img/pp_fb.jpg')"
                alt="Ruben NABET"
                width="800"
                height="200"
              />

              <p class="pt-3 px-2">
                {{ project.title }}_
              </p>

              <v-row
                align="center"
                justify="start"
              >
                <v-col cols="12" class="px-5 my-0 py-0">
                  <TechPill
                    v-for="(tech, i) in techs"
                    :key="i"
                    :techno="tech"
                  />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Project } from '@/models/project'
import { Technology, technos } from '@/models/technologies'

@Component({})
export default class ProjectTile extends Vue {
  private techs: Array<Technology> | null = null;

  @Prop({ required: true })
  project!: Project;

  created () {
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
