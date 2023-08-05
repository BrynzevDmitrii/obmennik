import { isArrayBuffer } from "util/types";
import { IvName, Valute } from "../../../ListToday/type/currentType";
import styles from "./PrevValute.module.scss";
interface PrevValuteProps {
  valuteCurrents: IvName[] | Valute;
  current?: string;
}

export const PrevValute = (props: PrevValuteProps) => {
  return (
    <>
      {typeof props.valuteCurrents == "object"
        ? ""
        : props.valuteCurrents.map((i, index) => (
            <div className={styles.item} key={index}>
              <div className={styles.name__block}>
                <span className={styles.name__block_title}>
                  {i.CharCode} - {i.Name}{" "}
                  {i.Nominal > 1 ? <span> (за {i.Nominal} ед)</span> : ""}
                </span>
                {props.current ? (
                  <span className={styles.current}> {props.current}</span>
                ) : (
                  ""
                )}
              </div>

              <div className={styles.buy}>
                <span className={styles.numbers}>{i.Value.toFixed(2)}</span>
                <span className={styles.title}>Покупаем</span>
              </div>

              <div className={styles.sell}>
                <span className={styles.numbers}>
                  {(i.Value + 0.9).toFixed(2)}
                </span>
                <span className={styles.title}>Продаем</span>
              </div>
            </div>
          ))}
    </>
  );
};
