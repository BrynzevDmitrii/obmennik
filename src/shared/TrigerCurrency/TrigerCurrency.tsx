import { FunctionComponent } from "react";
import clsx from "clsx";

import styles from "./TrigerCurrency.module.scss";


interface TrigerCurrencyProps {
    HeandelChange : (btnNumber: 1 | 2) => void
    isActiveBtn: number
}

export const TrigerCurrency: FunctionComponent<TrigerCurrencyProps> = (props) => {
  return (
    <div className={styles.trigger_wrapper}>
      <button className={clsx(styles.button, props.isActiveBtn === 1? styles.active_btn : '')} onClick={()=>props.HeandelChange(1)}>
        <p className={styles.button__title}>Рубли/Валюта</p>
      </button >
      <button className={clsx(styles.button, props.isActiveBtn === 2? styles.active_btn : '')} onClick={()=>props.HeandelChange(2)}>
        <p className={styles.button__title}>Валюта/Валюта</p>
      </button>
      {/* <div className={styles.button__border_decoration}></div> */}
    </div>
  );
};
