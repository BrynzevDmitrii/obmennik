import { IvName } from "../../../../../ListToday/type/currentType"

import styles from "../Minor.module.scss";

interface RestrictionsProps {
    restrictionsArray: any
}


 
export const Restrictions = (props:RestrictionsProps) => {
    
    return ( 
    <span className={styles.current}> {Object.keys(props.restrictionsArray)}</span>
    );
}
