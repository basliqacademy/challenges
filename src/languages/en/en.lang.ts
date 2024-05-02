import { DictionaryRoot } from "./root.lang";

export const DictionaryEn = {
  root: DictionaryRoot,
} as const;

export type Dictionary = typeof DictionaryEn;
