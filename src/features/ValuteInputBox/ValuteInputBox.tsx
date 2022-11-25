import { useEffect, useState } from "react";
import { BaseInput } from "../../shared/BaseInput/BaseInput";
import { ValuteSelect } from "../../shared/Selects/ValuteSelect/ValuteSelect";

export const ValuteInputBox = (): JSX.Element => {
    const [selectedСurrency, setSelectedСurrency] = useState('₽')

    const currentSelected = (current:string)=>{
      setSelectedСurrency(current)
    }
    
    
  return (
    <>
      <ValuteSelect setSelected = {currentSelected} />
        <BaseInput valut = {selectedСurrency}/>
    </>
  );
};
