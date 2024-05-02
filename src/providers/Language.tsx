import React from "react";
import { getDictionary, getDir } from "../utility/lang";
import { Dictionary, DictionaryEn } from "../languages/en/en.lang";

export type Lang = "fa-IR" | "en-US";
export type Dir = "rtl" | "ltr";

type LanguageContext = {
  lang: Lang;
  dir: Dir;
  d: Dictionary;
  setLang: (lang: Lang) => void;
};

// @ts-expect-error bypassing null checking by not providing a null
export const LanguageContext = React.createContext<LanguageContext>();
type Props = {
  children: React.ReactNode;
};

export const LanguageProvider = ({ children }: Props) => {
  const [lang, setLang] = React.useState<Lang>("en-US");
  const [dir, setDir] = React.useState<Dir>("ltr");
  const [d, setD] = React.useState<Dictionary>(DictionaryEn);

  React.useEffect(() => {
    setDir(getDir(lang));
    setD(getDictionary(lang));
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ d, lang, dir, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};
