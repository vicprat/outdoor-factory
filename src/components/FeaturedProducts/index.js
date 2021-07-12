import React from 'react';
import ProductContext from 'context/ProductContext';
import { ProductsGrid } from '../ProductsGrid';

export function FeaturedProducts() {
  const { collections } = React.useContext(ProductContext);

  const featuredCollection = collections.find(
    collection => collection.title === 'Selección del mes'
  );

  return (
    <section>
      <h4>Productos Destacados</h4>
      <ProductsGrid products={featuredCollection.products} />
    </section>
  );
}
