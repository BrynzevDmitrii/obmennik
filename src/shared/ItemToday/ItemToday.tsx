import styles from "./ItemToday.module.scss";
import { useAppDispatch, useAppSelector } from "../../hook";
import { Office } from "./components/Office/Office";
import { IvName, Root } from "../ListToday/type/currentType";


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
                        <span className={styles.currency_wrapper_title}>{item[1]?.CharCode} - {item[1]?.Name}
                        {item[1]?.Nominal > 1?<span className={styles.currency_wrapper_title}> (за {item[1]?.Nominal} ед)</span>: ''}
                        </span>
                      </div>
                      <div className={styles.buy}>
                        <span className={styles.numbers}>{item[1]?.Value.toFixed(2)}</span>
                        <span className={styles.title}>Покупаем</span>
                      </div>
                      <div className={styles.sell}>
                        <span className={styles.numbers}>{(item[1]?.Value + 0.9).toFixed(2)}</span>
                        <span className={styles.title}>Продаем</span>
                      </div>
                      </li>

               ))} 

              </ul>
              ))}
              
  </>
  );
};
