import React from 'react';
import { Layout, SEO, AboutSection, Galery } from 'components';

const IndexPage = () => {
  return (
    <>
      <Layout>
        <SEO description="Outdoor Factory Mx" title="Nosotros" />
        <AboutSection />
        <Galery />
      </Layout>
    </>
  );
};

export default IndexPage;
