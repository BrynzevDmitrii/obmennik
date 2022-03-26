import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import CollapsibleTable from "../CollapsibleTable/CollapsibleTable";
import { IApiProps } from "../type/IApiProps";

const valutApi = "https://www.cbr-xml-daily.ru/daily_json.js";

const HomePage = (): JSX.Element => {
  const [bigData, setbigData] = useState<IApiProps[]>([]);
  useEffect(() => {
    let date: IApiProps[] = [];
    axios
      .get(valutApi)
      .then((res) => {
        date.push(res.data);
        setbigData(date);
      })
      .catch((err) => {
        if (err.res) {
          console.log(err);
        } else if (err.request) {
          console.log("ошибка сети");
        }
      });
  }, []);

  let today = new Date();

  let time = today.getTime();
  today = new Date(time - (time % 86400000));

  let arrDays: string[] = [];

  for (let i = 0; i < 14; i++, today.setDate(today.getDate() - 1)) {
    arrDays.push(
      today.getFullYear() +
        "/" +
        "0" +
        (today.getMonth() + 1) +
        "/" +
        (today.getDate() - 1)
    );
  }

  const [storeg, setStoreg] = useState<IApiProps[]>([]);
  useEffect(() => {
    let store: IApiProps[] = [];
    arrDays.forEach((day) => {
      axios(`https://www.cbr-xml-daily.ru/archive/${day}/daily_json.js`)
        .then((response) => store.push(response.data))
        .catch((err) => {
          if (err.res) {
            console.log(err);
          } else if (err.request) {
            console.log("ошибка сети");
          }
        });
    });
    setStoreg(store);
  }, []);

  return (
    <>
    {(!bigData.length ) ? <Image src={'/spiner.gif'}
                                width = {200}
                                height = {200}
    /> :
      <CollapsibleTable historyStoreg={storeg} state={bigData} />
    }
    </>
  );
};

export default HomePage;
