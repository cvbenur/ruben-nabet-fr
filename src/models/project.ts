import { projects } from '@/assets/resources/projects.json'

export class Project {
  private title: string;
  private link: string;
  private repo: string;
  techList: Array<string>;

  constructor (title: string, link: string, repo: string, techList: Array<string>) {
    this.title = title
    this.link = link
    this.repo = repo
    this.techList = techList
  }
}

const pjs = projects as unknown as Array<Project>

export { pjs as projects }
