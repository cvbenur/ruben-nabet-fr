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
        md="3"
      >
        <nuxt-link to="/" @click.native="setActive(-1)">
          <v-avatar>
            <img
              src="@/assets/img/pp_fb.jpg"
              alt="Ruben Nabet"
            >
          </v-avatar>
          <span class="ml-4 white--text">Ruben <b>NABET_</b></span>
        </nuxt-link>
      </v-col>

      <v-col
        md="5"
        class="hidden-sm-and-down"
      >
        <v-row justify="space-between">
          <nuxt-link
            v-for="(item, i) in items"
            :key="i"
            :to="`${item.link}`"
          >
            <v-btn
              class="text-none"
              text
              ripple
              :color="item.active ? 'accent' : 'white'"
              @click="setActive(i)"
            >
              {{ item.title }}
            </v-btn>
          </nuxt-link>
        </v-row>
      </v-col>

      <v-col
        cols="2"
        md="3"
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
              <v-list-item-group mandatory>
                <nuxt-link
                  v-for="(item, i) in items"
                  :key="i"
                  :to="`${item.link}`"
                >
                  <v-list-item
                    class="text-none"
                    text
                    :color="item.active ? 'accent' : 'white'"
                    @click="setActive(i)"
                  >
                    {{ item.title }}
                  </v-list-item>
                </nuxt-link>
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
      link: '/',
      active: false
    },
    {
      title: 'Technologies_',
      link: '/',
      active: false
    },
    {
      title: 'Projets_',
      link: '/',
      active: false
    }
  ];

  setActive (n: number) {
    for (let i = 0; i < this.items.length; i++) {
      i !== n || n === -1
        ? this.items[i].active = false
        : this.items[i].active = true
    }
  }
}
</script>
