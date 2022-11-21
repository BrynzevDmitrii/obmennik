import { MouseEvent, useState } from "react";

import styles from "./ValuteSelect.module.scss";

const currentArray = [{valute:"₽", value:"₽"},{ valute:"$",value:"$"}, {valute:"€", value:"€"}];

export const ValuteSelect = ({
  setSelected,
}: {
  setSelected: (current: string) => void;
}): JSX.Element => {
  const [positionActive, setPositionActive] = useState(2);

  const left = 58;

  const currentActiveted = (e: MouseEvent<HTMLLIElement, globalThis.MouseEvent>, itemValue:string): void => {
    const idActive = e.target.id;

    if (idActive) {
      setPositionActive(left * idActive);
      setSelected(itemValue);
    } else {
      setPositionActive(2);
      setSelected(itemValue);
    }
  };

  return (
    <ul className={styles["valute_list"]}>
      <li style={{ left: positionActive }} className={styles["active"]}></li>
      {currentArray.map((item, idx) => {
        return (
          <li
            key={idx + item.valute}
            id={String(idx)}
            className={styles["valute_item"]}
            onClick={(e) => currentActiveted(e, item.value)}
          >
            {item.valute}
          </li>
        );
      })}
    </ul>
  );
};
