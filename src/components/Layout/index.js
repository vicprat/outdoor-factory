import React, {useEffect}from 'react';
import { LayoutWrapper } from './styles';
import { Header } from '../Header';
import { Navigation } from '../Navigation';
import { ParallaxProvider } from 'react-scroll-parallax';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from '../Footer';
import gsap from 'gsap';

const Layout = ({ children }) => {
  useEffect(() =>{
    //Prevent flash from happening.
    gsap.to("body", 0, {css:{visibility:"visible"}});
  });

  return (
    <>
      <ParallaxProvider>
        <LayoutWrapper>
       
          <Header />
          <Navigation />
          <main>{children}</main>
        </LayoutWrapper>
      </ParallaxProvider>
      <Footer />
    </>
  );
};

export { Layout };
