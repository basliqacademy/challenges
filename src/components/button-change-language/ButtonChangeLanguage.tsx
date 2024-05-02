import React from "react"
import { LanguageContext } from "../../providers/Language"
import { getLanguage } from "../../utility/lang"
import Icon from "../../icons/Icon"

export function ButtonChangeLanguage() {
  const { lang, setLang } = React.useContext(LanguageContext)

  function handleClick() {
    setLang(getLanguage(lang))
  }

  return (
    <button className="button secondary icon-only" onClick={handleClick}>
      <Icon type="world" size="large" />
    </button>
  )
}
