import { useDictionary } from "../../../../hooks/useDictionary"
import { useLanguage } from "../../../../hooks/useLanguage"
import c from "./basliq-academy.module.css"

export function BasliqAcademy() {
  const d = useDictionary()
  const lang = useLanguage()

  return (
    <div className={c.container}>
      <p className={`${c.basliqAcademy} ${c[lang]}`}>{d.home.basliqAcademy}</p>
    </div>
  )
}
