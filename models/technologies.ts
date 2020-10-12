import {
  web,
  databases,
  deployment,
  devTools,
  appDev
} from '@/assets/resources/technologies.json'

export class Technology {
  title: string;
  color: string;
  textColor: string;
  pillColor: string;
  tileColor: string;
  icon: string;
  link: string;

  constructor (title: string, color: string, textColor: string, pillColor: string, tileColor: string, icon: string, link: string) {
    this.title = title
    this.color = color
    this.textColor = textColor
    this.pillColor = pillColor
    this.tileColor = tileColor
    this.icon = icon
    this.link = link
  }
}

export {
  web,
  databases,
  deployment,
  devTools,
  appDev
}
