import { log } from "console";
import { useAppDispatch, useAppSelector } from "../../hook";
import Item from "../../widgets/Item/Item";
import { ItemToday } from "../ItemToday/ItemToday";

import styles from "./ListToday.module.scss";
import { useState } from "react";
import { Root } from "./type/currentType";
import CurrencyConverterSlise, { updateConversion } from "../../widgets/CurrencyConverter/redux/CurrencyConverterSlise";

interface ListTodayProps {
}

export const ListToday = (props: ListTodayProps) => {

  const appSelectorDate  = useAppSelector(state => state.currentList.date)
  const selectedWay = useAppSelector(state => state.CurrencyConverter.selectedWay)
  const selectCurrency = useAppSelector(state => state.currentList.currentList)
  const isLoad = useAppSelector(state => state.currentList.loading)
  const conversion = useAppSelector(state=>state.CurrencyConverter.conversion)
  const dispatch = useAppDispatch()

  // selectedWay == 'В офисе (наличные)'? setConversion('Наличная конвертация') :  setConversion('Безналичная конвертация')

  return (
    <>
      <div className={styles.title_blok}>
        <div className="wrapper" >
            <p className={styles.title_p}>Курсы действуют с {appSelectorDate} 09:00:00</p>
            <p className={styles.title_p}>{ conversion }</p>
        </div>
        
      </div>  

      { selectCurrency === undefined || null ? 'Loading ... ' :
        <div>
            <ItemToday  />
        </div>
      }
      

    </>
  );
};
