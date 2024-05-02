import { ButtonChangeLanguage } from "../../components/button-change-language/ButtonChangeLanguage";
import { BasliqAcademy } from "./components/basliq-academy/BasliqAcademy";
import c from "./home.module.css";

export function Home() {
  return (
    <div className={c.container}>
      <BasliqAcademy />
      <ButtonChangeLanguage />
    </div>
  );
}
