import React from 'react';
import { Layout, SEO, RokeProducts, HomeCarousel } from 'components';
import ProductContext from 'context/ProductContext';
import styled from 'styled-components';

const IndexPage = () => {
  const { collections } = React.useContext(ProductContext);

  return (
    <Layout>
      <SEO description="Outdoor Factory Mx" title="Prodcutos Roke" />

      <InfoWrapper>
        <div className="title">
          <h1> Roke</h1>
          <h1>Escalada</h1>
        </div>
        <div className="sub-title">
          <h4>Productos de entrenamiento para escalada.</h4>
        </div>
        <div className="img-container">
          <img src={require('../images/colaboradores/roke.png')} alt="" />
        </div>
        <div className="description">
          <p>
            Roke es una marca enfocada desde sus inicios en proporcionar todos
            aquellos productos que puedan apoyar al entrenamiento de la bandita
            escaladora, con su primer lanzamiento “La Portátil” su principal
            objetivo es la facilidad de transporte a la montaña para poder
            ofrecer un entrene y calentamiento adecuados, igualmente
            encontraremos en su galería una variedad de útiles productos de
            entrene como los aros, agarres, sloppers, la de bolsillo (ideal para
            entrenar dedos y pinzas) y barras de campus.
          </p>
        </div>
      </InfoWrapper>

      <HomeCarousel />
      {!!collections.find(collection => collection.title === 'Roke') && (
        <RokeProducts />
      )}
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
