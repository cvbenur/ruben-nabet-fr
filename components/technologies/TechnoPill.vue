<template>
  <v-chip
    class="ma-2"
    small
    :color="techno.color"
    pill
  >
    <p :class="`ma-0 ${textColor}--text`">
      {{ techno.title }}
    </p>
  </v-chip>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Technology, web } from '@/models/technologies'

@Component({})
export default class TechnoPill extends Vue {
  @Prop({ required: false, default: new Technology(web[0].title, web[0].color, web[0].textColor, web[0].icon, web[0].link) })
  techno!: Technology;

  @Prop({ required: false, default: 'white' })
  textColor!: string;
}
</script>
