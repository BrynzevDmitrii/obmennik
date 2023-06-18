import clsx from "clsx";

import styles from "./TrigerCurrency.module.scss";
import { useAppDispatch, useAppSelector } from "../../hook";
import { setIsActiveBtn } from "./redux/triggerCurrencySlice";




export const TrigerCurrency = () => {

  const dispatch = useAppDispatch()
  const isActiveBtn = useAppSelector(state=>state.triggerCurrencySlice.isActiveBtn)
  
  return (
    <div className={styles.trigger_wrapper}>
      <button className={clsx(styles.button, isActiveBtn === 'rub/cur' ? styles.active_btn : '')} onClick={()=>dispatch(setIsActiveBtn('rub/cur'))}>
        <p className={styles.button__title}>Рубли/Валюта</p>
      </button >
      <button className={clsx(styles.button, isActiveBtn === 'cur/cur'? styles.active_btn : '')} onClick={()=>dispatch(setIsActiveBtn('cur/cur'))}>
        <p className={styles.button__title}>Валюта/Валюта</p>
      </button>
    </div>
  );
};
