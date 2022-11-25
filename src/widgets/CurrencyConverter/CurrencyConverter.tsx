import { CalculateForm } from "../../features/CalculateForm/CalculateForm";
import { ValuteInputBox } from "../../features/ValuteInputBox/ValuteInputBox";
import BaseSelect from "../../shared/Selects/BaseSelect/BaseSelect";
import styles from "./CurrencyConverter.module.scss";

export const CurrencyConverter = (): JSX.Element => {
  return (
    <section className={styles["converter"]}>
      <p className={styles["converter_title"]}>Конвертер валют</p>

      <div className={styles["converter_wrapper"]}>
        <div className={styles["converter_select-box"]}>
          <p className={styles["converter_exchange"]}>Способ обмена</p>
          <BaseSelect  />
        <div className={styles["converter_input-box"]}>
          <span className={styles["converter_input-box__span"]}>У меня есть</span>
          <ValuteInputBox />
        </div>
        <div className={styles["converter_input-box"]}>
        <span className={styles["converter_input-box__span"]}>Мне надо получить</span>
        <ValuteInputBox />
        </div>         
        </div>
        <div className={styles["converter_calculate"]}>
          <CalculateForm />
        </div>
      </div>
    </section>
  );
};
