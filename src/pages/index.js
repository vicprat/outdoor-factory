import React, {useEffect}from 'react';
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

  useEffect(() => {
    //Prevent Flashing
    gsap.to('body', 0, {css:{visibility: 'visible'}});

    //Timeline
    const tl =gsap.timeline();
    tl.from(".line span", 1.8, {
      y: 100,
      ease: "power4.out",
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3
      }
    })
      .to(".overlay-top", 1.6, {
        height: 0,
        ease: "expo.inOut",
        stagger: 0.4
      })
      .to(".overlay-bottom", 1.6, {
        width: 0,
        ease: "expo.inOut",
        delay: -0.8,
        stagger: {
          amount: 0.4
        }
      })
      .to(".intro-overlay", 0, {
        css: { display: "none" }
      })
      .from(".case-image img", 1.6, {
        scale: 1.4,
        ease: "expo.inOut",
        delay: -2,
        stagger: {
          amount: 0.4
        },   });
  }, []);
 
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
