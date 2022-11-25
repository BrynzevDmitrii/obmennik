import classNames from 'classnames';
import { useState } from 'react';
import styles from './BaseSelect.module.scss'
import { SelectConvert } from './dateForSelects/DateForSelects';


export default function BaseSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectionValue, setSelectionValue] = useState('В офисе (наличные)');

 const openSelect =()=>{
  setIsOpen(!isOpen);
 }

  return (
    <div className={styles['select']}>
        <div className={styles['select_value']}>
          <button className={styles['select_btn']} onClick = {()=>openSelect()}>
            <span className={styles['select_span']}>
              {selectionValue}
              </span>
          </button>
        </div>
          <ul className= {classNames(isOpen? styles['select_list_open'] : styles['select_list_closed'])}>
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


