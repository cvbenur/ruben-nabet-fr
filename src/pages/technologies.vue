<template>
  <v-container class="fluid fill-height d-flex justify-center">
    <Title :title="$t(`pages.technologies.title`)" />

    <section>
      <TechCategory
        :technos="technos.web"
        :title="$t(`pages.technologies.categories.web`)"
      />

      <TechCategory
        :technos="technos.databases"
        :title="$t(`pages.technologies.categories.db`)"
        alignment="right"
      />

      <TechCategory
        :technos="technos.deployment"
        :title="$t(`pages.technologies.categories.deployment`)"
      />

      <TechCategory
        :technos="technos.devTools"
        :title="$t(`pages.technologies.categories.devTools`)"
        alignment="right"
      />

      <TechCategory
        :technos="technos.appDev"
        :title="$t(`pages.technologies.categories.appDev`)"
      />
    </section>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Technology, technos } from '@/models/technologies'

@Component({
  head (): object {
    return {
      title: this.$i18n.t('pages.technologies.title')
    }
  }
})
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
        web: technos.web,
        databases: technos.databases,
        deployment: technos.deployment,
        devTools: technos.devTools,
        appDev: technos.appDev
      }
    }
  }
}
</script>
