import { FunctionComponent } from "react";
import { Root } from "../../../../../ListToday/type/currentType";
import { MinorSample } from "../MinorSample/MinorSample";

interface MinorOfficeNonCashProps {
    data: Root
}
 
export const MinorOfficeNonCash: FunctionComponent<MinorOfficeNonCashProps> = (props:MinorOfficeNonCashProps) => {
  const usd = props.data.Valute.USD;
  const eur = props.data.Valute.EUR;
  return (
    
    <li >
      <MinorSample currency={usd} length={{
        start: 0,
        end: 8
      }}/>
      <MinorSample currency={eur}  length={{
        start: 0,
        end: 8
      }}/>
    </li>
  )
}
