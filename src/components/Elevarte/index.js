import React from 'react';
import Carousel from 'react-multi-carousel';
import { Link } from 'gatsby';
import 'react-multi-carousel/lib/styles.css';

import { MainWrapper } from './styles';
import { Banner } from '../../images/elevarte/elevarte1.png';

const carouselsInfo = [
  { id: 1, img: 1, description: 'elevarte' },
  {
    id: 2,
    img: 2,
    description: 'boletos',
  },
  {
    id: 3,
    img: 3,
    description: 'rifa',
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export function Elevarte() {
  return (
    <MainWrapper>
      <div className="img-container">
        <img src={require(`../../images/elevarte/main.png`)} alt="" />
      </div>
      <Carousel
        infinite={true}
        swipeable={true}
        showDots={false}
        autoPlay={true}
        responsive={responsive}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition={'all .05'}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        transitionDuration={600}
      >
        {carouselsInfo.map(carouselInfo => (
          <div key={carouselInfo.id}>
            <div>
              <img
                src={require(`../../images/elevarte/elevarte${carouselInfo.img}.png`)}
                alt={carouselInfo.description}
              />
            </div>
          </div>
        ))}
      </Carousel>
    </MainWrapper>
  );
}
