import { ButtonChangeLanguage } from "../../components/button-change-language/ButtonChangeLanguage"
import { BasliqAcademy } from "./components/basliq-academy/BasliqAcademy"
import { MadeIn } from "./components/made-in/MadeIn"
import c from "./home.module.css"

export function Home() {
  return (
    <div className={c.container}>
      <BasliqAcademy />
      <MadeIn />
      <ButtonChangeLanguage />
    </div>
  )
}
