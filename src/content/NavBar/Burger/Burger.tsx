import classNames from "classnames";
import { SetStateAction, useEffect, useState } from "react";
import Items from "../Items/Items";
import styles from "./Burger.module.scss";

const Burger =():JSX.Element=>{
    const [isOpen, setIsOpen] = useState<SetStateAction<boolean>>(false)
    
    useEffect(()=>{
        isOpen? 
        document.body.classList.add(styles['backgroundBody']) :
        document.body.classList.remove(styles['backgroundBody'])
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
    <Items isOpen = {isOpen}/>
        </div>
    );
}

export default Burger;