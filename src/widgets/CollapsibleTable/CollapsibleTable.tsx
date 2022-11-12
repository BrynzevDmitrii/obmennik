import Image from "next/image";
import React from "react";
import { useRef, useState } from "react";
import { Mycontext } from "../../context/Context";
import { IApiProps } from "../../page-fs/arhiveValute/type/IApiProps";
import style from "./CollapsibleTable.module.css";
import Item from "../Item/Item";



 function CollapsibleTable({
  state,
  historyStoreg,
}: {
  state: IApiProps[];
  historyStoreg: IApiProps[];
}): JSX.Element {
  const [currentIdx, setCurrentIdx] = useState(-1);
  const conteinerRef = useRef<HTMLDivElement>(null)


  const btnOnClick = (idx: number) => {
    setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1));
  };
  
  const btnUpPage = ()=> {
     window.scrollTo({
      top:0,
      behavior:"smooth",
     })

     const scrollY = conteinerRef.current;

    scrollY?.scrollTo({
      top:0,
      behavior:"smooth",
    });
  }

  
  return (
    <Mycontext.Provider value={{conteinerRef ,btnOnClick}}>
      {state.map((i, indx) => {
        return (
          <div
            ref={conteinerRef} 
            key={indx + 9}
            className={style["container"]}>
            <ul 
            className={style["header__table"]} 
            key={indx}>
              <li key={57}>
                <h2>Код Валюты</h2>
              </li>
              <li key={43}>
                <h2>Курс</h2>
              </li>
              <li key={77}>
                <h2>%</h2>
              </li>
            </ul>
            <ul 
            className={style["main__table"]}
             key={indx + 1}>
              <>
                {Object.entries(i.Valute).map((i, index) => (
                  <Item
                    key={index}
                    data={i}
                    historyStoreg={historyStoreg}
                    btnOnClick={() => btnOnClick(index)}
                    isOpen={index === currentIdx}
                  />
                ))}
              </>
            </ul>
            <button 
                onClick={btnUpPage}
                type="button" 
                className={style["up_button"]}>
              <Image src={"/button-up.svg"} width={70} height={70} />
            </button>
          </div>
        );
      })}
    </Mycontext.Provider>
  );
}
export default React.memo(CollapsibleTable)
