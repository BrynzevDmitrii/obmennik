import { useAppSelector } from "../../hook";
import { CurCur } from "./components/RubCur/CurCur/CurCur";

import { RubCur } from "./components/RubCur/RubCur";

export const ItemToday = () => {
  const isActiveBtn = useAppSelector(
    (state) => state.triggerCurrencySlice.isActiveBtn
  );

  return <>{isActiveBtn === "rub/cur" ? <RubCur /> : <CurCur />}</>;
};
