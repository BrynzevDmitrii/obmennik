import { FunctionComponent } from "react";
import { Root } from "../../../ListToday/type/currentType";
import { PrevValute } from "../PrevValute/PrevValute";

interface MobileBank {
  data: Root;
  activeBtn: string;
}
export const MobileBank: FunctionComponent<MobileBank> = (
  props: MobileBank
) => {
  return (
    <>
      {props.activeBtn === "rub/cur" ? (
        <>
          <PrevValute
            valuteCurrents={Object.values(props.data.Valute).filter(
              (item) => item.CharCode === "USD"
            )}
            current={"до 100.00 "}
          />
          <PrevValute
            valuteCurrents={Object.values(props.data.Valute).filter(
              (item) => item.CharCode === "USD"
            )}
            current={"до 500.00"}
          />
          <PrevValute
            valuteCurrents={Object.values(props.data.Valute).filter(
              (item) => item.CharCode === "USD"
            )}
            current={"до 1000.00"}
          />
          <PrevValute
            valuteCurrents={Object.values(props.data.Valute).filter(
              (item) => item.CharCode === "USD"
            )}
            current={"до 10 000.00"}
          />
          <PrevValute
            valuteCurrents={Object.values(props.data.Valute).filter(
              (item) => item.CharCode === "USD"
            )}
            current={"до 50 000.00"}
          />
          <PrevValute
            valuteCurrents={Object.values(props.data.Valute).filter(
              (item) => item.CharCode === "USD"
            )}
            current={"до 100 000.00"}
          />
          <PrevValute
            valuteCurrents={Object.values(props.data.Valute).filter(
              (item) => item.CharCode === "USD"
            )}
            current={"до 500 000.00"}
          />
          <PrevValute
            valuteCurrents={Object.values(props.data.Valute).filter(
              (item) => item.CharCode === "USD"
            )}
            current={"до 1000 000.00"}
          />
          <PrevValute
            valuteCurrents={Object.values(props.data.Valute).filter(
              (item) => item.CharCode === "USD"
            )}
            current={"от 100 000.00"}
          />

          <PrevValute
            valuteCurrents={Object.values(props.data.Valute).filter(
              (item) => item.CharCode === "EUR"
            )}
            current={"до 85.00 "}
          />
          <PrevValute
            valuteCurrents={Object.values(props.data.Valute).filter(
              (item) => item.CharCode === "EUR"
            )}
            current={"до 425.00"}
          />
          <PrevValute
            valuteCurrents={Object.values(props.data.Valute).filter(
              (item) => item.CharCode === "EUR"
            )}
            current={"до 850.00 "}
          />
          <PrevValute
            valuteCurrents={Object.values(props.data.Valute).filter(
              (item) => item.CharCode === "EUR"
            )}
            current={"до 8 500.00"}
          />
          <PrevValute
            valuteCurrents={Object.values(props.data.Valute).filter(
              (item) => item.CharCode === "EUR"
            )}
            current={"до 42 500.00 "}
          />
          <PrevValute
            valuteCurrents={Object.values(props.data.Valute).filter(
              (item) => item.CharCode === "EUR"
            )}
            current={"до 85 000.00"}
          />
          <PrevValute
            valuteCurrents={Object.values(props.data.Valute).filter(
              (item) => item.CharCode === "EUR"
            )}
            current={"до 425 000.00 "}
          />
          <PrevValute
            valuteCurrents={Object.values(props.data.Valute).filter(
              (item) => item.CharCode === "EUR"
            )}
            current={"до 850 000.00"}
          />
          <PrevValute
            valuteCurrents={Object.values(props.data.Valute).filter(
              (item) => item.CharCode === "EUR"
            )}
            current={"от 850 000.00"}
          />

          <PrevValute
            valuteCurrents={Object.values(props.data.Valute).filter(
              (item) => item.CharCode === "CNY"
            )}
            current={"до 650.00 "}
          />
          <PrevValute
            valuteCurrents={Object.values(props.data.Valute).filter(
              (item) => item.CharCode === "CNY"
            )}
            current={"до 70 000.00"}
          />
          <PrevValute
            valuteCurrents={Object.values(props.data.Valute).filter(
              (item) => item.CharCode === "CNY"
            )}
            current={"до 670 000.00 "}
          />
          <PrevValute
            valuteCurrents={Object.values(props.data.Valute).filter(
              (item) => item.CharCode === "CNY"
            )}
            current={"до 6 700.00"}
          />
          <PrevValute
            valuteCurrents={Object.values(props.data.Valute).filter(
              (item) => item.CharCode === "CNY"
            )}
            current={"от 42 500.00 "}
          />
        </>
      ) : (
        ""
      )}
    </>
  );
};
