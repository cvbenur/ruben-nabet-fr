<template>
  <v-row
    fill-height
    align="center"
    :justify="alignment === 'left' ? 'start' : 'end'"
    class="my-5 mx-0"
  >
    <p class="ma-0 text-h4 font-weight-bold">
      {{ title }}_
    </p>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class Title extends Vue {
  @Prop({ required: true })
  title!: string;

  @Prop({ required: false, default: 'left' })
  alignment!: string;
}
</script>
