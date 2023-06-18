import { FunctionComponent, useEffect, useState } from "react";
import { TrigerCurrency } from "../../shared/TrigerCurrency/TrigerCurrency";

import styles from "./ListValueToday.module.scss"
import BaseSelect from "../../shared/Selects/BaseSelect/BaseSelect";
import { ListToday } from "../../shared/ListToday/ListToday";
import { useAppDispatch } from "../../hook";

interface ListValueTodayProps {
    
}
 
export const ListCurrencyToday: FunctionComponent<ListValueTodayProps> = () => {


    return ( <>
    <h2 className={styles.title}>Курсы валют на сегодня</h2>
    <TrigerCurrency />

    <div className={styles.select}>
        <p className={styles.select__title}>Способ обмена</p>
        <BaseSelect />
    </div>
    <ListToday  />
    
    </> );
}
 
