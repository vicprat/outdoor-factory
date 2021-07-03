import React from 'react';
import { CasesContainer } from './styles';
import { StyledLink } from '../StyledLink';

const caseStudies = [
  {
    id: 1,
    subtitle: 'Puntos de venta',
    title: 'Descubre tus puntos más cercanos',
    img: 'nosotros',
    path: "/ventas"
  },
  {
    id: 2,
    subtitle: 'Todos los productos',
    title: '¡Checa el catálogo completo!',
    img: 'productos',
    path: "/all-products"
  },
  {
    id: 3,
    subtitle: 'Experiencias Outdoor',
    title: 'Atrevete a la aventura',
    img: 'experiencias',
    path: "experiencias",
  },
];

export function Cases() {
  return (
    <CasesContainer className="cases">
      <div className="container-fluid">
        <div className="row">
          {caseStudies.map(caseItem => (
            <StyledLink to={caseItem.path}>
            <div className="case" key={caseItem.id}>
              <div className="case-details">
                <span>{caseItem.subtitle}</span>
                <h2>{caseItem.title}</h2>
              </div>
              <div className="case-image">
                <img
                  src={require(`..../../images/cases/${caseItem.img}.png`)}
                  alt={caseItem.title}
                />
              </div>
            </div>
            </StyledLink>
          ))}
        </div>
      </div>
    </CasesContainer>
  );
}
