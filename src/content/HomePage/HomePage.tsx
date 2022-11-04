import Layout from "../../layouts/Loyaut";
import styles from "./HomePage.module.scss";


export const HomePage = (): JSX.Element => {
  return (
    <Layout>
      <section className="container">
        <div className={styles["previu_banner"]}>
          <div className={styles["previu_banner-info"]}>
            <h1 className={styles["previu_banner-title"]}>Обмен валют</h1>
            <p className={styles["previu_banner-description"]}>
              Информация о курсах обмена иностранных валют является справочной и
              может меняться в течение дня
            </p>
            <div className={styles["previu_banner-btn"]}>
              <button className={styles["previu_banner-left--btn"]}>
                Расчитать
              </button>
              <button className={styles["previu_banner-right--btn"]}>
                Подробнее
              </button>
            </div>
          </div>
          <img className={styles["previu_banner-img"]} src="https://www.vtb.ru/media-files/vtb.ru/sitepages/personal/platezhi-i-perevody/obmen-valjuty/1x_Hero_CurrencyExchange.png" 
               alt="evrodollar"/>
        </div>
      </section>
    </Layout>
  );
};
