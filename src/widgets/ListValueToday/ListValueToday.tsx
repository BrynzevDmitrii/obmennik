import { FunctionComponent, useState } from "react";
import { TrigerCurrency } from "../../shared/TrigerCurrency/TrigerCurrency";

import styles from "./ListValueToday.module.scss"

interface ListValueTodayProps {
    
}
 
export const ListCurrencyToday: FunctionComponent<ListValueTodayProps> = () => {
    const[ isActiveBtn, setIsActiveBtn ] = useState(1)

    const isRatio = (btnNumber: 1|2) => {
        setIsActiveBtn(btnNumber)
        console.log(isActiveBtn)
    }

    return ( <>
    <h2 className={styles.title}>Курсы валют на сегодня</h2>
    <TrigerCurrency 
    HeandelChange= { isRatio } 
    isActiveBtn = { isActiveBtn } />
    </> );
}
 
