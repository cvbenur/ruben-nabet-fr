<template>
  <v-tooltip top color="primary">
    <template v-slot:activator="{ on, attrs }">
      <v-hover v-slot:default="{ hover }">
        <v-btn
          color="#6699CC"
          ripple
          small
          :href="`${link}`"
          target="_blank"
          fab
          :elevation="hover ? 12 : 0"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon color="white">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-hover>
    </template>
    <span>{{ tooltip }}</span>
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

  @Prop({ required: false, default: '' })
  handle!: string;

  @Prop({ required: true })
  icon!: string;

  private tooltip: string | null = null;

  created () {
    if (!this.tooltip) {
      this.tooltip = this.title

      if (this.handle !== '') {
        this.tooltip += ` (${this.handle})`
      }
    }
  }
}
</script>
