import React from 'react';
import { Link } from 'gatsby';
import { motion, AnimatePresence } from 'framer-motion';
import ProgressiveImage from 'react-progressive-image';
import { MainWrapper } from './styles';

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
const imageDetails = {
  width: '40vh',
  height: '60vh',
};

const brandsInfo = [
  {
    id: 1,
    name: 'Selva Negra',
    path: '/selva-negra',
    img: 'selva',
    location: 'MTY',
  },
  {
    id: 2,
    name: 'Ultra Climbing',
    path: '/ultra',
    img: 'ultra',
    location: 'CDMX',
  },
  {
    id: 3,
    name: 'Atman Adventure Wear',
    path: '/atman',
    img: 'atman',
    location: 'CDMX',
  },
  { id: 4, name: 'Roke', path: '/roke', img: 'roke', location: 'QRO' },
  {
    id: 5,
    name: 'Kontiki',
    path: '/kontiki',
    img: 'kontiki',
    location: 'CDMX',
  },
  {
    id: 6,
    name: 'Monkey Hands',
    path: '/monkey-hands',
    img: 'monkey',
    location: 'CDMX',
  },
];

export function CollabsGrid() {
  return (
    <AnimatePresence>
      <MainWrapper>
        {brandsInfo.map(brandInfo => (
          <div className="container" key={brandInfo.id}>
            <div className="row center">
              <div className="image-container">
                <div
                  className="thumbnail"
                  style={{
                    width: imageDetails.width,
                    height: imageDetails.height,
                  }}
                >
                  <div className="frame">
                    <Link to={brandInfo.path}>
                      <ProgressiveImage
                        src={require(`../../images/colaboradores/${brandInfo.img}.png`)}
                      >
                        {src => (
                          <motion.img
                            src={src}
                            alt={brandInfo.name}
                            whileHover={{ scale: 1.1 }}
                            transition={transition}
                          />
                        )}
                      </ProgressiveImage>
                    </Link>
                  </div>
                </div>
                <motion.div
                  exit={{ opacity: 0 }}
                  transition={transition}
                  className="information"
                >
                  <div className="title">{brandInfo.name}</div>
                  <div className="location">
                    <span>{brandInfo.location}</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </MainWrapper>
    </AnimatePresence>
  );
}
