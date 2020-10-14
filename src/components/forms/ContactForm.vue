<template>
  <v-container fluid>
    <v-form
      ref="contactForm"
      v-model="formValid"
      lazy-validation
      @submit.prevent="submitForm"
    >
      <v-text-field
        v-model="name"
        outlined
        flat
        color="secondary"
        :label="`${$t('pages.contact.fields.name')}`"
        :rules="rules.reqTxt"
      />

      <v-text-field
        v-model="email"
        outlined
        flat
        color="secondary"
        :label="`${$t('pages.contact.fields.email')}`"
        :rules="rules.reqEmail"
      />

      <v-textarea
        v-model="message"
        outlined
        flat
        color="secondary"
        :label="`${$t('pages.contact.fields.message')}`"
        :rules="rules.reqTxt"
      />

      <v-row align="center" justify="center">
        <v-col cols="12" sm="4">
          <v-btn
            color="secondary"
            class="text-none mt-5"
            outlined
            large
            type="submit"
            block
          >
            {{ $t('pages.contact.send') }}_
          </v-btn>
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

  private name: string = '';
  private email: string = '';
  private message: string = '';

  private rules = formRules;

  submitForm () {
    if (this.formValid) {
      this.$emit('submit', {
        name: this.name,
        email: this.email,
        message: this.message
      })
    }
  }
}
</script>

<style>

</style>
