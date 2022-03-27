import { RefObject, useContext, useRef } from "react";
import { Mycontext } from "../../../context/Context";
import { IApiProps } from "../../type/IApiProps";
import Difference from "../Difference/Difference";
import style from "./Story.module.css";

export default function Story({
  historyStoreg,
  id,
}: {
  historyStoreg: IApiProps[];
  id: string;
}): JSX.Element {
  const {conteinerRef, btnOnClick} = useContext(Mycontext);
  const positionScroll = conteinerRef.current?.scrollTop;

  function closedStore() {
    btnOnClick();
    conteinerRef.current?.scroll({
      top: positionScroll,
      behavior: "smooth",
    });
  }

  return (
    <>
      {historyStoreg.map((i, idx) => {
        return Object.entries(i.Valute).map((j) => {
          if (j[1].ID === id) {
            return (
              <ul className={style["item"]}>
                <div key={i.Date}>{i.Date}</div>
                <div key={idx * 2}>{j[1].Value} &#8381;</div>
                <Difference data={j[1]} />
              </ul>
            );
          }
        });
      })}
      <button
         className={style["closed-button"]}
         onClick={closedStore}
         type="button">
        &#9650;
      </button>
    </>
  );
}
