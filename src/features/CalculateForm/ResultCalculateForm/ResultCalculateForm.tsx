import styles from './ResultCalculateForm.module.scss';
let initInputValue = 0;
let initOutputValue = 0;
export const ResultCalculateForm = ({availableValute, getValute}:{ availableValute: string, getValute: string })=> {
return(
    <>
    <p className={styles['resultCalculete']}>Предварительный расчет по текущему курсу</p>
    <div className={styles['resultCalculete_wrapper']}>
        <p className={styles['resultCalculete_input__text']}>у меня есть</p>
        <p className= {styles['resultCalculete_input__value']}>{ initInputValue  + " " + availableValute }</p>
    </div>

    <div className={styles['resultCalculete_wrapper']}>
        <p className={styles['resultCalculete_input__text']}>мне нужно получить</p>
        <p className= {styles['resultCalculete_input__value']} >{ initInputValue + " " + getValute }</p>
    </div>

    <div className= {styles['resultCalculete_curse__wrapper']}>
        <span className={styles['resultCalculete_curse__value']} >
            {'curse'}
        </span>
    </div>
    </>
)
}