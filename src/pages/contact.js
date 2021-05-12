import React from 'react';
import { Layout, SEO, ContactForm } from 'components';
import styled from 'styled-components';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Wrapper>
      <h1>¡Contáctanos!</h1>
      <h4>
        Escríbenos si quieres cotizar algún producto en especial o si quieres
        colaborar con nostros.
      </h4>
      <p> ¡Esperamos saber de ti!</p>
      <ContactForm />
      <h4>Pronto nos pondremos en contacto contigo.</h4>
      <h1>Síguenos también en redes sociales.</h1>
    </Wrapper>
  </Layout>
);

export default ContactPage;

const Wrapper = styled.div`
  text-align: center;
  h1,
  h4 {
    padding: 3rem 0;
  }
  h2 {
    font-size: 2rem;
    padding: 1rem 0;
    font-weight: 300;
  }
  h6 {
    font-weight: 400;
  }
`;
