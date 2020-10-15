<template>
  <v-container class="fluid fill-height">
    <v-row
      align="center"
      justify="center"
      class="text-center"
    >
      <v-col>
        <v-row align="center" justify="center">
          <div :class="`mx-0 shifted-bottom-${shift}`">
            <v-card
              width="110"
              height="110"
              :color="techno.tileColor"
              rounded
              hover
              :href="`${techno.link}`"
              target="_blank"
            >
              <v-container class="fluid fill-height py-0">
                <v-row
                  align="center"
                  justify="center"
                  class="pa-0"
                >
                  <v-col
                    class="pa-0 d-flex justify-center"
                  >
                    <v-img
                      :src="require(`@/assets/svg/${techno.icon}`)"
                      :alt="techno.title"
                      aspect-ratio="1"
                      :width="size"
                      :height="size"
                      fluid
                      contain
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
          <p class="pt-3 mb-0">
            {{ techno.title }}_
          </p>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
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
