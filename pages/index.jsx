import ImagesGrid from '../components/grid';
import SeriesGrid from '../components/series';

//import styles from '../styles/index.css';

import pricesConfig from '../public/static/configs/prices'

import CustomCarousel from '../components/carousel';

const styles = {};

const Index = () => (
  <>
    <CustomCarousel/>

    <div className={styles["quote-container"]}>
      <div className={styles["quote"]}>
        минимализм текстуры детали
      </div>
    </div>

    <div className={styles["prices-container"]}>
      {pricesConfig.map(item =>
          <div className={styles["price"]} key={item.key}>
            <div>
              <div className={styles["price-header-container"]}>
                <h4 className={styles["price-header-text"]}>
                  {item.name}
                </h4>
              </div>
              <ul className={`dash ${styles["price-content"]}`}>
                {item.contents.map(price => 
                  <li key={item.contents.indexOf(price)}>
                    {price}
                  </li>
                )}
              </ul>
              {item.additions.length > 0 &&
                <ul className={`star ${styles["price-additions"]}`}>
                  {item.additions.map(additions => 
                    <li key={item.additions.indexOf(additions)}>
                      {additions}
                    </li>
                  )}
                </ul>
              }
            </div>
            <div className={styles["price-footer-container"]}>
              <h4 className={styles["price-footer-text"]}>
                {item.price}
              </h4>
            </div>
          </div>
      )}
    </div>

    <div className={styles["prices-clarification"]}>
      <div className={styles["prices-clarification-text"]}>
        бронирование даты осуществляется путём внесения предоплаты в размере 25% от общей суммы
      </div>
    </div>

    <ImagesGrid/>

    <SeriesGrid/>
  </>
)

export default Index;