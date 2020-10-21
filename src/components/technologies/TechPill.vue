<template>
  <v-chip
    class="mr-1 mb-2"
    small
    :color="techno.pillColor"
    pill
    dark
    :href="`${techno.link}`"
  >
    <p :class="`ma-0 ${techno.textColor}--text`">
      {{ techno.title }}
    </p>
  </v-chip>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Technology } from '@/models/technologies'

@Component({})
export default class TechnoPill extends Vue {
  @Prop({ required: true })
  techno!: Technology;
}
</script>
