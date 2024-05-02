import c from "./join-us.module.css"
import telegramImage from "../../../../assets/telegram-x.avif"
import { useDictionary } from "../../../../hooks/useDictionary"

export function JoinUs() {
  const d = useDictionary()

  return (
    <div className={c.container}>
      <div className={c.card}>
        <figure className={c.image}>
          <img src={telegramImage} alt="" />
        </figure>
        <a className={c.text} href="https://t.me/basliqacademy">
          {d.home.joinUs}
        </a>
      </div>
    </div>
  )
}
