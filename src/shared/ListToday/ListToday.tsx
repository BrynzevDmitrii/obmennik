import { useAppSelector } from "../../hook";
import { ItemToday } from "../ItemToday/ItemToday";

import styles from "./ListToday.module.scss";

interface ListTodayProps {
}

export const ListToday = (props: ListTodayProps) => {
  const appSelectorDate  = useAppSelector(state => state.currentList.date)
  const selectedWay = useAppSelector(state => state.CurrencyConverter.selectedWay)
  return (
    <>
      <div className={styles.title_blok}>
        <div className="wrapper">
            <p className={styles.title_p}>Курсы действуют с {appSelectorDate} 09:00:00</p>
            <p className={styles.title_p}>{ selectedWay }</p>
        </div>
        
      </div>
      <ul>
        <ItemToday />
      </ul>
    </>
  );
};
