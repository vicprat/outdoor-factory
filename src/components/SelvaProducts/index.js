import React from 'react';
import ProductContext from 'context/ProductContext';
import { ProductsGrid } from '../ProductsGrid';

export function SelvaProducts() {
  const { collections } = React.useContext(ProductContext);

  const featuredCollection = collections.find(
    collection => collection.title === 'Selva Negra'
  );

  return (
    <section>
      <h1>Todos Los Productos</h1>
      <ProductsGrid products={featuredCollection.products} />
    </section>
  );
}
