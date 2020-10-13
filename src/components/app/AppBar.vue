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
            :to="localePath(`${item.link}`)"
          >
            <v-btn
              class="text-none"
              text
              ripple
              :color="item.active ? 'accent' : 'white'"
              @click="setActive(i)"
            >
              {{ $t(`navlinks.${item.title}`) }}_
            </v-btn>
          </nuxt-link>
        </v-row>
      </v-col>

      <v-col
        cols="2"
        md="3"
        class="text-right"
      >
        <div class="hidden-sm-and-down">
          <v-btn
            icon
          >
            <v-icon
              color="white"
              @click="setTheme()"
            >
              {{ $vuetify.theme.dark ? 'far fa-moon' : 'fas fa-sun' }}
            </v-icon>
          </v-btn>

          <v-menu
            offset-y
            transition="slide-y-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon color="white">
                  fas fa-globe
                </v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(lang, i) in $i18n.locales"
                :key="i"
                :to="switchLocalePath(lang.code)"
              >
                <v-list-item-title>{{ lang.name }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>

        <div class="hidden-md-and-up">
          <v-app-bar-nav-icon class="white--text" @click.stop="toggleDrawer()" />

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
                  @click.stop="toggleDrawer()"
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
              dark
            >
              <v-list-item-group mandatory>
                <nuxt-link
                  v-for="(item, i) in items"
                  :key="i"
                  :to="localePath(`${item.link}`)"
                >
                  <v-list-item
                    text
                    :color="item.active ? 'accent' : 'white'"
                    @click="setActive(i)"
                  >
                    {{ $t(`navlinks.${item.title}`) }}_
                  </v-list-item>
                </nuxt-link>
              </v-list-item-group>
            </v-list>

            <div class="text-center">
              <v-btn
                icon
              >
                <v-icon
                  color="white"
                  @click="setTheme()"
                >
                  {{ $vuetify.theme.dark ? 'far fa-moon' : 'fas fa-sun' }}
                </v-icon>
              </v-btn>

              <v-menu
                offset-y
                transition="slide-y-transition"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon color="white">
                      fas fa-globe
                    </v-icon>
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item
                    v-for="(lang, i) in $i18n.locales"
                    :key="i"
                    :to="switchLocalePath(lang.code)"
                  >
                    <v-list-item-title>{{ lang.name }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
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
      title: 'about',
      link: '/about-me',
      active: false
    },
    {
      title: 'technologies',
      link: '/technologies',
      active: false
    },
    {
      title: 'projects',
      link: '/',
      active: false
    }
  ];

  // Link handling
  setActive (n: number) {
    for (let i = 0; i < this.items.length; i++) {
      i !== n || n === -1
        ? this.items[i].active = false
        : this.items[i].active = true
    }
  }

  // Drawer handling
  toggleDrawer () {
    this.drawer = !this.drawer
  }

  // Theme handling
  setTheme () {
    this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    this.toggleDrawer()
  }
}
</script>
