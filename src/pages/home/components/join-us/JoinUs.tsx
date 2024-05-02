import c from "./join-us.module.css"
import telegramImage from "../../../../assets/telegram-x.avif"

export function JoinUs() {
  return (
    <div className={c.container}>
      <div className={c.card}>
        <figure className={c.image}>
          <img src={telegramImage} alt="" />
        </figure>
        <p className={c.text}>Join Us At Telegram!</p>
      </div>
    </div>
  )
}
