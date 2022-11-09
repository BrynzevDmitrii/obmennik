import * as React from 'react';
import {  useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import styles from './BaseSelect.module.scss'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function BaseSelect() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

 const isOpen =()=>{
  console.log('open select');
 }

  return (
    <div className={styles['select']}>
        <div className={styles['select_value']}>
          <button className={styles['select_btn']} onClick = {()=>isOpen()}>
            <span className={styles['select_span']}>
              В офисе (наличные)
              </span></button>
        </div>
          <ul className={styles['select_list']}>
            <li aria-selected = 'true' className={styles['select_item']}>В офисе (наличные)</li>
            <li aria-selected = 'false'className={styles['select_item']}>В офисе (безналично)</li>
            <li aria-selected = 'false' className={styles['select_item']}>В интернет-банке и мобильном банке</li>
            <li aria-selected = 'false' className={styles['select_item']}>В спецкассе по обмену валюты</li>
            <li aria-selected = 'false' className={styles['select_item']}>Покупка по карте</li>
          </ul>
    </div>
  );
}