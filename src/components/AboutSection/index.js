import React from 'react';
import Collage from '../../images/logo.png';
import { About, Description, Image, Hide } from './styles';

export function AboutSection() {
  return (
    <About>
      <Description>
        <div>
          <Hide>
            <h2>
              Outdoor Factory nace por el gusto de unir a la banda escaladora y
              amante de la montaña, ayudando a distribuir productos de marcas
              100% mexicanas.
            </h2>
          </Hide>
          <Hide>
            <h6>Nos apasiona acompañarte en la montaña </h6>
          </Hide>
        </div>
      </Description>
      <Image>
        <img src={Collage} alt="" />
      </Image>
    </About>
  );
}
