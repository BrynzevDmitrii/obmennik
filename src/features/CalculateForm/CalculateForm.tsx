import { useEffect, useState } from "react";
import { ButtonCalculater } from "../../shared/ButtonCalculater/ButtonCalculater";
import styles from "./CalculateForm.module.scss";
import { ResultCalculateForm } from "./ResultCalculateForm/ResultCalculateForm";
export const CalculateForm = ({availableValute, getValute}:{ availableValute: string, getValute: string }) => {
  const [resultSection, setResultSection] = useState(false);
  useEffect(() => {
    setResultSection(false);
  }, []);
  const open = () => {
    setResultSection(true);
  };
  return (
    <div className={styles["calculate"]}>
      {resultSection == false ? (
        <>
          <div>
            <p className={styles["calculate_options"]}>Выберите параметры</p>
            <p className={styles["calculate_title"]}>
              Нажмите кнопку {"<<Расчитать>>"}
            </p>
          </div>
          <div className={styles["calculate_btn-wrapper"]}>
            <ButtonCalculater open={open}>Расчитать</ButtonCalculater>
          </div>
        </>
      ) : (
        <ResultCalculateForm availableValute={availableValute} getValute = {getValute} />
      )}

      <div className={styles["calculate_btn-wrapper"]}>
        <a className={styles["calculate_btn-serge"]} href="#">
          <p className={styles["calculate_btn-text"]}> Найти Отделение </p>{" "}
        </a>
      </div>
      <p className={styles["calculate_afert"]}>
        Предварительный расчет. Не является публичной офертой.
      </p>
    </div>
  );
};
