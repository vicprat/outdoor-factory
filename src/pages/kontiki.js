import React from 'react';
import { Layout, SEO, KontikiProducts, HomeCarousel } from 'components';
import ProductContext from 'context/ProductContext';
import styled from 'styled-components';

const IndexPage = () => {
  const { collections } = React.useContext(ProductContext);

  return (
    <Layout>
      <SEO description="Outdoor Factory Mx" title="Productos Kon Tiki" />

      <InfoWrapper>
        <div className="title">
          <h1>Kontiki</h1>
        </div>
        <div className="sub-title">
          <h4>Salir a la aventura es la mejor manera de sentirse vivo.</h4>
        </div>
        <div className="img-container">
          <img src={require('../images/colaboradores/kontiki.png')} alt="" />
        </div>
        <div className="description">
          <p>
            Marca 100% Mexicana, dedicada a fomentar las actividades al aire
            libre con productos de alta durabilidad y una excelente calidad.
            Comprometida con el consumo responsable y la participación en
            actividades de cuidado al medio ambiente.
          </p>
        </div>
      </InfoWrapper>

      <HomeCarousel />
      {!!collections.find(collection => collection.title === 'Kon Tiki') && (
        <KontikiProducts />
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