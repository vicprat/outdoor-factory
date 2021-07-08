import React from 'react';
import { MainWrapper } from './styels';
import { Link } from 'gatsby';

const puntosVenta = [
  {
    id: 1,
    img: 'sector',
    name: 'Sector V',
    description: 'Somos un muro de escalada con ruta y boulder ',
    location: 'Blvd. Bernardo Quintana #159 Col. Loma Dorada',
    instagram: 'https://www.instagram.com/escalandosectorv/',
    facebook: 'https://www.facebook.com/EscalandoSectorV/',
    phone: '442 250 5386',
  },
  {
    id: 2,
    img: 'contra',
    name: 'Contra Gravedad',
    description: 'Somos un muro de escalada etc.',
    location: 'Blvd. Bernanrdo Quintana',
    instagram: '/',
    facebook: '/faceboock',
    phone: '44212345',
  },
  {
    id: 3,
    img: 'muro',
    name: 'El Muro',
    description: 'Somos un muro de escalada etc.',
    location: 'Blvd. Bernanrdo Quintana',
    instagram: '/',
    facebook: '/faceboock',
    phone: '44212345',
  },
  {
    id: 4,
    img: 'aventurarte',
    name: 'Aventurarte Café',
    description: 'Somos un muro de escalada etc.',
    location: 'Blvd. Bernanrdo Quintana',
    instagram: '/',
    facebook: '/faceboock',
    phone: '44212345',
  },
];

export function PuntosVentas() {
  return (
    <MainWrapper>
      {puntosVenta.map(puntoVenta => (
        <div className="container" key={puntoVenta.id}>
          <div className="image-container">
            <img
              src={require(`../../images/sales/${puntoVenta.img}.png`)}
              alt=""
            />
          </div>
          <div className="description-container">
            <div className="title">{puntoVenta.name}</div>
            <div className="description">{puntoVenta.description}</div>
            <div className="location">{puntoVenta.location}</div>
            <div className="contact">
              <h4>¡Contactanos!</h4>
              <Link to={puntoVenta.instagram}>
                <li>Instagram</li>
              </Link>
              <Link to={puntoVenta.facebook}>
                <li>Facebook</li>
              </Link>

              <li>Teléfono: {puntoVenta.phone}</li>
            </div>
          </div>
        </div>
      ))}
    </MainWrapper>
  );
}
