<template>
  <v-container class="fluid fill-height">
    <Title :title="$t('pages.contact.text')" />

    <v-row align="center" justify="center">
      <v-col cols="12" sm="8">
        <p class="text-center text-h5 my-10">
          {{ $t('pages.contact.paragraph') }}
        </p>

        <ContactForm @submit="handleMessage" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'vue-property-decorator'

@Component({})
export default class Contact extends Vue {
  private msgData: {
    name: string,
    email: string,
    message: string
  } | null = null;

  @Emit('messageSent')
  handleMessage (data: { name: string, email: string, message: string }) {
    if (data.name && data.email && data.message) {
      return data
    }
  }
}
</script>
