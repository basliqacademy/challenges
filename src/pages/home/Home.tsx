import { Actions } from "./components/actions/Actions";
import { BasliqAcademy } from "./components/basliq-academy/BasliqAcademy";
import { Description } from "./components/description/Description";
import { JoinUs } from "./components/join-us/JoinUs";
import { MadeIn } from "./components/made-in/MadeIn";
import { MadeWith } from "./components/made-with/MadeWith";
import { RecentChallenges } from "./components/recent-challenges/RecentChallenges";
import c from "./home.module.css";

export function Home() {
  return (
    <div className={c.container}>
      <MadeWith />
      <JoinUs />
      <Description />
      <BasliqAcademy />
      <MadeIn />
      <Actions />
      <RecentChallenges />
    </div>
  );
}
