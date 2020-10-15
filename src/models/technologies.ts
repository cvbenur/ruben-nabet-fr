import {
  web,
  databases,
  deployment,
  devTools,
  appDev
} from '@/assets/resources/technologies.json'

export class Technology {
  title: string;
  textColor: string;
  pillColor: string;
  tileColor: string;
  icon: string;
  link: string;

  constructor (title: string, textColor: string, pillColor: string, tileColor: string, icon: string, link: string) {
    this.title = title
    this.textColor = textColor
    this.pillColor = pillColor
    this.tileColor = tileColor
    this.icon = icon
    this.link = link
  }
}

const technos = {
  web: web as unknown as Array<Technology>,
  databases: databases as unknown as Array<Technology>,
  deployment: deployment as unknown as Array<Technology>,
  devTools: devTools as unknown as Array<Technology>,
  appDev: appDev as unknown as Array<Technology>
}

export {
  technos
}
