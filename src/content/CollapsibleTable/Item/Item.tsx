import React from "react";
import { useEffect, useRef, useState } from "react";
import { IApiProps, IvName } from "../../type/IApiProps";
import Difference from "../Difference/Difference";
import Story from "../Story/Story";
import style from "./Item.module.css";

 function Item({
  data,
  historyStoreg,
  btnOnClick,
  isOpen,
}: {
  data: IvName[];
  historyStoreg: IApiProps[];
  btnOnClick: () => void;
  isOpen: boolean;
}): JSX.Element {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (isOpen) {
      const contentEl = contentRef.current as HTMLDivElement;
      setHeight(contentEl.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);
  return (
    <>
      <li className={style["border"]}>
        <div className={style["row"]}>
          <button onClick={btnOnClick} className={style["tooltip"]}>
            <h3 className={style["buttonAccordion"]}>&#9660; {data[0]}</h3>
            <p className={style["tooltiptext"]}>{data[1].Name}</p>
          </button>
          <h3>{data[1].Value} &#8381;</h3>
          <Difference data={data[1]} />
        </div>
        <div style={{ height }} className={style["item-container"]}>
          <div ref={contentRef} className={style["description"]}>
            <Story 
            id={data[1].ID}
            historyStoreg={historyStoreg}
             />
          </div>
        </div>
      </li>
    </>
  );
}
export default React.memo(Item)