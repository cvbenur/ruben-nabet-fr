<template>
  <v-container class="fluid fill-height">
    <Heading :title="$t('pages.projects.heading')" />

    <v-row
      align="center"
      justify="start"
    >
      <v-col
        v-for="i in nbrPrj"
        :key="i"
        cols="12"
        sm="6"
        class="pt-0"
      >
        <ProjectTile :nbr="i - 1" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { nbrs } from '@/config/i18n.config'

@Component({
  head (): object {
    return {
      title: this.$i18n.t('pages.projects.title')
    }
  }
})
export default class Projects extends Vue {
  private nbrPrj: number | null = null;

  created () {
    if (!this.nbrPrj) {
      this.nbrPrj = nbrs.projects
    }
  }
}
</script>
