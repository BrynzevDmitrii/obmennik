import { MouseEvent, useRef, useState } from "react"

import styles from "./ValuteSelect.module.scss"

const y = ['₽', '$', '€'];

export const ValuteSelect = (setSelected:()=>void):JSX.Element => {
    const [positionActive, setPositionActive] = useState(2)

    const refR = useRef(null);

    const activeRef = useRef(null)
    const left = 58;
    const r = (e: MouseEvent<HTMLLIElement, MouseEvent>):void=>{
    const idActive = e.target.id;
    if(idActive > '0'){
        setPositionActive(left*idActive)
        setSelected(e.target.innerText)
    }
    else {
        setPositionActive(2)
    }
    }
    return(
        <ul  ref={activeRef} className={styles['valute_list']}>

            <li style = {{left:positionActive}} className={styles['active']}></li>
            {y.map((item, idx)=>{
                return(
                    <li 
                    key={idx} 
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