import { useDictionary } from "../../../../hooks/useDictionary"
import c from "./made-in.module.css"

export function MadeIn() {
  const d = useDictionary()

  return (
    <div className={c.container}>
      <p className={c.text}>{d.home.madeIn}</p>
    </div>
  )
}
