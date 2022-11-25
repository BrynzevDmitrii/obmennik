import { FocusEvent, FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import styles from "./BaseInput.module.scss";

const defaultValue = "0";


export const BaseInput = ({ valut }: { valut: string }): JSX.Element => {

  const [actualValute, setActualValute] = useState(valut)
  const valueRef = useRef<HTMLInputElement>(null);

  useEffect(()=>{setActualValute(valut)},[valut])

  useEffect(()=>{replaseSimbol(actualValute)},[actualValute])


  const replaseSimbol = (activValut: string)=>{
   let tr = valueRef.current.value;
   let rtu = tr.split(' ')
    rtu[1] = activValut;
    let e = rtu.join(' ')
    valueRef.current.value = e
  }

  const addSimbolMany = (e: FocusEvent<HTMLInputElement, Element>) => {
    const value = e.target.value
    e.target.value  = value  + ' ' + actualValute
    
  }
  
  const spaceAfterThirdCharacter=(e: FormEvent<HTMLInputElement>)=>{
     const userCurrent = e.target.value.replace(/\D/g, '')
    e.target.value = new Intl.NumberFormat( 'ru-RU', { style: 'decimal'}).format(userCurrent)
  }
  

  return (
    <div  className={styles["input_wrapper"]} >
        <input 
        ref = {valueRef }
        className = {styles["input"]} 
        placeholder = { defaultValue + actualValute}
        onBlur = {(e)=>{addSimbolMany(e)}}
        onInput = {(e)=>{spaceAfterThirdCharacter(e)}}   
        
                  />
        <label className={styles["input_label"]} >Сумма обмена</label>
    </div>
  );
};
