import { FunctionComponent } from "react";
import { Root } from "../../../ListToday/type/currentType";
import { PrevValute } from "../PrevValute/PrevValute";

interface OfficeProps {
  activeBtn: string;
  data: Root;
}

export const Office: FunctionComponent<OfficeProps> = (props: OfficeProps) => {
  return (
    <>
      {props.activeBtn === "rub/cur" ? (
        <>
          <PrevValute
            valuteCurrents={[props.data.Valute.USD]}
            current={"до 30 000.00 "}
          />
          <PrevValute
            valuteCurrents={[props.data.Valute.USD]}
            current={"от 30 000.00"}
          />
          <PrevValute
            valuteCurrents={[props.data.Valute.EUR]}
            current={"до 30 000.00 "}
          />
          <PrevValute
            valuteCurrents={[props.data.Valute.EUR]}
            current={"от 30 000.00"}
          />
        </>
      ) : (
        ""
      )}
    </>
  );
};
