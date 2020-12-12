import Carousel from 'react-bootstrap/lib/Carousel';
import ImagesGrid from '../components/grid';
import SeriesGrid from '../components/series';

import styles from '../styles/index.css';

import setConfig from '../static/configs/sets'
import pricesConfig from '../static/configs/prices'

const carouselItems = setConfig.sets[setConfig.current].images.map((item, index) => {
    return {key: index, image: `${setConfig.path}/${setConfig.current}/${item.name}.jpg`}
  }
)

export default () => (
  <div>
    <Carousel className = {styles["main-carousel"]}
              interval = {3500} 
              nextIcon = {<div className="glyphicon glyphicon-menu-right"></div>}
              prevIcon = {<div className="glyphicon glyphicon-menu-left"></div>}>
      {carouselItems.map(item => 
        <Carousel.Item key={item.key}>
          <img width={1920} height={500} src={item.image}/>
        </Carousel.Item>
      )}
    </Carousel>

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
  </div>
)