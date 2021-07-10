import React from 'react';
import { Layout, SEO, Elevarte, ExperiencasProducts } from 'components';
import ProductContext from 'context/ProductContext';

const IndexPage = () => {
  const { collections } = React.useContext(ProductContext);

  return (
    <Layout>
      <SEO
        description="Outdoor Factory Mx"
        title="Experiencias Outdoor Factory"
      />
      <Elevarte />
      {!!collections.find(
        collection => collection.title === 'Experiencias Outdoor Factory'
      ) && <ExperiencasProducts />}
    </Layout>
  );
};

export default IndexPage;
