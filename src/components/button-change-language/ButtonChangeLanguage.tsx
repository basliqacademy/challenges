import React from "react";
import { LanguageContext } from "../../providers/Language";
import { getLanguage } from "../../utility/lang";

export function ButtonChangeLanguage() {
  const { lang, setLang } = React.useContext(LanguageContext);

  function handleClick() {
    setLang(getLanguage(lang));
  }

  return (
    <button className="button secondary icon-only" onClick={handleClick}>
      <p>🌐</p>
    </button>
  );
}
