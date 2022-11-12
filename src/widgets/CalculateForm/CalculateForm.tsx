
import { ButtonCalculater } from "../ButtonCalculater/ButtonCalculater";
import styles from "./CalculateForm.module.scss";
export const CalculateForm = () => {
  return (
    <div className={styles["calculate"]}>
      <div>
        <p className={styles["calculate_options"]}>Выберите параметры</p>
        <p className={styles["calculate_title"]}>
          Нажмите кнопку {"<<Расчитать>>"}
        </p>
      </div>
      <div className={styles["calculate_btn-wrapper"]}>
        <ButtonCalculater>Расчитать</ButtonCalculater>
        <a  className={styles["calculate_btn-serge"]} href="#">
            <p className={styles["calculate_btn-text"]}> Найти Отделение </p> </a>
      </div>
      <p className={styles["calculate_afert"]}>Предварительный расчет. Не является публичной офертой.</p>
    </div>
  );
};
