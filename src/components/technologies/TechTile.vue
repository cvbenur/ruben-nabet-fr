<template>
  <v-row
    align="center"
    justify="center"
    class="text-center"
  >
    <v-col
      cols="3"
      sm="2"
    >
      <v-row align="center" justify="center">
        <div :class="`mx-0 shifted-bottom-${shift}`">
          <v-card
            width="120"
            height="120"
            :color="techno.tileColor"
            rounded
            hover
            :href="`${techno.link}`"
          >
            <v-container class="fluid fill-height py-0">
              <v-row
                align="center"
                justify="center"
                class="pa-0"
              >
                <v-col
                  cols="12"
                  sm="12"
                  class="pa-0"
                >
                  <v-img
                    :src="require(`@/assets/svg/${techno.icon}`)"
                    :alt="techno.title"
                    aspect-ratio="1"
                    :width="size"
                    :height="size"
                    fluid
                    class="rounded-img"
                  />
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </div>
      </v-row>

      <v-row
        align="center"
        justify="center"
      >
        <p class="pt-3 d-flex flex-nowrap">
          {{ techno.title }}_
        </p>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Technology } from '@/models/technologies'

@Component({})
export default class TechTile extends Vue {
  @Prop({ required: false, default: '80' })
  size!: string;

  @Prop({ required: false, default: 'left' })
  shift!: string;

  @Prop({ required: true })
  techno!: Technology;
}
</script>
