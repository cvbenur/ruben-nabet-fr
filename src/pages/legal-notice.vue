<template>
  <v-container class="fluid fill-height">
    <Heading :title="$t('pages.legals.heading')" />

    <v-row align="center" justify="center" class="pt-5">
      <v-col cols="12">
        <p class="text-justify">
          {{ $t('pages.legals.paragraphs.first') }}
        </p>
      </v-col>
    </v-row>

    <v-row align="center" justify="center" class="pt-5">
      <v-col cols="12">
        <p class="text-h4">
          {{ $t('pages.legals.paragraphs.edition.title') }}_
        </p>

        <p class="text-justify">
          {{ $t('pages.legals.paragraphs.edition.text') }}
        </p>
      </v-col>
    </v-row>

    <v-row align="center" justify="center" class="pt-5">
      <v-col cols="12">
        <p class="text-h4">
          {{ $t('pages.legals.paragraphs.publishing.title') }}_
        </p>

        <p class="text-justify">
          {{ $t('pages.legals.paragraphs.publishing.text') }}
        </p>
      </v-col>
    </v-row>

    <v-row align="center" justify="center" class="pt-5">
      <v-col cols="12">
        <p class="text-h4">
          {{ $t('pages.legals.paragraphs.hosting.title') }}_
        </p>

        <p class="text-justify">
          {{ $t('pages.legals.paragraphs.hosting.text') }}
        </p>

        <div class="pl-10">
          <p class="text-justify mb-0">
            {{ $t('pages.legals.paragraphs.hosting.address.street') }}
          </p>
          <p class="text-justify mb-0">
            {{ $t('pages.legals.paragraphs.hosting.address.city') }}
          </p>
          <p class="text-justify mb-0">
            {{ $t('pages.legals.paragraphs.hosting.address.country') }}
          </p>
        </div>
      </v-col>
    </v-row>

    <v-row align="center" justify="center" class="pt-5">
      <v-col cols="12">
        <p class="text-h4">
          {{ $t('pages.legals.paragraphs.contact.title') }}_
        </p>

        <p class="text-justify">
          {{ $t('pages.legals.paragraphs.contact.text') }} : <v-btn href="mailto:rubenabet@gmail.com" color="accent" text class="text-none px-2">
            rubenabet@gmail.com
          </v-btn>.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  head (): object {
    return {
      title: this.$i18n.t('pages.legals.heading')
    }
  }
})
export default class LegalNotice extends Vue {

}
</script>
