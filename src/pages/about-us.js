import React from 'react';
import { Layout, SEO, AboutSection } from 'components';

const IndexPage = () => {
  return (
    <>
      <Layout>
        <SEO description="Outdoor Factory Mx" title="Nosotros" />
        <AboutSection />
      </Layout>
    </>
  );
};

export default IndexPage;
