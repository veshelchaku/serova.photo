import Link from 'next/link'

import seriesConfig from '../public/static/configs/series'

//import styles from '../styles/series.css';

const seriesItems = seriesConfig.sets.map((item, index) => {
    return {key: index, name: item.name, preview: `${seriesConfig.path}/${index}/${item.images[item.preview].name}.jpg`}
})

const gridSize = () => {
    return seriesItems.length > 2 ? 3 : seriesItems.length
}

const styles = {}

const SeriesGrid = () => {
        return (
            <div className={styles.container}>
                <div className={styles.title}>Свадьбы</div>
                <div className={`${styles["series-grid"]} ${styles[`series-grid-${gridSize()}`]}`}>
                    {seriesItems.map((item, index) => 
                        <div key={item.key}>
                            <Link href={`/series?index=${index}`}>
                                <div className={styles["series-container"]}>
                                    <div className={styles["series-link"]}></div>
                                    <img className={styles.preview} src={item.preview}/>
                                </div>
                            </Link>
                            <div className={styles["series-title"]}>
                                {item.name}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
}

export default SeriesGrid;