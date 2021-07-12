import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { MainWrapper } from './styles';

const carouselsInfo = [
  { id: 1, img: 1, description: 'Nosotros' },
  {
    id: 2,
    img: 2,
    description: 'outdoor factory galería',
  },
  {
    id: 3,
    img: 3,
    description: 'outdoor factory galería',
  },
  {
    id: 4,
    img: 4,
    description: 'outdoor factory galería',
  },
  {
    id: 5,
    img: 5,
    description: 'outdoor factory galería',
  },
  {
    id: 6,
    img: 6,
    description: 'outdoor factory galería',
  },
  {
    id: 7,
    img: 7,
    description: 'outdoor factory galería',
  },
  {
    id: 8,
    img: 8,
    description: 'outdoor factory galería',
  },
  {
    id: 9,
    img: 9,
    description: 'outdoor factory galería',
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export function Galery() {
  return (
    <MainWrapper>
      <h4>Nuestra comunidad</h4>
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
            <img
              src={require(`../../images/galery/galery${carouselInfo.img}.jpg`)}
              alt={carouselInfo.description}
            />
          </div>
        ))}
      </Carousel>
    </MainWrapper>
  );
}
