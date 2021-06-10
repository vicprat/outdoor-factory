import React from 'react';
import ProductContext from 'context/ProductContext';
import { ProductsGrid } from '../ProductsGrid';

export function RokeProducts() {
  const { collections } = React.useContext(ProductContext);

  const featuredCollection = collections.find(
    collection => collection.title === 'Roke'
  );

  return (
    <section>
      <h1>Todos los Productos</h1>
      <ProductsGrid products={featuredCollection.products} />
    </section>
  );
}
