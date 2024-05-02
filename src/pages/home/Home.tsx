import { ButtonChangeLanguage } from "../../components/button-change-language/ButtonChangeLanguage"
import { BasliqAcademy } from "./components/basliq-academy/BasliqAcademy"
import { Description } from "./components/description/Description"
import { MadeIn } from "./components/made-in/MadeIn"
import { RecentChallenges } from "./components/recent-challenges/RecentChallenges"
import c from "./home.module.css"

export function Home() {
  return (
    <div className={c.container}>
      <Description />
      <BasliqAcademy />
      <MadeIn />
      <RecentChallenges />
      <ButtonChangeLanguage />
    </div>
  )
}
