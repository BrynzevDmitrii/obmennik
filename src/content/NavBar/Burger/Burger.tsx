import classNames from "classnames";
import Image from "next/image";
import { MouseEventHandler, SetStateAction, useState } from "react";
import styles from "./Burger.module.scss";

const Burger =():JSX.Element=>{
    const [isOpen, setIsOpen] = useState<SetStateAction<boolean>>(false)
    const openBurger=():any=>{
        setIsOpen(!isOpen);
    }

   
    return(
        <div className={classNames(isOpen?styles.r: '')}>
        <img
        className={styles['burger_img']}
        onClick={openBurger} 
        src={'/burger50_50.png'}
     />
        </div>
    );
}

export default Burger;