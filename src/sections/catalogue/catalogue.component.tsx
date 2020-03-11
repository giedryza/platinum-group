import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Title from '../../components/title/title.component';
import Button from '../../components/button/button.component';
import { IconName } from '../../components/icon/icon.component';
import { slides } from './catalogue.data';
import { useWindowWidth } from '../../utils/useWindowWidth';

enum BreakPoint {
  Md = 608,
  Sm = 496,
}

enum Direction {
  Next,
  Prev,
}

const Catalogue = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleChange = (index: number) => {
    if (index !== currentSlide) {
      setCurrentSlide(index);
    }
  };

  const onSlideChange = (direction: Direction) => {
    const maxIndex = slides.length - 1;

    if (direction === Direction.Next) {
      setCurrentSlide(currentSlide =>
        currentSlide >= maxIndex ? 0 : currentSlide + 1
      );
    }

    if (direction === Direction.Prev) {
      setCurrentSlide(currentSlide =>
        currentSlide <= 0 ? maxIndex : currentSlide - 1
      );
    }
  };

  const width = useWindowWidth();
  const getCenterPercentage = () => (width > BreakPoint.Md ? 35 : 70);

  return (
    <section className="catalogue">
      <div className="container">
        <Title titleUp="piece of" titleDown="work" />
        <div className="catalogue__slider">
          {width > BreakPoint.Sm && (
            <Button
              icon={IconName.ChevronLeft}
              onClick={() => onSlideChange(Direction.Prev)}
            />
          )}
          <div className="catalogue__carousel">
            <Carousel
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              showArrows={false}
              centerMode={true}
              centerSlidePercentage={getCenterPercentage()}
              selectedItem={currentSlide}
              onClickItem={i => handleChange(i)}
            >
              {slides.map(({ img }, i) => (
                <div className="catalogue__slide-item" key={i}>
                  <div className="catalogue__image">
                    <img src={img} alt="" />
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
          {width > BreakPoint.Sm && (
            <Button
              icon={IconName.ChevronRight}
              onClick={() => onSlideChange(Direction.Next)}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Catalogue;
