import React from "react"
import { LanguageContext } from "../providers/Language"

export function useLanguage() {
  const { lang } = React.useContext(LanguageContext)
  return lang
}
