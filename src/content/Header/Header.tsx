import React from "react"
import NavBar from "../NavBar/NavBar"
import style from "./Header.module.css"


const Header = (): JSX.Element =>{
    return(
        <div className={style['box']}>
            <NavBar />
        </div>
    )
}
export default Header