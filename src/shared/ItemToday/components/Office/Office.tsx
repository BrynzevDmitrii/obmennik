import { FunctionComponent } from "react";
import { Root } from "../../../ListToday/type/currentType";
import { PrevValute } from "../PrevValute/PrevValute";

interface OfficeProps {
    isActiveBtn:'rub' | 'cur'
    data: Root
}
 
export const Office: FunctionComponent<OfficeProps> = (props: OfficeProps) => {
    return ( <>
    {
        props.isActiveBtn == 'rub' ? 
        (  <>
            <PrevValute valuteCurrents={Object.values(props.data.Valute).filter(item => item.CharCode === 'USD')} current = {'до 30 000.00 '} />
            <PrevValute valuteCurrents={Object.values(props.data.Valute).filter(item => item.CharCode === 'USD')} current = {'от 30 000.00'} />
            <PrevValute valuteCurrents={Object.values(props.data.Valute).filter(item => item.CharCode === 'EUR')} current = {'до 30 000.00 '} />
            <PrevValute valuteCurrents={Object.values(props.data.Valute).filter(item => item.CharCode === 'EUR')} current = {'от 30 000.00'} />
        </>):(
             <PrevValute valuteCurrents={props.data.Valute}  />
        )
    }
      
    </> );
}
 
