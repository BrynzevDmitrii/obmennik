import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import Item from '../../../widgets/Item/Item';
import styles from './BaseSelect.module.scss'


export default function BaseSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectionValue, setSelectionValue] = useState('В офисе (наличные)');

 const openSelect =()=>{
  setIsOpen(!isOpen);
 }

 useEffect(()=>{
  const y  = document.getElementsByTagName('ariaSelected');
  console.log(y);
  
 },[])

const vref = useRef(null)
 const selectValue = () =>{
console.log('jhuo')
 }

  return (
    <div className={styles['select']}>
        <div className={styles['select_value']}>
          <button className={styles['select_btn']} onClick = {()=>openSelect()}>
            <span className={styles['select_span']}>
              {selectionValue}
              </span></button>
        </div>
          <ul  ref ={vref} className= {classNames(isOpen? styles['select_list_open'] : styles['select_list_closed'])}>
            <li id='item-selected'  aria-selected = 'true' className={styles['select_item']}>В офисе (наличные)</li>
            <li key={2}  aria-selected = 'false'className={styles['select_item']}>В офисе (безналично)</li>
            <li key={3}  aria-selected = 'false' className={styles['select_item']}>В интернет-банке и мобильном банке</li>
            <li key={4}  aria-selected = 'false' className={styles['select_item']}>В спецкассе по обмену валюты</li>
            <li key={5}  aria-selected = 'false' className={styles['select_item']}>Покупка по карте</li>
          </ul>
    </div>
  );
}


