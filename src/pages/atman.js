import React from 'react';
import { Layout, SEO, AtmanProducts, HomeCarousel } from 'components';
import ProductContext from 'context/ProductContext';
import styled from 'styled-components';

const IndexPage = () => {
  const { collections } = React.useContext(ProductContext);

  return (
    <Layout>
      <SEO
        description="Outdoor Factory Mx"
        title="Productos Atman Adventure Wear"
      />

      <InfoWrapper>
        <div className="title">
          <h1> atman</h1>
          <h1>adventure</h1>
          <h1>wear</h1>
        </div>
        <div className="sub-title">
          <h4>Inspirados por la naturaleza.</h4>
          <h4>Garantía textil permanente.</h4>
        </div>
        <div className="img-container">
          <img src={require('../images/colaboradores/atman.png')} alt="" />
        </div>
        <div className="description">
          <p>
            Empresa nacional comprometida con el medio ambiente, Atman ofrece
            alta calidad y durabilidad en sus productos, además del desarrollo
            de proyectos que ayudan a reducir el consumo excesivo de prendas,
            dándoles la mayor vida a sus productos para contrarrestar los
            efectos contaminantes del fast fashion.
          </p>
        </div>
      </InfoWrapper>

      <HomeCarousel />
      {!!collections.find(
        collection => collection.title === 'Atman Adventure Wear'
      ) && <AtmanProducts />}
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
