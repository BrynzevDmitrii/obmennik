import { CalculateForm } from "../../CalculateForm/CalculateForm";
import { BaseInput } from "../../Inputs/BaseInput/BaseInput";
import BaseSelect from "../../Selects/BaseSelect/BaseSelect";
import { ValuteSelect } from "../../Selects/ValuteSelect/ValuteSelect";
import styles from "./CurrencyConverter.module.scss";
import { SelectConvert } from "./dateForSelects/DateForSelects";

export const CurrencyConverter = (): JSX.Element => {
  return (
    <section className={styles["converter"]}>
    <div>
      <p className={styles["converter_title"]}>Конвертер валют</p>
      <p>Способ обмена</p>
      <BaseSelect dataSelect={SelectConvert} />

      <p>у меня есть</p>
      <ValuteSelect />
      <BaseInput />

      <p>Мне надо получить</p>
      <ValuteSelect />
      <BaseInput />
      </div>
      <div>
        <CalculateForm />
      </div>
    </section>
  );
};
