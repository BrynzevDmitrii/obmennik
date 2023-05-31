import { FunctionComponent, useEffect, useState } from "react";
import { TrigerCurrency } from "../../shared/TrigerCurrency/TrigerCurrency";

import styles from "./ListValueToday.module.scss"
import BaseSelect from "../../shared/Selects/BaseSelect/BaseSelect";
import { ListToday } from "../../shared/ListToday/ListToday";
import { useAppDispatch } from "../../hook";

interface ListValueTodayProps {
    
}
 
export const ListCurrencyToday: FunctionComponent<ListValueTodayProps> = () => {
    const dispatch = useAppDispatch()
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
    <div className={styles.select}>
        <p className={styles.select__title}>Способ обмена</p>
        <BaseSelect />
    </div>
    <ListToday  />
    
    </> );
}
 
