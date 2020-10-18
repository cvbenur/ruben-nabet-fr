<template>
  <client-only>
    <v-app-bar
      app
      color="black"
      height="80px"
      class="px-0"
    >
      <v-row
        justify="space-between"
        align="center"
      >
        <v-col
          cols="10"
          md="3"
        >
          <v-btn
            dark
            text
            :href="localePath('/')"
            class="text-none py-8"
            @click.native="setActive(-1)"
          >
            <v-avatar>
              <img
                src="@/assets/img/pp_fb.jpg"
                alt="Ruben Nabet"
              >
            </v-avatar>
            <span class="ml-4 white--text">Ruben <b>NABET_</b></span>
          </v-btn>
        </v-col>

        <v-col
          md="5"
          class="hidden-sm-and-down"
        >
          <v-row justify="space-between">
            <v-btn
              v-for="(item, i) in items"
              :key="i"
              :to="localePath(`${item.link}`)"
              nuxt
              class="text-none"
              text
              ripple
              :color="item.active ? 'secondary' : 'white'"
              @click="setActive(i)"
            >
              {{ $t(`navlinks.${item.title}`) }}_
            </v-btn>
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
                  nuxt
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
                  <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    text
                    :color="item.active ? 'secondary' : 'white'"
                    nuxt
                    :to="localePath(`${item.link}`)"
                    @click="setActive(i)"
                  >
                    {{ $t(`navlinks.${item.title}`) }}_
                  </v-list-item>
                </v-list-item-group>
              </v-list>

              <v-divider />

              <div class="text-center py-15">
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

                  <v-list dark>
                    <v-list-item
                      v-for="(lang, i) in $i18n.locales"
                      :key="i"
                      :to="switchLocalePath(lang.code)"
                      nuxt
                    >
                      <v-list-item-title>{{ lang.name }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>

              <v-divider />

              <v-row
                align="center"
                justify="center"
                class="pt-15"
              >
                <v-col
                  cols="12"
                  class="text-center"
                >
                  <v-btn
                    class="text-none text-caption font-weight-light"
                    text
                    dark
                    :href="localePath('/legal-notice')"
                  >
                    {{ $t('footer.legals') }}
                  </v-btn>
                </v-col>

                <v-spacer />

                <v-col
                  cols="12"
                  class="text-center"
                >
                  <p class="my-0 text-caption font-weight-light white--text">
                    {{ $t('footer.credits.first') }} <v-icon x-small class="px-1" color="accent">
                      {{ $vuetify.theme.dark ? 'far fa-heart' : 'fas fa-heart' }}
                    </v-icon> {{ $t('footer.credits.second') }} Ruben <b>NABET_</b>
                  </p>
                </v-col>
              </v-row>
            </v-navigation-drawer>
          </div>
        </v-col>
      </v-row>
    </v-app-bar>
  </client-only>
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
      link: '/projects',
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

  created () {
    this.items.forEach(
      (item) => {
        if (item.link === this.$route.path.split('/en')[1]) {
          item.active = true
        }
      }
    )
  }
}
</script>
