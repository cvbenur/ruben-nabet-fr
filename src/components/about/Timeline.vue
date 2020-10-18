<template>
  <v-container class="fluid fill-height">
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="12"
        xl="9"
        class="py-0"
      >
        <v-timeline
          dense
          :reverse="right"
          class="py-0"
        >
          <v-lazy
            v-for="i in nbrExps"
            :key="i"
            v-model="isActive"
            :options="{
              threshold: .5
            }"
            transition="scroll-y-reverse-transition"
          >
            <v-timeline-item
              color="secondary"
              fill-dot
            >
              <v-card
                :color="$vuetify.theme.dark ? 'black' : 'primary'"
                elevation="1"
                class="py-3 px-5"
              >
                <p class="headline text-h5 font-weight-bold">
                  {{ $t(`pages.about.${category}.items[${i-1}].title`) }}_
                </p>
                <v-card-text class="pa-0 mb-4">
                  {{ $t(`pages.about.${category}.items[${i-1}].date`) }}
                </v-card-text>
                <v-card-text class="pa-0 white--text">
                  {{ $t(`pages.about.${category}.items[${i-1}].description`) }}
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
import { nbrs } from '@/config/i18n.config'

@Component({})
export default class Timeline extends Vue {
  @Prop({ required: true })
  category!: string;

  @Prop({ required: false, default: false })
  right!: boolean;

  private isActive: boolean = false;

  private nbrExps: number = 0;

  created () {
    if (this.nbrExps === 0) {
      this.nbrExps = (this.category === 'pro'
        ? nbrs.exps.pro
        : nbrs.exps.edu)
    }
  }
}
</script>
