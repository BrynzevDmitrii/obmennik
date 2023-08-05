import { useAppSelector } from "../../../../../hook";
import { MobileBank } from "../../MobileBank/MobileBank";
import { Office } from "../../Office/Office";
import { OfficeNonCash } from "../../OfficeNonCash/OfficeNonCash";

import styles from "./CurCur.module.scss"

export const CurCur = () => {
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
                //   <ol className={styles.item_wrapper} key={index}>
                //   <div className={styles.currency_wrapper}>
                //     <span className={styles.currency_wrapper_title}>
                //       {j[1].Name} - {j[1]?.Name}
                //       {j[1]?.Nominal > 1 ? (
                //         <span className={styles.currency_wrapper_title}>
                //           {" "}
                //           (за {j[1]?.Nominal} ед)
                //         </span>
                //       ) : (
                //         ""
                //       )}
                //     </span>
                //   </div>
                //   <div className={styles.buy}>
                //     <span className={styles.numbers}>
                //       {j[1]?.Value.toFixed(2)}
                //     </span>
                //     <span className={styles.title}>Покупаем</span>
                //   </div>
                //   <div className={styles.sell}>
                //     <span className={styles.numbers}>
                //       {(j[1]?.Value + 0.9).toFixed(2)}
                //     </span>
                //     <span className={styles.title}>Продаем</span>
                //   </div>
                // </ol>
                console.log(j[1].Valute)
                ) : (
                  ""
                )}
                {selectCurrent === "В офисе (безналично)" ? (
                  <OfficeNonCash data={j[1]} />
                ) : (
                  ""
                )}
                {selectCurrent === "В интернет банке и мобильном банке" ? (
                  <MobileBank data={j[1]} />
                ) : (
                  ""
                )}
              </li>
            </ul>
          ))}
    </>
  );
};
