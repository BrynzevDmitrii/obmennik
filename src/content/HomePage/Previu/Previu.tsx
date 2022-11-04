import styles from '../Previu/Previu.module.scss'

export const Previu = ():JSX.Element=>{
    return(
        <section className={styles["previu"]}>
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
    )
}