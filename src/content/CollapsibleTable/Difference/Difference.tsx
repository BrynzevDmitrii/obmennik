import style from  "./Difference.module.css"
import classNames from "classnames";
import { useEffect, useState } from "react";
import { IvName } from "../../type/IApiProps";
import Image from "next/image";

export default function Difference({data}:{data:IvName}){
    const val = Number(data.Value);
    const previous = Number(data.Previous);
    const [diff, setDiff ] = useState<Number | string>();
    useEffect(()=>{
        return setDiff(((previous - val) / val * 100).toFixed(3));
    }, [diff])

    return(
        <div className={classNames(style['diff'])}>
        <h3 >{diff}%</h3>
        <div>
        {
            Number(diff)< 0 ? <h6 >
                <Image 
                height={ 19 }
                src={"/down-arrow.png"}
                width={ 22 }
                /></h6> : 	
            <h6>
                <Image 
                height={ 19 }
                src={"/up-arrow.png"}
                width={ 22 }
                />
            </h6>
            }
            </div>
        </div>
    )
}
