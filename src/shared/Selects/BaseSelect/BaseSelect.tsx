import classNames from 'classnames';
import { useState } from 'react';
import styles from './BaseSelect.module.scss'
import { useAppDispatch } from '../../../hook';
import { updateSelectedWay } from '../../../widgets/CurrencyConverter/redux/CurrencyConverterSlise';
import React from 'react';

interface BaseSelectProps {
  selectList: { name: string; value: string; }[]
  width?: number
}

 function BaseSelect(props: BaseSelectProps) {
  const dispatch = useAppDispatch()
  const [isOpen, setIsOpen] = useState(false);
  const [selectionValue, setSelectionValue] = useState('В офисе (наличные)');
  console.log(props.selectList);
  
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
          <ul className = {classNames(isOpen? styles['select_list_open'] : styles['select_list_closed'])} style={{ width: props.width }} >
            { props.selectList? props.selectList.map((item, indx)=>{

              return(
                <li 
                className={styles['select_item']} 
                onClick={()=>{setSelectionValue(item.value)
                              dispatch(updateSelectedWay(item.value))
                              setIsOpen(false) }} 
                key={ item.value + indx }
                >
                  {item.value}
                </li>
              )
            }): 'loading'}
          </ul>
    </div>
  );
}

export default React.memo(BaseSelect)


