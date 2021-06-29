import React from 'react';
import RightArrow from '../../images/arrow-right.svg';
import { Main, Container } from './styles';

export function Banner() {
  return (
    <Main>
      <Container>
        <div className="row">
          <h2>
            <div className="line">
              <span>Amamos crear experiencias</span>
            </div>
            <div className="line">
              <span>en la montaña.</span>
            </div>
          </h2>
          <div className="btn-row">
            <a href="about-us">
              ¡Conoce más! <img src={RightArrow} alt="Right Arrow" />{' '}
            </a>
          </div>
        </div>
      </Container>
    </Main>
  );
}
