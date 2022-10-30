import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";
import classNames from "classnames";
import { SetStateAction, useEffect, useState } from "react";
import styles from "./Burger.module.scss";

const Burger =():JSX.Element=>{
    const [isOpen, setIsOpen] = useState<SetStateAction<boolean>>(false)
    
    useEffect(()=>{
        isOpen? 
        document.body.classList.add(styles['bagraundBody']) :
        document.body.classList.remove(styles['bagraundBody'])
    },[isOpen])

    const openBurger=():any=>{
        setIsOpen(!isOpen);
    }

   
    return(
        <div className={classNames(isOpen?styles.r: '')}>
        <img
        className={styles['burger_img']}
        onClick={openBurger} 
        src={isOpen?'/icons8-close-50.svg' : '/burger50_50.png'}
     />
        </div>
    );
}

export default Burger;