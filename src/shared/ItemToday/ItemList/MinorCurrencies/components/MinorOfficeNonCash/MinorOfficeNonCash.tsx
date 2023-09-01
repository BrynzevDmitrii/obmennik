import { FunctionComponent } from "react";
import { Root } from "../../../../../ListToday/type/currentType";
import styles from "../Minor.module.scss"

interface MinorOfficeNonCashProps {
    data: Root
}
 
export const MinorOfficeNonCash: FunctionComponent<MinorOfficeNonCashProps> = (props:MinorOfficeNonCashProps) => {
    const usd = props.data.Valute.USD;
    const eur = props.data.Valute.EUR;

    console.log(Object.values(props.data.Valute).slice(0,8));
    
    return ( 
  <>
      {Object.values(props.data.Valute).slice(0,8).map((i, index)=>
     console.log(i)
     
      )
       }
  </>
       
      
    );
}
