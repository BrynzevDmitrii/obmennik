import { FocusEvent, FormEvent, KeyboardEvent, useEffect, useState } from "react";
import styles from "./BaseInput.module.scss";

const defaultValue = "0";

export const BaseInput = ({ valut }: { valut: string }): JSX.Element => {

  const [actualValute, setActualValute] = useState(valut)

  useEffect(()=>{setActualValute(valut)},[valut])
  useEffect(()=>{replaseSimbol(actualValute)},[actualValute])
 
  const addSimbolMany = (e?: FocusEvent<HTMLInputElement, Element>, av:string) => {
  const value = e.target.value
    e.target.value  = value  + ' '+ av
  }

  const replaseSimbol = (newSimbol)=>{
    addSimbolMany(newSimbol)
  }
  
  const spaceAfterThirdCharacter=(e: FormEvent<HTMLInputElement>, y:string)=>{
    const userCurrent = e.target.value.replace(/\D/g, '')
    e.target.value = new Intl.NumberFormat( 'ru-RU', { style: 'decimal', currency: 'RUB' }).format(userCurrent)
  }

  const prohibitionEnteringLetters=(e: KeyboardEvent<HTMLInputElement>, )=>{
    // e.target.value = e.target.value.replace( /[a-z]/g, '');
  }

  

  return (
    <div className={styles["input_wrapper"]} >
        <input 
        className={styles["input"]} 
        placeholder={ defaultValue + actualValute}
        onBlur={(e)=>{addSimbolMany(e, actualValute)}}
        onInput = {(e)=>{spaceAfterThirdCharacter(e,actualValute)}} 
        onKeyUp = {(e)=>{prohibitionEnteringLetters(e)}}
        
                  />
        <label className={styles["input_label"]} >Сумма обмена</label>
    </div>
  );
};
