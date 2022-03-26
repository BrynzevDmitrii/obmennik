import Link from "next/link"
import React from "react"
import style from "./NavBar.module.css"


const NavBar = () =>{
    return(
            <ul className={style['box']}>
                <li className={style['item']}>
                    <Link href={'/'}>Главная
                    </Link></li>
                <li className={style['item']}>
                    <Link href={'/cours'}>
                        <a>Курс валют</a>
                    </Link>
                </li>
                <li className={style['item']}>О нас</li>
                <li className={style['item']}>Контакты</li>
                <li className={style['item']}>FAQ</li>
            </ul>
            
    )
}
export default NavBar