<template>
  <v-container class="fluid fill-height">
    <Heading :title="$t('pages.contact.text')" />

    <v-row align="center" justify="center">
      <v-col cols="12" sm="8">
        <p class="text-center text-h5 my-10">
          {{ $t('pages.contact.paragraph') }}
        </p>

        <ContactForm />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  head (): object {
    return {
      title: this.$i18n.t('pages.contact.title')
    }
  }
})
export default class Contact extends Vue {
}
</script>
