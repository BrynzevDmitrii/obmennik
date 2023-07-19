import { IvName } from "../../../ListToday/type/currentType";

interface PrevValuteProps {
    valuteCurrents : IvName[]
    current? : string
}
 
export const PrevValute = ( props:PrevValuteProps) => {
    return (  
        <>
        {
            props.valuteCurrents.map((i)=>
                ( <li >
                    <div>
                      <span>{i.CharCode}</span> -
                      <span>{i.Name}</span>
                      {i.Nominal > 1?<span> (за {i.Nominal} ед)</span>: ''}
                    </div>
                    <div>
                      <span>{i.Value}</span>
                      <span>Покупаем</span>
                    </div>
                    <div>
                      <span >{i.Value + 0.9}</span>
                      <span >Продаем</span>
                    </div>
                    </li>)
            )
        }
        </>
      
    )
}