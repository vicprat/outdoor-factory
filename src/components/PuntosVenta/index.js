import React from 'react';
import { MainWrapper } from './styels';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import ProgressiveImage from 'react-progressive-image';

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const puntosVenta = [
  {
    id: 1,
    img: 'sector',
    name: 'Sector V',
    description:
      'Somos una sala de escalada que ofrece entrenamientos y muchos servicios más como:  salidas a la roca, entrenamientos personalizados, clases y cursos vacacionales de escalada para todas las edades.',
    location: 'Blvd. Bernardo Quintana #159 Col. Loma Dorada',
    instagram: 'https://www.instagram.com/escalandosectorv/',
    facebook: 'https://www.facebook.com/EscalandoSectorV/',
    phone: '442 253 5086',
    googlemaps: 'https://goo.gl/maps/t1BwQtmYJeHMoG7u8',
  },
  {
    id: 2,
    img: 'contra',
    name: 'Contra Gravedad',
    description:
      'Contra Gravedad es una sala de boulder para entrenamiento y aprendizaje de la Escalada Deportiva. Cuenta con los medios necesarios para tu entrenamiento personalizado, clases de danza aérea y más. ¡No te lo pierdas! La banda de Contra Gravedad es increíble. ',
    location:
      'Carretera Libre Guanajuato - Silao km 6.5 col. Marfil C.P. 36254',
    instagram: 'https://www.instagram.com/contragravedad/?hl=es-la',
    facebook: 'https://www.facebook.com/contragravedad',
    phone: '473 103 5718',
    googlemaps: 'https://g.page/contragravedad?share',
  },
  {
    id: 3,
    img: 'muro',
    name: 'El Muro',
    description:
      'Centro de escalada desde el 2009. Conocido como la cuna de los escaladores más fuertes y experimentados pues la mayoría ha sido constante usuario desde sus inicios. En él hay una sala de boulder con múltiples bloques y dificultades, así como un espacio para Ruta para poder entrenar nuestra resistencia.',
    location: 'Ferrocarrileros 50, Peñuelas',
    instagram: ':https://www.instagram.com/elmuro.qro/?hl=es-la',
    facebook: ' https://www.facebook.com/elmuro.qro',
    phone: '442 466 6068',
    googlemaps: 'https://g.page/el-muro-qro?share',
  },
  {
    id: 4,
    img: 'aventurarte',
    name: 'Aventurarte Café',
    description:
      'Si andas de paso por Guadalcazar conociendo sus fantásticos paisajes, ya sea haciendo senderismo, slack, escalada, o simplemente pasando un buen rato con familia y amigos no puedes perderte de visitar Aventurarte, el lugar perfecto para cualquier aficionado de la naturaleza; además de encontrar productos a la venta de Outdoor Factory para sus salidas de campo seguramente probar las pizzas y platillos de Aventurarte será un broche perfecto para tu visita a Guadalcázar.',
    location: ' Privada de Santa Rosalía #4, Guadalcazar, San Luis Potosí',
    instagram: 'https://www.instagram.com/aventurartecafe/?hl=es-la',
    facebook: ' https://www.facebook.com/Aventurarte-770980026294139',
    phone: '444 320 8798',
    googlemaps: 'https://g.page/Aventurartecafe?share',
  },
];

export function PuntosVentas() {
  return (
    <MainWrapper>
      {puntosVenta.map(puntoVenta => (
        <div className="container" key={puntoVenta.id}>
          <div className="image-container">
            <ProgressiveImage
              src={require(`../../images/sales/${puntoVenta.img}.png`)}
            >
              {src => (
                <motion.img
                  src={src}
                  alt={puntoVenta.name}
                  whileHover={{ scale: 1.005 }}
                  transition={transition}
                />
              )}
            </ProgressiveImage>
          </div>
          <div className="description-container">
            <div className="title">{puntoVenta.name}</div>
            <div className="description">{puntoVenta.description}</div>

            <div className="contact">
              <h4>Contacto</h4>
              <div className="location">
                <Link to={puntoVenta.googlemaps}>
                  <p>{puntoVenta.location}</p>
                </Link>
              </div>
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
