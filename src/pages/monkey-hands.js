import React from 'react';
import { Layout, SEO, MonkeyProducts } from 'components';
import ProductContext from 'context/ProductContext';

const IndexPage = () => {
  const { collections } = React.useContext(ProductContext);

  return (
    <Layout>
      <SEO description="Outdoor Factory Mx" title="Productos Monkey Hands" />

      {!!collections.find(
        collection => collection.title === 'Monkey Hands'
      ) && <MonkeyProducts />}
    </Layout>
  );
};

export default IndexPage;
