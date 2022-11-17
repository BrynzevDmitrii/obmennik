import { MouseEvent, useState } from "react"

import styles from "./ValuteSelect.module.scss"

const y = ['₽', '$', '€'];

export const ValuteSelect = ({setSelected}:{setSelected:(current:string)=>void}):JSX.Element => {
    const [positionActive, setPositionActive] = useState(2)

    const left = 58

    const r = (e: MouseEvent<HTMLLIElement, globalThis.MouseEvent>):void=>{
        
    const idActive = e.target.id;

    if(idActive > '0'){
        setPositionActive(left*idActive)
        setSelected(e.target.innerHTML)
    }
    else {
        setPositionActive(2)
        setSelected(e.target.innerHTML)
    }
    }
    return(
        <ul className={styles['valute_list']}>

            <li style = {{left:positionActive}} className={styles['active']}></li>
            {y.map((item, idx)=>{
                return(
                    <li 
                    key={idx+item} 
                    id={String(idx)}
                    className={styles['valute_item']}
                    onClick={(e)=>r(e)}
                    >
                    {item}
                    </li>
                )
            })
            }
            
        </ul>
        
    )
}