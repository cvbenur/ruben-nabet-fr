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
          align-top
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
              :class="i === nbrExps ? 'pb-0' : ''"
            >
              <v-card
                :color="$vuetify.theme.dark ? 'black' : 'white'"
                elevation="1"
                class="py-3 px-5"
              >
                <p :class="`headline text-h5 mb-0 font-weight-bold ${$vuetify.theme.dark ? 'white' : 'black'}--text`">
                  {{ $t(`pages.about.${category}.items[${i-1}].title`) }}_
                </p>

                <hr class="my-3 secondary">

                <v-card-text :class="`pa-0 mb-4 ${$vuetify.theme.dark ? 'grey' : 'black'}--text`">
                  {{ $t(`pages.about.${category}.items[${i-1}].date`) }}
                </v-card-text>
                <v-card-text :class="`pa-0 text-justify ${$vuetify.theme.dark ? 'white' : 'black'}--text`">
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
