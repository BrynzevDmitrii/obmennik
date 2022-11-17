import { FocusEvent, FormEvent, KeyboardEvent, useEffect, useState } from "react";
import styles from "./BaseInput.module.scss";

const defaultValue = "0";

export const BaseInput = ({ valut }: { valut: string }): JSX.Element => {

  const [actualValute, setActualValute] = useState(valut)

  useEffect(()=>{setActualValute(valut)},[valut])
 
  const addSimbolMany = (e: FocusEvent<HTMLInputElement, Element>) => {
  const value = e.target.value
  e.target.value =  value +" "+ actualValute;
  // e.target.value && (e.target.value = e.target.value.replace(/ /g, '').match(/.{1,3}/g).join` `);
  }

  const spaceAfterThirdCharacter=(e: FormEvent<HTMLInputElement>)=>{
    
  }

  const prohibitionEnteringLetters=(e: KeyboardEvent<HTMLInputElement>)=>{
    // e.target.value = e.target.value.replace( /[a-z]/g, '');
  }

  console.log(actualValute);

  return (
    <div className={styles["input_wrapper"]} >
        <input 
        type={'text'} 
        className={styles["input"]} 
        placeholder={ defaultValue + actualValute}
        onBlur={(e)=>{addSimbolMany(e)}}
        onInput = {(e)=>{spaceAfterThirdCharacter(e)}} 
        onKeyUp = {(e)=>{prohibitionEnteringLetters(e)}}
          />
        <label className={styles["input_label"]} >Сумма обмена</label>
    </div>
  );
};
