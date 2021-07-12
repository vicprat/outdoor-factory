import React from 'react';
import { Layout, SEO, MonkeyProducts, HomeCarousel } from 'components';
import ProductContext from 'context/ProductContext';
import styled from 'styled-components';

const IndexPage = () => {
  const { collections } = React.useContext(ProductContext);

  return (
    <Layout>
      <SEO description="Outdoor Factory Mx" title="Productos Monkey Hands" />

      <InfoWrapper>
        <div className="title">
          <h1> Monkey</h1>
          <h1>Hands</h1>
        </div>
        <div className="sub-title">
          <h4>Mejorando el rendimiento de los atletas desde 2012.</h4>
        </div>
        <div className="img-container">
          <img src={require('../images/colaboradores/monkey.png')} alt="" />
        </div>
        <div className="description">
          <p>
            Monkey hands es una marca mexicana, creada por un estudiante de
            química, amante de la escalada, quien un día decidió usar sus
            habilidades para crear una marca innovadora de magnesia y poder
            compartir con otros escaladores un producto de alta calidad. Sus
            altos estándares de calidad le han hecho convertirse en una de las
            empresas principales a nivel mundial que se dedican a buscar una
            mejora en todas las necesidades de adherencia y agarre para
            cualquier deporte.
          </p>
        </div>
      </InfoWrapper>

      <HomeCarousel />
      {!!collections.find(
        collection => collection.title === 'Monkey Hands'
      ) && <MonkeyProducts />}
    </Layout>
  );
};

export default IndexPage;

const InfoWrapper = styled.div`
  margin: 15% 0;
  text-align: center;
  @media (min-width: 650px) {
    margin: auto;
  }
  .title {
    padding: 20px 0 0 0;
    h1 {
      text-transform: uppercase;
      font-size: 2rem;
      letter-spacing: 1rem;
      font-weight: bold;
      @media (min-width: 650px) {
        font-size: 2.5rem;
      }
    }
  }
  .sub-title {
    padding: 0 5px;
    h4 {
      font-size: 1rem;
      letter-spacing: 0.3rem;
      font-weight: lighter;
    }
  }
  .img-container {
    width: 100%;
    height: 50vh;
    @media (min-width: 650px) {
      height: 80vh;
    }
    img {
      width: 100%;
      object-fit: cover;
      height: 50vh;
      @media (min-width: 650px) {
        height: 80vh;
      }
    }
  }

  .description {
    padding: 20px 0 0 0;
    p {
      padding: 0 10%;
      line-height: 1.8rem;
      @media (min-width: 650px) {
        font-size: 1.8rem;
        line-height: 2.5rem;
      }
    }
  }
`;