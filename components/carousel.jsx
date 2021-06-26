import setConfig from '../static/configs/sets'

import { StyledCarousel } from './carousel.styled';

const CustomCarousel = () => {
    const carouselItems = setConfig.sets[setConfig.current].images.map((item, index) => {
        return {
          key: index,
          src: `${setConfig.path}/${setConfig.current}/${item.name}.jpg`,
        }
      }
    )

    return (
        <StyledCarousel className = {styles["main-carousel"]}
                interval = {3500} 
                nextIcon = {<div className="glyphicon glyphicon-menu-right"></div>}
                prevIcon = {<div className="glyphicon glyphicon-menu-left"></div>}>
            {carouselItems.map(item => 
                // <div>{item.key}</div>
                <img {...item}/>
            )}
        </StyledCarousel>
    )
}

export default CustomCarousel;