import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import Item from '../../../widgets/Item/Item';
import styles from './BaseSelect.module.scss'
import { SelectConvert } from './dateForSelects/DateForSelects';


export default function BaseSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectionValue, setSelectionValue] = useState('');

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
            {SelectConvert.map((item, indx)=>{
              return(
                <li 
                className={styles['select_item']} 
                onClick={()=>{setSelectionValue(item.value)
                               setIsOpen(false) }} 
                key={ item.value + indx }
                >
                  {item.value}
                </li>
              )
            })}
          </ul>
    </div>
  );
}


