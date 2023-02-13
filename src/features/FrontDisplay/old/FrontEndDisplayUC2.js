import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Carousel,
    CarouselItem,
    CarouselIndicators,
} from 'reactstrap';
  
const FrontDisplayCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const items = [
        {
            "src": "http://localhost:3003/images/p_region_RGA622XH_BK_00_01.png",
          },
          {
            "src": "http://localhost:3003/images/p_region_EHB1506MS_BIF_1P_01.png",
          },
          {
            "src": "http://localhost:3003/images/guitar.jpg",
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
            display: 'block', padding: 30
        }}>
            <h1>Featured</h1>
            <Carousel previous={previousButton} next={nextButton} 
                activeIndex={activeIndex}>
                <CarouselIndicators items={items}
                    activeIndex={activeIndex}
                    onClickHandler={(newIndex) => {
                        if (animating) return;
                        setActiveIndex(newIndex);
                    }} />
                {carouselItemData}
            </Carousel>
        </div >
    );
}
  
export default FrontDisplayCarousel;