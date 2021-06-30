import React from 'react';
import Image1 from '../../images/colaboradores/1.png';
import Image2 from '../../images/colaboradores/2.png';
import Image3 from '../../images/colaboradores/3.png';
import Image4 from '../../images/colaboradores/4.png';
import Image5 from '../../images/colaboradores/5.png';
import Image6 from '../../images/colaboradores/6.png';
import { Link } from 'gatsby';
import { Grid } from './styles';

export function CollabsGrid() {
  return (
    <Grid>
      <article style={{ backgroundImage: `url(${Image1})` }}>
        <Link aria-label="Ultra Climbing" to="/ultra" className="link primary">
          <header className="major">
            <p>¡Conoce el catálogo oficial!</p>
          </header>
        </Link>
      </article>
      <article style={{ backgroundImage: `url(${Image3})` }}>
        <Link aria-label="Kontiki" to="/kontiki" className="link primary">
          <header className="major">
            <p>¡Conoce el catálogo oficial!</p>
          </header>
        </Link>
      </article>
      <article style={{ backgroundImage: `url(${Image6})` }}>
        <Link aria-label="Roke" to="/roke" className="link primary">
          <header className="major">
            <p>¡Conoce el catálogo oficial!</p>
          </header>
        </Link>
      </article>
      <article style={{ backgroundImage: `url(${Image4})` }}>
        <Link aria-label="Selva" to="/selva-negra" className="link primary">
          <header className="major">
            <p>¡Conoce el catálogo oficial!</p>
          </header>
        </Link>
      </article>
      <article style={{ backgroundImage: `url(${Image2})` }}>
        <Link aria-label="Atman" to="atman" className="link primary">
          <header className="major">
            <p>¡Conoce el catálogo oficial!</p>
          </header>
        </Link>
      </article>
      <article style={{ backgroundImage: `url(${Image5})` }}>
        <Link aria-label="Monkey" to="monkey-hands" className="link primary">
          <header className="major">
            <p>¡Conoce el catálogo oficial!</p>
          </header>
        </Link>
      </article>
    </Grid>
  );
}
