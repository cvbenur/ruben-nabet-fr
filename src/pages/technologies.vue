<template>
  <v-container class="fluid fill-height">
    <Title title="Technologies" />

    <TechCategory
      :technos="web"
      title="Technologies Web"
    />

    <TechCategory
      :technos="databases"
      title="Bases de données"
      alignment="right"
    />

    <TechCategory
      :technos="deployment"
      title="Déploiement"
    />

    <TechCategory
      :technos="devTools"
      title="Outils de développement"
      alignment="right"
    />

    <TechCategory
      :technos="appDev"
      title="Développement d'applications"
    />
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Technology, web, databases, deployment, devTools, appDev } from '@/models/technologies'

@Component({})
export default class Technologies extends Vue {
  private web: Array<Technology> = [];
  private databases: Array<Technology> = [];
  private deployment: Array<Technology> = [];
  private devTools: Array<Technology> = [];
  private appDev: Array<Technology> = [];

  created () {
    this.web = web as Array<Technology>
    this.databases = databases as Array<Technology>
    this.deployment = deployment as Array<Technology>
    this.devTools = devTools as Array<Technology>
    this.appDev = appDev as Array<Technology>
  }
}
</script>
