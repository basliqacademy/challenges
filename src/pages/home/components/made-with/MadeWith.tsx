import { useDictionary } from "../../../../hooks/useDictionary";
import c from "./made-with.module.css";

export function MadeWith() {
  const d = useDictionary();

  return (
    <div className={c.container}>
      <p className={c.text}>{d.home.madeWith}</p>
    </div>
  );
}
