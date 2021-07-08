import React from 'react';
import Carousel from 'react-multi-carousel';
import { Link } from 'gatsby';
import 'react-multi-carousel/lib/styles.css';

import { MainWrapper } from './styles';

const carouselsInfo = [
  { id: 1, img: 1, path: '/', description: 'Nosotros' },
  {
    id: 2,
    img: 2,
    path: '/products/lacandona',
    description: 'La candona mujer',
  },
  {
    id: 3,
    img: 3,
    path: '/products/lacandona-1',
    description: 'La candona hombre',
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

export function HomeCarousel() {
  return (
    <MainWrapper>
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
            <Link to={carouselInfo.path}>
              <img
                src={require(`../../images/homeCarousel/carousel${carouselInfo.img}.png`)}
                alt={carouselInfo.description}
              />
            </Link>
          </div>
        ))}
      </Carousel>
    </MainWrapper>
  );
}
