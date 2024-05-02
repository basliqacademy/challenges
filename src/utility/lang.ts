import { Dir, Lang } from "../providers/Language"
import { DictionaryFa } from "../languages/fa/fa.lang"
import { Dictionary, DictionaryEn } from "../languages/en/en.lang"

export function getLanguage(lang: Lang): Lang {
  switch (lang) {
    case "en":
      return "fa"
    case "fa":
      return "en"
  }
}

export function getDir(lang: Lang): Dir {
  switch (lang) {
    case "en":
      return "ltr"
    case "fa":
      return "rtl"
  }
}

export function getDictionary(lang: Lang): Dictionary {
  switch (lang) {
    case "en":
      return DictionaryEn
    case "fa":
      return DictionaryFa
  }
}
