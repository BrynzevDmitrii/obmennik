import { FunctionComponent } from "react";
import { Root } from "../../../../../ListToday/type/currentType";
import { MinorSample } from "../MinorSample/MinorSample";

interface MinorOfficeNonCashProps {
    data: Root
}
 
export const MinorOfficeNonCash: FunctionComponent<MinorOfficeNonCashProps> = (props:MinorOfficeNonCashProps) => {

  return (
    
    <li >
      <MinorSample currency={props.data.Valute.USD} length={{
        start: 0,
        end: 8
      }}/>
      <MinorSample currency={props.data.Valute.EUR}  length={{
        start: 0,
        end: 8
      }}/>
      <MinorSample currency={props.data.Valute.GBP}  length={{
        start: 0,
        end: 3
      }}/>
    </li>
  )
}
