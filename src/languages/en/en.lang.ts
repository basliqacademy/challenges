import { DictionaryHome } from "./home.lang";
import { DictionaryRoot } from "./root.lang";

export const DictionaryEn = {
  root: DictionaryRoot,
  home: DictionaryHome,
} as const;

export type Dictionary = typeof DictionaryEn;
