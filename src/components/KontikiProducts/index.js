import React from 'react';
import ProductContext from 'context/ProductContext';
import { ProductsGrid } from '../ProductsGrid';

export function KontikiProducts() {
  const { collections } = React.useContext(ProductContext);

  const featuredCollection = collections.find(
    collection => collection.title === 'Kon Tiki'
  );

  return (
    <section>
      <h4>Todos los Productos</h4>
      <ProductsGrid products={featuredCollection.products} />
    </section>
  );
}
