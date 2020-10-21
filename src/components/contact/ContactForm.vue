<template>
  <v-container class="fluid fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" xl="8" class="pa-0">
        <v-text-field
          v-model="name"
          outlined
          flat
          color="secondary"
          :label="`${$t('pages.contact.fields.name')}_`"
          :rules="rules.reqTxt"
          @change="update()"
        />
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col cols="12" xl="8" class="pa-0">
        <v-text-field
          v-model="email"
          outlined
          flat
          color="secondary"
          :label="`${$t('pages.contact.fields.email')}_`"
          :rules="rules.reqEmail"
          @change="update()"
        />
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col cols="12" xl="8" class="pa-0">
        <v-text-field
          v-model="subject"
          outlined
          flat
          color="secondary"
          :label="`${$t('pages.contact.fields.subject')}_`"
          :rules="rules.reqTxt"
          @change="update()"
        />
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col cols="12" xl="8" class="pa-0">
        <v-textarea
          v-model="message"
          outlined
          flat
          color="secondary"
          :label="`${$t('pages.contact.fields.message')}_`"
          :rules="rules.reqTxt"
          @change="update()"
        />
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col cols="12" sm="4" class="pa-0">
        <v-hover v-slot:default="{ hover }">
          <v-btn
            :elevation="hover ? 12 : 0"
            color="secondary"
            class="text-none"
            large
            block
            type="submit"
            :href="mailto"
          >
            {{ $t('pages.contact.send') }}_
          </v-btn>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { formRules } from '@/models/formRules'

@Component({})
export default class ContactForm extends Vue {
  private name: string = '';
  private email: string = '';
  private subject: string = '';
  private message: string = '';

  private mailto: string = '';

  private mailInfo: string = '\n\n\n' +
    '--\n' +
    `Name:\t${this.name ? this.name : '-'}\n` +
    `Email:\t${this.email ? this.email : '-'}\n`

  private rules = formRules;

  update () {
    this.mailto = encodeURI(`mailto:contact@ruben-nabet.fr?subject=${`[Contact] ${this.subject}`}&body=${this.message + this.mailInfo}`)
  }

  created () {
    this.update()
  }
}
</script>

<style>

</style>
