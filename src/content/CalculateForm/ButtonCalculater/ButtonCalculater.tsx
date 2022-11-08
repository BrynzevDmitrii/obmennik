import styles from "./ButtonCalculater.module.scss"

export const ButtonCalculater = ({ children}:{children:string}): JSX.Element=>{
    return(
        <button className={styles["calculate_btn"]}><p className={styles["calculate_btn-text"]}>{children}</p></button>
    )
}