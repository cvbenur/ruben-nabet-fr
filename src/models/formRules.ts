const emailRegex = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

function fieldRequired (v: any): string | boolean {
  return v != null || 'Ce champ doit être rempli.'
}

function isAnEmail (v: string): string|boolean {
  return emailRegex.test(v) || 'Addresse email invalide'
}

export const formRules = {
  reqTxt: [
    fieldRequired
  ],
  reqEmail: [
    fieldRequired,
    isAnEmail
  ]
}
