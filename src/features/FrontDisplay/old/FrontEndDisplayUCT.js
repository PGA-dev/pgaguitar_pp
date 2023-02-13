import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    CarouselControl,
    Carousel,
    CarouselItem,
    CarouselIndicators,
} from 'reactstrap';
  
const FrontDisplayUC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const items = [
        {
            "caption": "Ibanez RGA 622",
            "src": "http://localhost:3003/images/p_region_RGA622XH_BK_00_01.png",
            "altText": "RGA622"
          },
          {
            "id": "1",
            "caption": "EHB1506",
            "src": "http://localhost:3003/images/p_region_EHB1506MS_BIF_1P_01.png",
            "altText": "6 Bass"
          },
          {
            "caption": "j.Custom 8527",
            "src": "http://localhost:3003/images/guitar.jpg",
            "altText": "jc8527"
          }
    ];
  
    const itemLength = items.length - 1

    const previousButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ?
            itemLength : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const nextButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === itemLength ?
            0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }
  
    const carouselItemData = items.map((item) => {
        return (
            <CarouselItem
                key={item.src}
                onExited={() => setAnimating(false)}
                onExiting={() => setAnimating(true)}
            >
                <img src={item.src} alt={item.altText} />
            </CarouselItem>
        );
    });
  
    return (
        <div style={{
            display: 'block', width: 320, padding: 30
        }}>
            <h3>Featured</h3>
            <Carousel previous={previousButton} next={nextButton}
                activeIndex={activeIndex}>
                <CarouselIndicators items={items}
                    activeIndex={activeIndex}
                    onClickHandler={(newIndex) => {
                        if (animating) return;
                        setActiveIndex(newIndex);
                    }} />
                {carouselItemData}
                <CarouselControl directionText="Prev"
                    direction="prev" onClickHandler={previousButton} />
                <CarouselControl directionText="Next"
                    direction="next" onClickHandler={nextButton} />
            </Carousel>
        </div >
    );
}
  
export default FrontDisplayUC;