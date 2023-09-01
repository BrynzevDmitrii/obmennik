import { FunctionComponent } from "react";
import { useAppSelector } from "../../../hook";
import { Office } from "../components/Office/Office";
import { OfficeNonCash } from "../components/OfficeNonCash/OfficeNonCash";
import { MobileBank } from "../components/MobileBank/MobileBank";

import styles from "../ItemToday.module.scss";
import { MinorCurrencies } from "./MinorCurrencies/MinorCurrencies";

interface ItemListProps {
  activeBtn: string;
}

export const ItemList: FunctionComponent<ItemListProps> = (
  props: ItemListProps
) => {
  const date = useAppSelector((state) => state.currentList.currentList);
  const selectCurrent = useAppSelector(
    (state) => state.CurrencyConverter.selectedWay
  );
  return (
    <>
      {date === undefined || null
        ? "Loading ..."
        : Object.entries(date).map((j, index) => (
            <ul key={index}>
              <li>
                {selectCurrent === "В офисе (наличные)" ? (
                  <Office data={j[1]} activeBtn={props.activeBtn} />
                ) : (
                  ""
                )}
                {selectCurrent === "В офисе (безналично)" ? (
                  <OfficeNonCash data={j[1]} activeBtn={props.activeBtn} />
                ) : (
                  ""
                )}
                {selectCurrent === "В интернет банке и мобильном банке" ? (
                  <MobileBank data={j[1]} activeBtn={props.activeBtn} />
                ) : (
                  ""
                )}
              </li>
              {props.activeBtn === "rub/cur" ? (
                Object.entries(j[1].Valute)
                  .slice(34)
                  .map((item, index) => (
                    <li className={styles.item_wrapper} key={index}>
                      <div className={styles.currency_wrapper}>
                        <span className={styles.currency_wrapper_title}>
                          {item[1]?.CharCode} - {item[1]?.Name}
                          {item[1]?.Nominal > 1 ? (
                            <span className={styles.currency_wrapper_title}>
                              {" "}
                              (за {item[1]?.Nominal} ед)
                            </span>
                          ) : (
                            ""
                          )}
                        </span>
                      </div>
                      <div className={styles.buy}>
                        <span className={styles.numbers}>
                          {item[1]?.Value.toFixed(2)}
                        </span>
                        <span className={styles.title}>Покупаем</span>
                      </div>
                      <div className={styles.sell}>
                        <span className={styles.numbers}>
                          {(item[1]?.Value + 0.9).toFixed(2)}
                        </span>
                        <span className={styles.title}>Продаем</span>
                      </div>
                    </li>
                  ))
              ) : (
                <MinorCurrencies />
              )}
            </ul>
          ))}
    </>
  );
};
