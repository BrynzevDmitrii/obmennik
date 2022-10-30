import React from "react"
import NavBar from "../NavBar/NavBar"
import style from "./Header.module.css"


const Header = ({widhtWindows}:{widhtWindows:boolean}): JSX.Element =>{
    return(
        <div className={style['box']}>
            <NavBar widht = {widhtWindows} />
        </div>
    )
}
export default Header