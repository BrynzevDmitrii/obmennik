import { FunctionComponent } from "react";
import { Root } from "../../../../../ListToday/type/currentType";
import styles from "../Minor.module.scss";

interface MinorOfficeProps {
   data: Root;
}

export const MinorOffice: FunctionComponent<MinorOfficeProps> = (
  props: MinorOfficeProps
) => {
  const usd = props.data.Valute.USD;
  const eur = props.data.Valute.EUR;
  return (
    
    <li className={styles.item_wrapper}>
      <div className={styles.currency_wrapper}>
        <span className={styles.currency_wrapper_title}>
          {usd?.CharCode}/{eur.CharCode} - {usd?.Name}/{eur.Name}
          {usd.Nominal > 1 ? (
            <span className={styles.currency_wrapper_title}>
              {" "}
              (за {usd?.Nominal} ед)
            </span>
          ) : (
            ""
          )}
        </span>
      </div>
      <div className={styles.buy}>
        <span className={styles.numbers}>
          {(usd?.Value / eur.Value).toFixed(2)}
        </span>
        <span className={styles.title}>Покупаем</span>
      </div>
      <div className={styles.sell}>
        <span className={styles.numbers}>
          {(usd?.Value / eur.Value + 0.3).toFixed(2)}
        </span>
        <span className={styles.title}>Продаем</span>
      </div>
    </li>
  );
};
