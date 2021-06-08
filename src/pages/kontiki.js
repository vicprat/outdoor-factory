import React from 'react';
import { Layout, SEO, KontikiProducts } from 'components';
import ProductContext from 'context/ProductContext';

const IndexPage = () => {
  const { collections } = React.useContext(ProductContext);

  return (
    <Layout>
      <SEO description="Outdoor Factory Mx" title="Productos Kon Tiki" />

      {!!collections.find(collection => collection.title === 'Kon Tiki') && (
        <KontikiProducts />
      )}
    </Layout>
  );
};

export default IndexPage;
