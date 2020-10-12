<template>
  <v-container fluid>
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="12"
        xl="8"
        class="py-0"
      >
        <v-timeline
          dense
          :reverse="right"
          class="py-0"
        >
          <v-lazy
            v-for="(exp, i) in exps"
            :key="i"
            v-model="isActive"
            :options="{
              threshold: .8
            }"
            transition="fade-transition"
          >
            <v-timeline-item
              color="secondary"
              fill-dot
            >
              <v-card
                :color="$vuetify.theme.dark ? 'black' : 'primary'"
                elevation="1"
              >
                <v-card-title
                  class="headline text-h5 font-weight-bold"
                >
                  {{ exp.title }}_
                </v-card-title>
                <v-card-text class="pt-4">
                  {{ exp.date }}
                </v-card-text>
                <v-card-text>
                  {{ exp.description }}
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-lazy>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Experience } from '@/models/experience'

@Component({})
export default class Timeline extends Vue {
  @Prop({ required: true })
  exps!: Array<Experience>;

  @Prop({ required: false, default: false })
  right!: boolean;

  private isActive: boolean = false;
}
</script>
