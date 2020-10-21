<template>
  <v-row
    align="center"
    justify="start"
    class="my-5 mx-0"
  >
    <p class="ma-0 text-h3 font-weight-bold">
      {{ title }}_
    </p>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class Heading extends Vue {
  @Prop({ required: true })
  title!: string;
}
</script>
