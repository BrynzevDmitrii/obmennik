import { CalculateForm } from "../../CalculateForm/CalculateForm";
import { BaseInput } from "../../Inputs/BaseInput/BaseInput";
import BaseSelect from "../../Selects/BaseSelect/BaseSelect";
import { ValuteSelect } from "../../Selects/ValuteSelect/ValuteSelect";
import styles from "./CurrencyConverter.module.scss";
import { SelectConvert } from "./dateForSelects/DateForSelects";

export const CurrencyConverter = (): JSX.Element => {
  return (
    <section className={styles["converter"]}>

      <p className={styles["converter_title"]}>Конвертер валют</p>

      <div className={styles["converter_wrapper"]}>
        <div>
        <p className={styles["converter_exchange"]}>Способ обмена</p>
        <BaseSelect dataSelect={SelectConvert} />

        <p>у меня есть</p>
        <ValuteSelect />
        <BaseInput />

        <p>Мне надо получить</p>
        <ValuteSelect />
        <BaseInput />
        </div>
        <div className={styles["converter_calculate"]}>
          <CalculateForm />
        </div>
      </div>
    </section>
  );
};
