import React from 'react';
import { Layout, SEO, Elevarte, ExperienciasProducts } from 'components';
import ProductContext from 'context/ProductContext';

const IndexPage = () => {
  const { collections } = React.useContext(ProductContext);

  return (
    <Layout>
      <SEO
        description="Outdoor Factory Mx"
        title="Experiencias Outdoor Factory/ Elevarte"
      />
      <Elevarte />
      {!!collections.find(
        collection => collection.title === 'Experiencias Outdoor Factory'
      ) && <ExperienciasProducts />}
    </Layout>
  );
};

export default IndexPage;
