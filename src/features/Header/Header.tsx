import React from "react"
import NavBar from "../NavBar/NavBar"
import style from "./Header.module.scss"


const Header = ({widhtWindows}:{widhtWindows:boolean}): JSX.Element =>{
    return(
        <div className={style['box']}>
           {widhtWindows && <img className={style.logo} src={"/logo-convertr-money.png"} />}
            <NavBar widht = {widhtWindows} />
        </div>
    )
}
export default Header