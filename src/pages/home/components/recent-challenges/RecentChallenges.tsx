import React from "react"
import c from "./recent-challenges.module.css"

export function RecentChallenges() {
  return (
    <div className={c.container}>
      <div className={c.card}>
        <header className={c.header}>
          <figure>
            <image />
          </figure>
        </header>
        <main className={c.main}>
          <p className={c.heading}>New Challenge Is Here!</p>
          <p className={c.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            maxime earum provident ipsam iure. Possimus sequi voluptatem natus
            harum quos nam id ut velit quae nisi quidem, necessitatibus
            nesciunt. Tempore.
          </p>
        </main>
        <footer className={c.footer}>
          <button>Go To The Challenge</button>
        </footer>
      </div>
    </div>
  )
}
