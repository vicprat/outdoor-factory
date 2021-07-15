import React from 'react';
import { Layout, SEO, SelvaProducts, HomeCarousel } from 'components';
import ProductContext from 'context/ProductContext';
import styled from 'styled-components';

const IndexPage = () => {
  const { collections } = React.useContext(ProductContext);

  return (
    <Layout>
      <SEO description="Outdoor Factory Mx" title="Prodcutos Selva Negra" />

      <InfoWrapper>
        <div className="title">
          <h1> selva</h1>
          <h1>negra</h1>
        </div>
        <div className="sub-title">
          <h4>Tan Alto como tus sueños</h4>
        </div>
        <div className="img-container">
          <img src={require('../images/colaboradores/selva.png')} alt="" />
        </div>
        <div className="description">
          <p>
            Siendo una empresa orgullosamente mexicana, cada una de sus prendas
            hacen honor a nuestras raíces, con increíbles y originales diseños
            representativos de todos esos increíbles lugares que México nos
            ofrece y que sin duda son un recordatorio de que hay que conocerlos.
          </p>
        </div>
      </InfoWrapper>
      <HomeCarousel />
      {!!collections.find(collection => collection.title === 'Selva Negra') && (
        <SelvaProducts />
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
