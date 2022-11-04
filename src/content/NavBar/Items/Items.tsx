import classNames from "classnames";
import Link from "next/link";
import { SetStateAction } from "react";
import style from "./Items.module.scss";

const Items = ({isOpen}:{isOpen?:SetStateAction<boolean>}): JSX.Element => {
  return (
    <nav>
      <ul className={classNames(isOpen ? style.none: style.box)}>
        <li className={style["item"]}>
          <Link href={"/"}>Обменять валюту</Link>
        </li>
        <li className={style["item"]}>
          <Link href={"/cours"}>Архив курса валют</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Items;
