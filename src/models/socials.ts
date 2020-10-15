import { socials } from '@/assets/resources/socials.json'

export class Social {
  private title: string;
  private handle: string;
  private icon: string;
  private link: string;

  constructor (title: string, handle: string, icon: string, link: string) {
    this.title = title
    this.handle = handle
    this.icon = icon
    this.link = link
  }
}

const soc = (socials as unknown as Array<Social>)

export {
  soc as socials
}
