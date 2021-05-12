import React from 'react';
import {
  Layout,
  SEO,
  HomepageCollectionsGrid,
  FeaturedProducts,
  CollabsGrid, HomeParallax
} from 'components';
import ProductContext from 'context/ProductContext';


const IndexPage = () => {
  const { collections } = React.useContext(ProductContext);

  return (
    <Layout>
      <SEO description="Outdoor Factory Mx" title="Inicio" />
      <HomeParallax />
      <CollabsGrid />
      {!!collections.find(
        collection => collection.title === 'Selección del mes'
      ) && <FeaturedProducts />}
    </Layout>
  );
};

export default IndexPage;
