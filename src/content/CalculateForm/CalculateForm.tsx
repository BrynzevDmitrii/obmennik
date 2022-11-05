import styles from './CalculateForm.module.scss'
export const CalculateForm = () => {
    return(
        <>
            <p className={styles["calculate_options"]}>Выберите пораметры</p>
            <p>Нажмите кнопку {'<<Расчитать>>'}</p>
            <button>Расчитать</button>
            <a href="#">Найти Отделение</a>
        <p>Предварительный расчет. Не является публичной офертой.</p>
        </>
    )
}