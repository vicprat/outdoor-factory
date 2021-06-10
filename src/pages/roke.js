import React from 'react';
import { Layout, SEO, RokeProducts } from 'components';
import ProductContext from 'context/ProductContext';

const IndexPage = () => {
  const { collections } = React.useContext(ProductContext);

  return (
    <Layout>
      <SEO description="Outdoor Factory Mx" title="Prodcutos Roke" />

      {!!collections.find(collection => collection.title === 'Roke') && (
        <RokeProducts />
      )}
    </Layout>
  );
};

export default IndexPage;
