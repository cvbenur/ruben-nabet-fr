<template>
  <v-container class="fluid fill-height">
    <Title
      :title="title"
      :alignment="alignment"
    />

    <v-row
      align="center"
      justify="center"
    >
      <v-col
        v-for="(tech, i) in technos"
        :key="i"
        cols="6"
        sm="6"
        md="3"
      >
        <TechTile
          :techno="tech"
          :size="90"
          :shift="alignment"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Technology } from '@/models/technologies'

@Component({})
export default class TechCategory extends Vue {
  @Prop({ required: true })
  technos!: Array<Technology>;

  @Prop({ required: false, default: 'title' })
  title!: string;

  @Prop({ required: false, default: 'left' })
  alignment!: string;
}
</script>
