import { useDictionary } from "../../../../hooks/useDictionary"
import { useLanguage } from "../../../../hooks/useLanguage"
import c from "./recent-challenges.module.css"
import { Link } from "react-router-dom"

export function RecentChallenges() {
  const d = useDictionary()
  const lang = useLanguage()

  return (
    <div className={c.container}>
      <div className={c.card}>
        <header className={c.header}>
          <figure>
            <image />
          </figure>
        </header>
        <main className={c.main}>
          <div className="sparkle">
            <Link className={c.heading} to={`/${lang}/challenges/01-card`}>
              {d.home.recentChallengesTitle}
            </Link>
            <div className="sparkle-1"></div>
            <div className="sparkle-2"></div>
            <div className="sparkle-3"></div>
            <div className="sparkle-4"></div>
            <div className="sparkle-5"></div>
          </div>
          <p className={c.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            maxime earum provident ipsam iure. Possimus sequi voluptatem natus
            harum quos nam id ut velit quae nisi quidem, necessitatibus
            nesciunt. Tempore.
          </p>
        </main>
        <footer className={c.footer}>
          <Link
            to={`/${lang}/challenges/01-card`}
            className="button primary all-width"
          >
            <p>{d.home.goToTheChallenge}</p>
          </Link>
        </footer>
      </div>
    </div>
  )
}
