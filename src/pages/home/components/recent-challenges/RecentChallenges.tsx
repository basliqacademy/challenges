import { useDictionary } from "../../../../hooks/useDictionary";
import c from "./recent-challenges.module.css";
import { Link } from "react-router-dom";

export function RecentChallenges() {
  const d = useDictionary();

  return (
    <div className={c.container}>
      <div className={c.card}>
        <header className={c.header}>
          <figure>
            <image />
          </figure>
        </header>
        <main className={c.main}>
          <p className={c.heading}>{d.home.recentChallengesTitle}</p>
          <p className={c.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            maxime earum provident ipsam iure. Possimus sequi voluptatem natus
            harum quos nam id ut velit quae nisi quidem, necessitatibus
            nesciunt. Tempore.
          </p>
        </main>
        <footer className={c.footer}>
          <Link to="/challenges/01-card" className="button primary all-width">
            <p>{d.home.goToTheChallenge}</p>
          </Link>
        </footer>
      </div>
    </div>
  );
}