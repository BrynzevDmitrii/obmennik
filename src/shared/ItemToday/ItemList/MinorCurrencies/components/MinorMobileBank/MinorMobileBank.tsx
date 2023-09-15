import { Root } from "../../../../../ListToday/type/currentType";
import { MinorSample } from "../MinorSample/MinorSample";
import { CNYRestrictions } from "./mok";

interface MinorMobileBankProps {
    data: Root
}
 
export const MinorMobileBank = (props: MinorMobileBankProps) => {
    return ( 
        <>
        <MinorSample 
        currency={props.data.Valute.USD} 
        length={{start: 0,end: 5}}
        current={{currentName:props.data.Valute.CNY, restrictionsArray: CNYRestrictions}}/>
        </>
     );
}
 
