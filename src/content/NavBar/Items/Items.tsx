import Link from "next/link"
import style from "./Items.module.scss"

const Items = ():JSX.Element=> {
    return (<ul className={style['box']}>
        <li className={style['item']}>
            <Link href={'/'}>Главная
            </Link></li>
        <li className={style['item']}>
            <Link href={'/cours'}>
                Курс валют
            </Link>
        </li>
        <li className={style['item']}>О нас</li>
        <li className={style['item']}>Контакты</li>
        <li className={style['item']}>FAQ</li>
    </ul>)
}

export default Items