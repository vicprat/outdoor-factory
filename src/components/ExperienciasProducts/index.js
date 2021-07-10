import React from 'react';
import ProductContext from 'context/ProductContext';
import { ProductsGrid } from '../ProductsGrid';

export function ExperienciasProducts() {
  const { collections } = React.useContext(ProductContext);

  const featuredCollection = collections.find(
    collection => collection.title === 'Experiencias Outdoor Factory'
  );

  return (
    <section>
      <h1>Registro Elevarte 2021</h1>
      <ProductsGrid products={featuredCollection.products} />
    </section>
  );
}
