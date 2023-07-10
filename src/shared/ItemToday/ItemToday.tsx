import { FunctionComponent, useEffect, useState } from "react";

import styles from "./ItemToday.module.scss";
import { useAppDispatch, useAppSelector } from "../../hook";
import { Office } from "./components/Office/Office";
import { Root, Valute } from "../ListToday/type/currentType";

export const ItemToday = () => {
    const selectCurrent = useAppSelector((state)=>state.CurrencyConverter.selectedWay)
    const isActiveBtn = useAppSelector(state=>state.triggerCurrencySlice.isActiveBtn)
    const date = useAppSelector(state => state.currentList.currentList)
           
  return (
    <>
          { date === undefined || null?
     'Loading ...' :
            
              Object.entries(date).map((j)=>(
                
                <ul>
                <li>
                
                    {selectCurrent ==='В офисе (наличные)'? <Office data = {j[1]}/> : ''}
                    {/* {selectCurrent ==='В офисе (безналично)'? <OfficeNonCash/>: ''}
                    {selectCurrent ==='В интернет банке и мобильном банке'? <MobileBank/>: ''} */}

                </li>
               { Object.entries(j[1]?.Valute).map((item)=>(

                      <li className={styles.item_wrapper}>
                      <div className={styles.currency_wrapper}>
                        <span className={styles.currency_code}>{item[1]?.CharCode}</span> -
                        <span className={styles.currency_name}>{item[1]?.Name}</span>
                        {item[1]?.Nominal > 1?<span className={styles.currency_name}> (за {item[1]?.Nominal} ед)</span>: ''}
                      </div>
                      <div className={styles.buy}>
                        <span className={styles.buy__number}>{item[1]?.Value}</span>
                        <span className={styles.buy__text}>Покупаем</span>
                      </div>
                      <div className={styles.sell}>
                        <span className={styles.sell__number}>{item[1]?.Value + 0.9}</span>
                        <span className={styles.sell__text}>Продаем</span>
                      </div>
                      </li>

               ))} 
               {console.log(Object.values(j[1]))}

              </ul>
              ))}
              
  </>
  );
};
