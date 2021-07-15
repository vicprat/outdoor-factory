import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProgressiveImage from 'react-progressive-image';
import { motion } from 'framer-motion';

import { MainWrapper } from './styles';

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
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
        <ProgressiveImage src={require(`../../images/elevarte/main.png`)}>
          {src => (
            <motion.img
              src={src}
              alt="elevate"
              whileHover={{ scale: 1.005 }}
              transition={transition}
            />
          )}
        </ProgressiveImage>
      </div>
      <div className="info">
        <div className="title">
          <h1>ELEVARTE</h1>
          <h2>Los expertos alguna vez fueron principiantes</h2>
          <p>Sábado 13 de Noviembre: Competencia femenina.</p>
          <p>Domingo 14 de Noviembre: Competencai masculina.</p>
        </div>
        <div className="description">
          <p>
            El objetivo de ésta competencia es pasar un momento increíble entre
            amigos y escalar al máximo, para apoyar el desarrollo de la
            comunidad de San José Tepuzas, una zona de escalada tan diversa en
            sus estilos de escalada y con rutas para todos.
          </p>
        </div>
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
