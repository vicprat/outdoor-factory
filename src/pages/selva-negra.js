import React from 'react';
import { Layout, SEO, SelvaProducts } from 'components';
import ProductContext from 'context/ProductContext';

const IndexPage = () => {
  const { collections } = React.useContext(ProductContext);

  return (
    <Layout>
      <SEO description="Outdoor Factory Mx" title="Prodcutos Selva Negra" />

      {!!collections.find(collection => collection.title === 'Selva Negra') && (
        <SelvaProducts />
      )}
    </Layout>
  );
};

export default IndexPage;
