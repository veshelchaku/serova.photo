import Modal from 'react-bootstrap/lib/Modal';
import Carousel from 'react-bootstrap/lib/Carousel';

import gridConfig from '../static/configs/grid'

import styles from '../styles/grid.css';

const gridItems = (() => {
    let columns = []
    let column = []
    gridConfig.sets[gridConfig.current].images.forEach((item, index) => {
            if (column.length < gridConfig.sets[gridConfig.current].count) {
                column.push({
                    key: index,
                    image: `${gridConfig.path}/${gridConfig.current}/${item.name}.jpg`
                })
                if (column.length === gridConfig.sets[gridConfig.current].count) {
                    columns.push(column)
                    column = []
                }
            }
        }
    )
    return columns
})()

const carouselItems = gridConfig.sets[gridConfig.current].images.map((item, index) => {
    return {key: index, image: `${gridConfig.path}/${gridConfig.current}/${item.name}.jpg`}
  }
)

class ImagesGrid extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false,
            activeIndex: 0
        };

        this.handleShow = () => {
            this.setState({ show: true });
        };

        this.handleHide = () => {
            this.setState({ show: false });
        };

        this.handleClick = index => {
            this.setState({ activeIndex: index });
            this.handleShow();
        };

        this.handleSelect = index => {
            this.setState({ activeIndex: index })
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleHide = this.handleHide.bind(this);
        this.handleSelect = this.handleSelect.bind(this);

        this.gridImages = (column) => column.map(item => 
            <div key={item.key} className={styles["images-grid-item"]} onClick={() => this.handleClick(item.key)}>
                <div className={styles["images-grid-item-link"]}></div>
                <img className={styles["images-grid-img"]} src={item.image} />
            </div>
        )
    }

    render() {
        return (
            <div className={styles["grid-container"]}>
                <div className={styles["images-grid"]}>
                    {gridItems.map(column =>
                        <div key={gridItems.indexOf(column)} className={styles["images-grid-column"]}>
                            {this.gridImages(column)}
                        </div>
                    )}
                </div>

                <Modal
                    show={this.state.show}
                    onHide={this.handleHide}
                    dialogClassName={styles["modal-container"]}
                >
                    <Carousel interval={0}
                        activeIndex={this.state.activeIndex}
                        indicators={false}
                        slide={false}
                        onSelect={this.handleSelect}
                        nextIcon={<span className="glyphicon glyphicon-menu-right"></span>}
                        prevIcon={<span className="glyphicon glyphicon-menu-left"></span>}>
                        {carouselItems.map(item =>
                            <Carousel.Item key={item.key}>
                                <img className={styles.img} src={item.image} />
                            </Carousel.Item>)
                        }
                    </Carousel>
                    <div className={`${styles["close"]}`} onClick={() => this.handleHide()}>×</div>
                </Modal>
            </div>
        )
    }
}

export default ImagesGrid;