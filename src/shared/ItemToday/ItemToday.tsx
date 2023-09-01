import { useAppDispatch, useAppSelector } from "../../hook";

import { ItemList } from "./ItemList/ItemList";


export const ItemToday = () => {
    
    const isActiveBtn = useAppSelector(state=>state.triggerCurrencySlice.isActiveBtn)
    
           
  return (
    <>{isActiveBtn==='rub/cur'?<ItemList activeBtn={"rub/cur"} />: <ItemList activeBtn={"cur/cur"} /> }
              
  </>
  );
};
