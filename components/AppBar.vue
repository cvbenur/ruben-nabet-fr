<template>
  <v-app-bar
    app
    color="black"
    height="80px"
  >
    <v-row
      justify="space-between"
      align="center"
    >
      <v-col
        cols="10"
        sm="3"
      >
        <v-avatar>
          <img
            src="@/assets/img/pp_fb.jpg"
            alt="Ruben Nabet"
          >
        </v-avatar>
        <span class="ml-4">Ruben <b>NABET_</b></span>
      </v-col>

      <v-col
        sm="6"
        class="hidden-sm-and-down"
      >
        <v-row justify="space-between">
          <v-btn
            v-for="(item, i) in items"
            :key="i"
            class="text-none"
            text
          >
            {{ item.title }}
          </v-btn>
        </v-row>
      </v-col>

      <v-col
        cols="2"
        sm="3"
      >
        <div class="hidden-md-and-up">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

          <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
            right
            app
            floating
            width="100%"
            color="black"
          >
            <v-row
              justify="end"
              align="center"
              height="80px"
            >
              <v-col
                cols="2"
              >
                <v-btn
                  fab
                  icon
                  class="pr-5 my-1"
                  @click.stop="drawer = false"
                >
                  <v-icon color="white">
                    mdi-close
                  </v-icon>
                </v-btn>
              </v-col>
            </v-row>

            <v-divider />

            <v-list
              nav
            >
              <v-list-item-group>
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  class="text-none"
                  text
                >
                  {{ item.title }}
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-navigation-drawer>
        </div>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class AppBar extends Vue {
  private drawer: boolean = false;

  private items = [
    {
      title: 'A propos_',
      link: '/'
    },
    {
      title: 'Technologies_',
      link: '/'
    },
    {
      title: 'Projets_',
      link: '/'
    }
  ];
}
</script>
