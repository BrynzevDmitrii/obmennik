import { FunctionComponent } from "react";
import { ItemToday } from "../ItemToday/ItemToday";

interface ListTodayProps {
    
}
 
export const ListToday: FunctionComponent<ListTodayProps> = () => {
    return ( 
    <ul>
        <ItemToday />
    </ul> );
}
