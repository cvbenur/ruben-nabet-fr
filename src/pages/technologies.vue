<template>
  <v-container class="fluid fill-height d-flex justify-center">
    <Title title="Technologies" />

    <section>
      <TechCategory
        :technos="technos.web"
        title="Technologies Web"
      />

      <TechCategory
        :technos="technos.databases"
        title="Bases de données"
        alignment="right"
      />

      <TechCategory
        :technos="technos.deployment"
        title="Déploiement"
      />

      <TechCategory
        :technos="technos.devTools"
        title="Outils de développement"
        alignment="right"
      />

      <TechCategory
        :technos="technos.appDev"
        title="Développement d'applications"
      />
    </section>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Technology, technos } from '@/models/technologies'

@Component({})
export default class Technologies extends Vue {
  private technos: {
    web: Array<Technology>,
    databases: Array<Technology>,
    deployment: Array<Technology>,
    devTools: Array<Technology>,
    appDev: Array<Technology>,
  } | null = null;

  created () {
    if (!this.technos) {
      this.technos = {
        web: technos.web as Array<Technology>,
        databases: technos.databases as Array<Technology>,
        deployment: technos.deployment as Array<Technology>,
        devTools: technos.devTools as Array<Technology>,
        appDev: technos.appDev as Array<Technology>
      }
    }
  }
}
</script>
