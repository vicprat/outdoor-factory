import React from 'react';
import Collage from '../../images/gatsby-icon.png';
import { About, Description, Image, Hide } from './styles';

export function AboutSection() {
  return (
    <About>
      <Description>
        <div>
          <Hide>
            <h2>OUTDOOR FACTORY</h2>
            <p>
              Outdoor Factory comienza de la sencilla idea de distribuir ropa de
              montaña de alta calidad con marcas 100% mexicanas para dar a
              conocer el potencial de proyectos únicos y competitivos que hay en
              el país.
            </p>
            <p>
              Con el paso del tiempo, se convierte en una empresa apasionada por
              las experiencias en la naturaleza y proporcionar los artículos
              necesarios para que la estancia sea lo más confortable posible, el
              cuidado, preservación y fomentación del deporte en ella, siempre
              tratando de demostrar la belleza que hay en cada actividad al aire
              libre y por supuesto aficionados del consumo local y responsable.
            </p>
            <p>
              Adoramos crear siempre nuevas experiencias en la naturaleza y
              recordarles a todos lo bien que nos hace escapar de vez en cuando
              de la rutina de la ciudad.
            </p>
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
