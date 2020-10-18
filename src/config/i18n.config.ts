import { pro, edu } from '../assets/resources/experiences.json'
import { projects } from '../assets/resources/projects.json'

import en from '../assets/locales/en.json'
import fr from '../assets/locales/fr.json'

pro.forEach(
  (item) => {
    en.pages.resume.pro.items.push(item.en as never)
    fr.pages.resume.pro.items.push(item.fr as never)
  }
)

edu.forEach(
  (item) => {
    en.pages.resume.edu.items.push(item.en as never)
    fr.pages.resume.edu.items.push(item.fr as never)
  }
)

projects.forEach(
  (item) => {
    en.pages.projects.items.push({
      id: item.id as never,
      title: item.title as never,
      description: item.description.en as never,
      img: item.img as never,
      link: item.link as never,
      repo: item.repo as never,
      techList: item.techList as never
    } as never)
    fr.pages.projects.items.push({
      id: item.id as never,
      title: item.title as never,
      description: item.description.fr as never,
      img: item.img as never,
      link: item.link as never,
      repo: item.repo as never,
      techList: item.techList as never
    } as never)
  }
)

export default {
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    fr
  }
}

export const nbrs = {
  exps: {
    pro: fr.pages.resume.pro.items.length,
    edu: fr.pages.resume.edu.items.length
  },
  projects: projects.length
}
