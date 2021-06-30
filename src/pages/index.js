import React from 'react';
import {
  Layout,
  SEO,
  FeaturedProducts,
  CollabsGrid,
  IntroOverlay,
  Banner,
  Cases,
  AboutSection,
} from 'components';
import ProductContext from 'context/ProductContext';
import gsap from 'gsap';

const IndexPage = () => {
  const { collections } = React.useContext(ProductContext);

  //Timeline
  const tl = gsap.timeline();

  return (
    <>
      <IntroOverlay />
      <Layout>
        <SEO description="Outdoor Factory Mx" title="Inicio" />
        <Banner />
        <Cases />
        <AboutSection />
        <CollabsGrid />
        {!!collections.find(
          collection => collection.title === 'Selección del mes'
        ) && <FeaturedProducts />}
      </Layout>
    </>
  );
};

export default IndexPage;
