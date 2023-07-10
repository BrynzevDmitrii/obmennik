import { useState } from "react";
import { CalculateForm } from "../../features/CalculateForm/CalculateForm";
import { ValuteInputBox } from "../../features/ValuteInputBox/ValuteInputBox";
import { selectConvert } from "../../shared/Selects/BaseSelect/dateForSelects/DateForSelects"
import BaseSelect from "../../shared/Selects/BaseSelect/BaseSelect";

import styles from "./CurrencyConverter.module.scss";


export const CurrencyConverter = (): JSX.Element => {

  const [available , setAvailable] = useState('₽')
  const [get , setGet] = useState('₽')
  const availableValue = (v:string)=>{
    setAvailable(v)
  }
  const getValue = ( v:string )=>{
    setGet(v)
  }
  return (
    <section className={styles["converter"]}>
      <p className={styles["converter_title"]}>Конвертер валют</p>

      <div className={styles["converter_wrapper"]}>
        <div className={styles["converter_select-box"]}>
          <p className={styles["converter_exchange"]}>Способ обмена</p>
          <BaseSelect selectList = { selectConvert } />
        <div className={styles["converter_input-box"]}>
          <span className={styles["converter_input-box__span"]}>У меня есть</span>
          <ValuteInputBox vlu  = { availableValue }/>
        </div>
        <div className={styles["converter_input-box"]}>
        <span className={styles["converter_input-box__span"]}>Мне надо получить</span>
        <ValuteInputBox vlu =  { getValue } />
        </div>         
        </div>
        <div className={styles["converter_calculate"]}>
          <CalculateForm availableValute = { available } getValute = { get }/>
        </div>
      </div>
    </section>
  );
};
