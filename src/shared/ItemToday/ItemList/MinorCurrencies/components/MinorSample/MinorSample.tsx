import { FunctionComponent, useEffect, useState } from "react";
import { useAppSelector } from "../../../../../../hook";
import styles from "../Minor.module.scss";
import { IvName } from "../../../../../ListToday/type/currentType";
import { Restrictions } from "./Restrictions";

interface MinorSampleProps {
  currency: IvName;
  length: {
    start: number | undefined
    end: number | undefined
  }
  current?:{
    currentName: IvName
    restrictionsArray: any
  } 


}

export const MinorSample: FunctionComponent<MinorSampleProps> = (
  props: MinorSampleProps
) => {
  const date = useAppSelector((state) => state.currentList.currentList);
  const [dataValute, setDataValute] = useState([]);
  useEffect(() => {
    Object.values(date).map((j) => setDataValute(Object.values(j.Valute)));
  }, []);

  return (
    <>
      {date === undefined || null
        ? "Loading ..."
        : dataValute.slice(props.length.start, props.length.end).map((i: IvName, index) => {
            return (
              <li className={styles.item_wrapper} key={index}>
                <div className={styles.currency_wrapper}>
                  <span className={styles.currency_wrapper_title}>
                    {props.currency?.CharCode}/{i.CharCode} -
                    {" "}
                    {props.currency?.Name}/{i.Name}
                    {props.currency?.Nominal > 1 ? (
                      <span className={styles.currency_wrapper_title}>
                        {" "}
                        (за {props.currency?.Nominal} ед)
                      </span>
                    ) : (
                      ""
                    )}
                  </span>
                </div>
                <div className={styles.buy}>
                  <span className={styles.numbers}>
                    {(props.currency?.Value / i.Value).toFixed(2)}
                  </span>
                  <span className={styles.title}>Покупаем</span>
                </div>
                <div className={styles.sell}>
                  <span className={styles.numbers}>
                    {(props.currency?.Value / i.Value + 0.3).toFixed(2)}
                  </span>
                  <span className={styles.title}>Продаем</span>
                </div>
              </li>
            );
          })}
          {
            props.current && props.current.restrictionsArray.map((i)=>{
              return(
                <li className={styles.item_wrapper} >
            <div className={styles.currency_wrapper}>
              <span className={styles.currency_wrapper_title}>
              {props.currency?.CharCode}/{props.current?.currentName.CharCode} -
                {" "}
                {props.currency?.Name}/{props.current?.currentName.Name}
                {props.currency?.Nominal > 1 ? (
                  <span className={styles.currency_wrapper_title}>
                    {" "}
                    (за {props.currency?.Nominal} ед)
                  </span>
                ) : (
                  ""
                )}
              </span>
               <Restrictions restrictionsArray={i} />
            </div>
            <div className={styles.buy}>
              <span className={styles.numbers}>
                {(props.currency?.Value / props.current.currentName?.Value + Object.values(i)[0].buy).toFixed(2)}
              </span>
              <span className={styles.title}>Покупаем</span>
            </div>
            <div className={styles.sell}>
              <span className={styles.numbers}>
                {(props.currency?.Value / props.current.currentName?.Value - Object.values(i)[0].sale).toFixed(2)}
              </span>
              <span className={styles.title}>Продаем</span>
            </div>
          </li>
              )
            }) 
          }
    </>
  );
};
