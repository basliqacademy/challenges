import { ButtonChangeLanguage } from "../../../../components/button-change-language/ButtonChangeLanguage";
import c from "./actions.module.css";

export function Actions() {
  return (
    <div className={c.container}>
      <div className={c.actions}>
        <ButtonChangeLanguage />
      </div>
    </div>
  );
}
