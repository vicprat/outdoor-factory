import React from 'react';
import { CasesContainer } from './styles';

const caseStudies = [
  {
    id: 1,
    subtitle: 'Puntos de venta',
    title: 'A custom formula for your skin’s unique needs',
    img: 'atman',
  },
  {
    id: 2,
    subtitle: 'Todos los productos',
    title: 'Open space floor plans for you next venture',
    img: 'kontiki',
  },
  {
    id: 3,
    subtitle: 'Experiencias Outdoor Factory',
    title: 'For your best look ever',
    img: 'selva',
  },
];

export function Cases() {
  return (
    <CasesContainer>
      <div className="container-fluid">
        <div className="row">
          {caseStudies.map(caseItem => (
            <div className="case" key={caseItem.id}>
              <div className="case-details">
                <span>{caseItem.subtitle}</span>
                <h2>{caseItem.title}</h2>
              </div>
              <div className="case-image">
                <img
                  src={require(`..../../images/colaboradores/${caseItem.img}.png`)}
                  alt={caseItem.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </CasesContainer>
  );
}
