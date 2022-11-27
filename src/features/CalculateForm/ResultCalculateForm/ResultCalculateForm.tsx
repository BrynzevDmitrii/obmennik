import styles from './ResultCalculateForm.module.scss';

export const ResultCalculateForm = ()=> {
return(
    <>
    <p className={styles['resultCalculete']}>Предварительный расчет по текущему курсу</p>
    <div className={styles['resultCalculete_wrapper']}>
        <p className={styles['resultCalculete_input__text']}>у меня есть</p>
        <p className= {styles['resultCalculete_input__value']}>{'inputValue'}</p>
    </div>

    <div className={styles['resultCalculete_wrapper']}>
        <p className={styles['resultCalculete_input__text']}>мне нужно получить</p>
        <p className= {styles['resultCalculete_input__value']} >{'outputValue'}</p>
    </div>

    <div className= {styles['resultCalculete_curse__wrapper']}>
        <span className={styles['resultCalculete_curse__value']} >
            {'curse'}
        </span>
    </div>
    </>
)
}