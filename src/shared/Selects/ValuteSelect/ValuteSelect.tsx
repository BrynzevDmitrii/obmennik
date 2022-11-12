import { useState } from "react"

import styles from "./ValuteSelect.module.scss"

export const ValuteSelect = ():JSX.Element => {
    const [selected, setSelected] = useState()
    return(
        <ul className={styles['valute_list']}>
            <li className={styles['valute_item__active']}></li>
            <li className={styles['valute_item']}>₽</li>
            <li className={styles['valute_item']}>$</li>
            <li className={styles['valute_item']}>€</li> 
        </ul>
        
    )
}