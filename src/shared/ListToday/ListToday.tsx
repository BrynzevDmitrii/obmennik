import { useAppSelector } from "../../hook";
import { ItemToday } from "../ItemToday/ItemToday";

import styles from "./ListToday.module.scss";


export const ListToday = () => {

  const appSelectorDate  = useAppSelector(state => state.currentList.date)
  const selectCurrency = useAppSelector(state => state.currentList.currentList)
  const isLoad = useAppSelector(state => state.currentList.loading)
  const conversion = useAppSelector(state=>state.CurrencyConverter.conversion)


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
