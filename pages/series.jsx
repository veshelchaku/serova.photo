import { useRouter } from 'next/router';

import seriesConfig from '../static/configs/series'

import styles from '../styles/seriespage.css';

const Page = () => {
  const router = useRouter();

  const seriesItems = seriesConfig.sets[router.query.index].images.map((item, index) => {
        return {key: index, class: item.class, image: `${seriesConfig.path}/${router.query.index}/${item.name}.jpg`}
    })

  return (
      <div>
        <div className={styles["series-title"]}>{seriesConfig.sets[router.query.index].name}</div>
        <div className={styles["series-grid"]}>
            {seriesItems.map(item => 
                    <div key={item.key} className={`${styles[`grid-item-${item.class}`]} ${styles["grid-item"]}`}>
                        <img className={styles.img} src={item.image}/>
                    </div>
                )
            }
        </div>
      </div>
  );
};

export default Page;