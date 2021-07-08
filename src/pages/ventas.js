import React from 'react';
import { Layout, SEO, PuntosVentas } from 'components';

const IndexPage = () => {
  return (
    <Layout>
      <SEO description="Outdoor Factory Mx" title="Puntos de Venta" />
      <PuntosVentas />
    </Layout>
  );
};

export default IndexPage;
