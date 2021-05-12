import React from 'react';
import { LayoutWrapper } from './styles';
import { Header } from '../Header';
import { ParallaxProvider } from 'react-scroll-parallax';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from '../Footer';

const Layout = ({ children }) => {
  return (
    <>
    <ParallaxProvider>
      <Header />
      <LayoutWrapper>
        <main>{children}</main>
      </LayoutWrapper>
      </ParallaxProvider>
      <Footer/>
    </>
  );
};

export { Layout };
