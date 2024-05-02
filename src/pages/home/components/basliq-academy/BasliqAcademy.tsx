import { useDictionary } from "../../../../hooks/useDictionary";
import c from "./basliq-academy.module.css";

export function BasliqAcademy() {
  const d = useDictionary();

  return (
    <div className={c.container}>
      <p className={c.basliqAcademy}>{d.home.basliqAcademy}</p>
    </div>
  );
}
