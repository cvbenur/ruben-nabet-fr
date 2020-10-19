<template>
  <v-container fluid>
    <v-form
      ref="contactForm"
      v-model="formValid"
      lazy-validation
      @submit.prevent="sendMessage"
    >
      <v-text-field
        v-model="name"
        outlined
        flat
        color="secondary"
        :label="`${$t('pages.contact.fields.name')}_`"
        :rules="rules.reqTxt"
        @change="update()"
      />

      <v-text-field
        v-model="email"
        outlined
        flat
        color="secondary"
        :label="`${$t('pages.contact.fields.email')}_`"
        :rules="rules.reqEmail"
        @change="update()"
      />

      <v-text-field
        v-model="subject"
        outlined
        flat
        color="secondary"
        :label="`${$t('pages.contact.fields.subject')}_`"
        :rules="rules.reqTxt"
        @change="update()"
      />

      <v-textarea
        v-model="message"
        outlined
        flat
        color="secondary"
        :label="`${$t('pages.contact.fields.message')}_`"
        :rules="rules.reqTxt"
        @change="update()"
      />

      <v-row align="center" justify="center">
        <v-col cols="12" sm="4">
          <v-hover v-slot:default="{ hover }">
            <v-btn
              :elevation="hover ? 12 : 0"
              color="secondary"
              class="text-none mt-5"
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
    </v-form>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { formRules } from '@/models/formRules'

@Component({})
export default class ContactForm extends Vue {
  private formValid: boolean = true;

  private name: string | null = null;
  private email: string | null = null;
  private subject: string | null = null;
  private message: string | null = null;

  private mailto: string = '';

  private mailInfo: string = '\n\n\n' +
    '--\n' +
    `Name:\t${this.name ? this.name : '-'}\n` +
    `Email:\t${this.email ? this.email : '-'}\n`

  private rules = formRules;

  update () {
    this.mailto = encodeURI(`mailto:contact@ruben-nabet.fr?subject=${`[Contact] ${this.subject}`}&body=${this.message + this.mailInfo}`)
  }
}
</script>

<style>

</style>
