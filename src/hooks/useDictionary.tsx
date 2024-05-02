import React from "react";
import { LanguageContext } from "../providers/Language";

export function useDictionary() {
  const { d } = React.useContext(LanguageContext);
  return d;
}
