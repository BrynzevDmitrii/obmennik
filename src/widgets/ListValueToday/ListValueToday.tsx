import { FunctionComponent, memo, useEffect, useState } from "react";
import { TrigerCurrency } from "../../shared/TrigerCurrency/TrigerCurrency";

import styles from "./ListValueToday.module.scss"
import  BaseSelect  from "../../shared/Selects/BaseSelect/BaseSelect";
import { ListToday } from "../../shared/ListToday/ListToday";
import { useAppDispatch } from "../../hook";
import { selectExchangeMethod } from "../../shared/Selects/BaseSelect/dateForSelects/DateForSelects";

interface ListValueTodayProps {
    
}
 
export const ListCurrencyToday: FunctionComponent<ListValueTodayProps> = memo(() => {


    return ( <>
    <h2 className={styles.title}>Курсы валют на сегодня</h2>
    <TrigerCurrency />

    <div className={styles.select}>
        <p className={styles.select__title}>Способ обмена</p>
        <BaseSelect selectList={ selectExchangeMethod } width = {590} />
    </div>
    <ListToday  />
    
    </> );
})
 
