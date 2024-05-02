import { useDictionary } from "../../../../hooks/useDictionary"
import c from "./description.module.css"

export function Description() {
  const d = useDictionary()

  return (
    <div className={c.container}>
      <p className={c.description}>{d.home.description}</p>
    </div>
  )
}
