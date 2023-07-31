import { FunctionComponent } from "react";
import { Root } from "../../../ListToday/type/currentType";
import { PrevValute } from "../PrevValute/PrevValute";

interface OfficeNonCashProps {
    data: Root
}

export const OfficeNonCash: FunctionComponent<OfficeNonCashProps> = (props: OfficeNonCashProps) => {
    return ( <>
        <>
            <PrevValute valuteCurrents={Object.values(props.data.Valute).filter(item => item.CharCode === 'USD')}  />
            <PrevValute valuteCurrents={Object.values(props.data.Valute).filter(item => item.CharCode === 'EUR')}  />
        </>
    </> );
}