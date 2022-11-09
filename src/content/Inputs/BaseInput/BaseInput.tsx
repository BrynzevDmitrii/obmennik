import styles from "./BaseInput.module.scss";

const defaultValue = "0";

export const BaseInput = ({ valut }: { valut: string }): JSX.Element => {
  return (
    <div className={styles["input_wrapper"]} >
        <input type={'text'} className={styles["input"]} placeholder={ defaultValue + valut} />
        <label className={styles["input_label"]} >Сумма обмена</label>
    </div>
  );
};
