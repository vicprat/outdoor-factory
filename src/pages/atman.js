import React from 'react';
import { Layout, SEO, AtmanProducts } from 'components';
import ProductContext from 'context/ProductContext';

const IndexPage = () => {
  const { collections } = React.useContext(ProductContext);

  return (
    <Layout>
      <SEO
        description="Outdoor Factory Mx"
        title="Productos Atman Adventure Wear"
      />

      {!!collections.find(
        collection => collection.title === 'Atman Adventure Wear'
      ) && <AtmanProducts />}
    </Layout>
  );
};

export default IndexPage;
