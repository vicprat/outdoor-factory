import React from 'react';
import { Layout, SEO, UltraProducts } from 'components';
import ProductContext from 'context/ProductContext';

const IndexPage = () => {
  const { collections } = React.useContext(ProductContext);

  return (
    <Layout>
      <SEO description="Outdoor Factory Mx" title="Productos Ultra Climbing" />

      {!!collections.find(
        collection => collection.title === 'Ultra Climbing'
      ) && <UltraProducts />}
    </Layout>
  );
};

export default IndexPage;
