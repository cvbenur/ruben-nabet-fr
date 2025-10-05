import { en } from "./en";

export type Translation = typeof en;

type Leaves<T> = T extends object
  ? {
      [K in keyof T]: `${K & string}${Leaves<T[K]> extends never ? "" : `.${Leaves<T[K]>}`}`;
    }[keyof T]
  : never;

export type TranslationKeys = Leaves<Translation>;

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "en";
    resources: {
      fr: Translation;
      en: Translation;
    };
  }
}
