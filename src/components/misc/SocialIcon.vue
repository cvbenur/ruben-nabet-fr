<template>
  <v-tooltip top color="primary">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="#6699CC"
        ripple
        small
        :href="`${link}`"
        target="_blank"
        fab
        :elevation="0"
        v-bind="attrs"
        v-on="on"
      >
        <v-icon color="white">
          {{ icon }}
        </v-icon>
      </v-btn>
    </template>
    <span>{{ title }}</span>
  </v-tooltip>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class SocialIcon extends Vue {
  @Prop({ required: true })
  link!: string;

  @Prop({ required: true })
  title!: string;

  @Prop({ required: true })
  icon!: string;
}
</script>
