import styles from "./ButtonCalculater.module.scss"

export const ButtonCalculater = ({ children, open}:{children:string, open: ()=>void}): JSX.Element=>{
    return(
        <button 
        onClick={()=>open()}
        className={styles["calculate_btn"]}>
                <p className={styles["calculate_btn-text"]}>
                {children}
                </p>
        </button>
    )
}