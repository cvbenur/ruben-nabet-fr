<template>
  <v-container class="fluid fill-height">
    <Heading :title="$t('pages.projects.heading')" />

    <v-row
      align="center"
      justify="start"
    >
      <v-col
        v-for="(project, i) in projects"
        :key="i"
        cols="12"
        sm="6"
        class="pt-0"
      >
        <ProjectTile :project="project" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Project, projects } from '@/models/project'

@Component({
  head (): object {
    return {
      title: this.$i18n.t('pages.projects.title')
    }
  }
})
export default class Projects extends Vue {
  private projects: Array<Project> | null = null;

  created () {
    if (!this.projects) {
      this.projects = projects as Array<Project>
    }
  }
}
</script>
