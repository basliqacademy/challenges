import { Dir, Lang } from "../providers/Language";
import { DictionaryFa } from "../languages/fa/fa.lang";
import { Dictionary, DictionaryEn } from "../languages/en/en.lang";

export function getLanguage(lang: Lang): Lang {
  switch (lang) {
    case "en-US":
      return "fa-IR";
    case "fa-IR":
      return "en-US";
  }
}

export function getDir(lang: Lang): Dir {
  switch (lang) {
    case "en-US":
      return "ltr";
    case "fa-IR":
      return "rtl";
  }
}

export function getDictionary(lang: Lang): Dictionary {
  switch (lang) {
    case "en-US":
      return DictionaryEn;
    case "fa-IR":
      return DictionaryFa;
  }
}
