<template>
  <v-container class="fluid fill-height">
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="2"
        class="d-inline d-sm-flex flex-row-reverse text-center"
      >
        <div class="pa-1 accent rounded-circle d-inline-block">
          <v-avatar
            size="102"
          >
            <v-img
              :src="require('@/assets/img/pp_fb.jpg')"
              alt="Ruben NABET"
              size="80px"
            />
          </v-avatar>
        </div>
      </v-col>

      <v-col
        cols="12"
        sm="4"
      >
        <v-row class="mx-0 mb-4">
          <p class="text-h3 font-weight-thin ma-0">
            Ruben <b class="font-weight-bold">NABET_</b>
          </p>
        </v-row>

        <v-row class="mx-0">
          <p class="text-sm-h4 text-h5 font-weight-thin ma-0">
            Développeur <b class="font-weight-bold text-custom-blue">Full-Stack</b>
          </p>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class Index extends Vue {

}
</script>