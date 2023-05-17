import { FunctionComponent } from "react";

import styles from "./ItemToday.module.scss";

interface ItemTodayProps {
    
}
 
export const ItemToday: FunctionComponent<ItemTodayProps> = (props) => {
    return (<li className={styles.item_wrapper}>
        <div className={styles.currency_wrapper}>
            <span className={styles.currency_code}>props.curencyCode</span> - 
            <span className={styles.currency_name}>props.curencyName</span>
        </div>
       <div className={styles.buy}>
            <span className={styles.buy__number} >props.buy</span>
            <span className={styles.buy__text} >Покупаем</span>
       </div>
       <div className={styles.sell}>
            <span className={styles.sell__number} >props.sell</span>
            <span className={styles.sell__text} >Продаем</span>
       </div>
        </li>  );
}
 
