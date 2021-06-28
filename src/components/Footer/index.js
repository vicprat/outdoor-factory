import React from 'react';
import { Logo } from '../Logo';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FooterWrapper, Title, Icon, Contact } from './styles';
import { StyledLink } from '../StyledLink';

export function Footer() {
  return (
    <FooterWrapper>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-12"></div>

          <div className="col-md-3 col-12" id="p1">
            <Title>Nosotros</Title>
            <h6>Vívelo en la montaña</h6>
            <p>Outdoor Factory </p>
          </div>

          <div className=" col-md-3 col-12" id="p3">
            <Title>Contáctanos</Title>
            <Contact>
              <Icon>
                <FaWhatsapp />
              </Icon>
              <StyledLink to="https://wa.me/524421716830">
                <h5>Whatsapp</h5>
              </StyledLink>
            </Contact>

            <Contact>
              <Icon>
                <FaInstagram />
              </Icon>
              <StyledLink to="https://www.instagram.com/outdoor_factory_of/?hl=es-la">
                <h5>Instagram</h5>
              </StyledLink>
            </Contact>
            <Contact>
              <Icon>
                <FaFacebook />
              </Icon>
              <StyledLink to="https://www.facebook.com/Outdoor-Factory-106060428199885">
                <h5>Facebook</h5>
              </StyledLink>
            </Contact>
          </div>
        </div>

        <hr />
      </div>
    </FooterWrapper>
  );
}

