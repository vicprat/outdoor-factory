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
      <h1>Todos los Productos</h1>
      <ProductsGrid products={featuredCollection.products} />
    </section>
  );
}
