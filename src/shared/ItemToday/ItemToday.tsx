import { FunctionComponent } from "react";

import styles from "./ItemToday.module.scss";
import { useAppDispatch, useAppSelector } from "../../hook";

interface ItemTodayProps {
    date: []
}

export const ItemToday = (props: ItemTodayProps) => {

    const isActiveBtn = useAppSelector(state=>state.triggerCurrencySlice.isActiveBtn)
    console.log(props.date)
  return (
    <>
          {isActiveBtn === 'rub/cur'&& props.date!==undefined ? 
      <li className={styles.item_wrapper}>
              <div className={styles.currency_wrapper}>
                  <span className={styles.currency_code}>{props.date[0]}</span> -
                  <span className={styles.currency_name}>{props.date[1].Name}</span>
              </div>
              <div className={styles.buy}>
                  <span className={styles.buy__number}>{props.date[1].Value}</span>
                  <span className={styles.buy__text}>Покупаем</span>
              </div>
              <div className={styles.sell}>
                  <span className={styles.sell__number}>{props.date[1].Value + 0.9}</span>
                  <span className={styles.sell__text}>Продаем</span>
              </div>
          </li>: 'j9ihui'
          }
          </>
  );
};
