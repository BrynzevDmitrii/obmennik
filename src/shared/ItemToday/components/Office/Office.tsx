import { FunctionComponent } from "react";
import { Root, Valute } from "../../../ListToday/type/currentType";

interface OfficeProps {
    data: Root
}
 
export const Office: FunctionComponent<OfficeProps> = (props: OfficeProps) => {
    return ( <>
        <li>
            {Object.values(props.data.Valute).filter(item =>item.CharCode === 'USD').map((i)=> 
            <li >
                      <div>
                        <span>{i?.CharCode}</span> -
                        <span>{i?.Name}</span>
                        {i?.Nominal > 1?<span> (за {i?.Nominal} ед)</span>: ''}
                      </div>
                      <div>
                        <span>{i?.Value}</span>
                        <span>Покупаем</span>
                      </div>
                      <div>
                        <span >{i?.Value + 0.9}</span>
                        <span >Продаем</span>
                      </div>
                      </li>)}
        </li>
    </> );
}
 
