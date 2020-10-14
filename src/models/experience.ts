import { professionalExperiences, education } from '@/assets/resources/experiences.json'

export class Experience {
  private title: string;
  private description: string;
  private date: string;

  constructor (title: string, description: string, date: string) {
    this.title = title
    this.description = description
    this.date = date
  }
}

export const exps = {
  professionalExperiences,
  education
}
