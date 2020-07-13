import emoji from 'emoji-regex';

const own = Object.hasOwnProperty
const whitespace = /\s/g
const specials = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~’]/g
const regExp = /^.+(\s*\{#([a-z0-9\-_]+?)\}\s*)$/

export class BananaSlug {
  occurrences: IObjectSValueNType
  constructor() {
    this.occurrences = {}
  }
  /**
   * Generate a unique slug.
   * @param  {string} value String of text to slugify
   * @param  {boolean} [false] Keep the current case, otherwise make all lowercase
   * @return {string}       A unique slug string
   */
  slug(value: string, maintainCase: boolean) {
    const match = regExp.exec(value)
    let id = match ? match[2] : slugger(value, maintainCase === true);
    const originalSlug = id
    while (own.call(this.occurrences, id)) {
      this.occurrences[originalSlug]++
      id = originalSlug + '-' + this.occurrences[originalSlug]
    }
  
    this.occurrences[id] = 0
    return id
  }
  reset() {
    this.occurrences = Object.create(null)
  }
}

export function slugger (string: string, maintainCase: boolean) {
  if (typeof string !== 'string') return ''
  if (!maintainCase) string = string.toLowerCase()

  return string.trim()
    .replace(specials, '')
    .replace(emoji(), '')
    .replace(whitespace, '-')
}

export default function() {
  return new BananaSlug()
}
