import React from 'react';
import ProductContext from 'context/ProductContext';
import { ProductsGrid } from '../ProductsGrid';

export function UltraProducts() {
  const { collections } = React.useContext(ProductContext);

  const featuredCollection = collections.find(
    collection => collection.title === 'Ultra Climbing'
  );

  return (
    <section>
      <h4>Todos los Productos</h4>
      <ProductsGrid products={featuredCollection.products} />
    </section>
  );
}
