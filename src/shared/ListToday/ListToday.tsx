import { log } from "console";
import { useAppSelector } from "../../hook";
import Item from "../../widgets/Item/Item";
import { ItemToday } from "../ItemToday/ItemToday";

import styles from "./ListToday.module.scss";
import { useState } from "react";

interface ListTodayProps {
}

export const ListToday = (props: ListTodayProps) => {
  const appSelectorDate  = useAppSelector(state => state.currentList.date)
  const selectedWay = useAppSelector(state => state.CurrencyConverter.selectedWay)
  const selectCurrency = useAppSelector(state => state.currentList.currentList)
  const isLoad = useAppSelector(state => state.currentList.loading)

  // const [currentArray, setCurrentArray] = useState([])


  return (
    <>
      <div className={styles.title_blok}>
        <div className="wrapper">
            <p className={styles.title_p}>Курсы действуют с {appSelectorDate} 09:00:00</p>
            <p className={styles.title_p}>{ selectedWay }</p>
        </div>
        
      </div>  

      { selectCurrency === undefined || null ? 'Loading ... ' :
        <div>
          {
            <ul>
            <ItemToday date={selectCurrency[0]?.Valute} />
          </ul>}
          
        
        </div>
      }
      

    </>
  );
};
