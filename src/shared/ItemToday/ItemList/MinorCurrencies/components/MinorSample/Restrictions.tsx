import { IvName } from "../../../../../ListToday/type/currentType"

import styles from "../Minor.module.scss";
import { CurrentsRestrictions } from "../MinorMobileBank/mok";

interface RestrictionsProps {
    restrictionsArray: CurrentsRestrictions
}


 
export const Restrictions = (props:RestrictionsProps) => {
    
    return ( 
    <span className={styles.current}> {Object.keys(props.restrictionsArray)}</span>
    );
}
