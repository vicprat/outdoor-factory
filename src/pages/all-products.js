import React from 'react';
import { Layout, Filters, ProductsGrid, SEO, HomeCarousel } from 'components';
import ProductContext from 'context/ProductContext';
import styled from 'styled-components';
import queryString from 'query-string';
import { useLocation } from '@reach/router';

import ProgressiveImage from 'react-progressive-image';
import { motion } from 'framer-motion';

const Content = styled.div`
  display: block;
  grid-gap: 20px;
  margin-top: 20px;
  .img-container {
    padding: 10% 0 0 0;
    @media (min-width: 768px) {
      padding: 3% 0;
    }
    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }
`;

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

export default function AllProducts() {
  const { products, collections } = React.useContext(ProductContext);
  const collectionProductMap = {};
  const { search } = useLocation();
  const qs = queryString.parse(search);
  const selectedCollectionIds = qs.c?.split(',').filter(c => !!c) || [];
  const selectedCollectionIdsMap = {};
  const searchTerm = qs.s;

  selectedCollectionIds.forEach(collectionId => {
    selectedCollectionIdsMap[collectionId] = true;
  });

  if (collections) {
    collections.forEach(collection => {
      collectionProductMap[collection.shopifyId] = {};

      collection.products.forEach(product => {
        collectionProductMap[collection.shopifyId][product.shopifyId] = true;
      });
    });
  }

  const filterByCategory = product => {
    if (Object.keys(selectedCollectionIdsMap).length) {
      for (let key in selectedCollectionIdsMap) {
        if (collectionProductMap[key]?.[product.shopifyId]) {
          return true;
        }
      }
      return false;
    }

    return true;
  };

  const filterBySearchTerm = product => {
    if (searchTerm) {
      return product.title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0;
    }

    return true;
  };

  const filteredProducts = products
    .filter(filterByCategory)
    .filter(filterBySearchTerm);
  return (
    <Layout>
      <SEO description="Todos los productos" title="Todos los productos" />

      <Content>
        <div className="img-container">
          <ProgressiveImage
            src={require(`../images/colaboradores/all-products.png`)}
          >
            {src => (
              <motion.img
                src={src}
                alt="elevate"
                whileHover={{ scale: 1.005 }}
                transition={transition}
              />
            )}
          </ProgressiveImage>
        </div>
        <HomeCarousel />
        {!!searchTerm && !!filteredProducts.length && (
          <h3>
            Search term: <strong>'{searchTerm}'</strong>
          </h3>
        )}
        {!!filteredProducts.length && (
          <h4>{filteredProducts.length} Productos</h4>
        )}
        <Filters />
        {!filteredProducts.length && (
          <div>
            <h3>
              <span>Oh no! Algo salió mal en tu busqueda</span>
              &nbsp;
              <strong>'{searchTerm}'</strong>
            </h3>
            <div>
              Para una mejor respuesta te recomendamos:
              <br />
              <br />
              <ul>
                <li>Revisar si tu busqueda está bien escrita.</li>
                <li>Usa palabras clave.</li>
                <li>
                  Trata de hacer una busqueda relacionada a lo que querías.
                </li>
              </ul>
            </div>
          </div>
        )}
        {!!filteredProducts.length && (
          <div>
            <ProductsGrid products={filteredProducts} />
          </div>
        )}
      </Content>
    </Layout>
  );
}
