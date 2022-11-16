import { useState } from "react";
import { BaseInput } from "../../shared/BaseInput/BaseInput";
import { ValuteSelect } from "../../shared/Selects/ValuteSelect/ValuteSelect";

export const ValuteInputBox = (): JSX.Element => {
    const [selectedСurrency, setSelectedСurrency] = useState('р')
  return (
    <>
      <ValuteSelect />
        <BaseInput valut = {'p'}/>
    </>
  );
};
