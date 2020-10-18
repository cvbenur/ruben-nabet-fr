<template>
  <v-container class="fluid fill-height">
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        class="px-0 py-0"
      >
        <v-hover v-slot:default="{ hover }">
          <v-card
            :elevation="hover ? 12 : 0"
            :class="{ 'on-hover': hover }"
            rounded
            :color="$vuetify.theme.dark ? 'primary' : 'white'"
            nuxt
            :to="localePath(`/projects/${$t(`pages.projects.items[${nbr}].id`)}`)"
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
                  :src="require(`@/assets/img/${$t(`pages.projects.items[${nbr}].img`)}`)"
                  alt="Ruben NABET"
                  width="800"
                  height="200"
                />

                <p :class="`pt-3 px-2 ${$vuetify.theme.dark ? 'white' : 'black'}--text`">
                  {{ $t(`pages.projects.items[${nbr}].title`) }}_
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
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Technology, technos } from '@/models/technologies'

@Component({})
export default class ProjectTile extends Vue {
  @Prop({ required: true })
  nbr!: number;

  private techs: Array<Technology> | null = null;

  created () {
    if (!this.techs) {
      this.techs = []

      require('@/assets/resources/projects.json').projects[this.nbr].techList.forEach(
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
