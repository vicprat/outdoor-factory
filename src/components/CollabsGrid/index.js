import React from 'react';
import Image1 from '../../images/colaboradores/1.png';
import Image2 from '../../images/colaboradores/2.png';
import Image3 from '../../images/colaboradores/3.png';
import Image4 from '../../images/colaboradores/4.png';
import { Link } from 'gatsby';
import { Grid } from './styles';

export function CollabsGrid() {
  return (
    <Grid>
      <article style={{ backgroundImage: `url(${Image1})` }}>
        <Link
          aria-label="Florista del Mes"
          to="/all-products?c=Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2NzI1MTg0MzI0NQ%3D%3D"
          className="link primary"
        >
          <header className="major">
          <p>
              ¡Conoce el catálogo oficial!
            </p>
          </header>
        </Link>
      </article>
      <article style={{ backgroundImage: `url(${Image3})` }}>
        <Link aria-label="Xolotl" to="/all-products?c=Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2NzA1NDMxNzc0MQ%3D%3D" className="link primary">
          <header className="major">
            <p>
              ¡Conoce el catálogo oficial!
            </p>
          </header>
        </Link>
      </article>
      <article style={{ backgroundImage: `url(${Image4})` }}>
        <Link aria-label="OCSuculentas" to="/all-products?c=Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2NzIxNjM4ODI2OQ%3D%3D"className="link primary">
          <header className="major">
          <p>
              ¡Conoce el catálogo oficial!
            </p>
          </header>
        </Link>
      </article>
      <article style={{ backgroundImage: `url(${Image2})` }}>
        <Link aria-label="ChomiChomi" to="all-products?c=Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2NzA1NDIxOTQzNw%3D%3D"className="link primary">
          <header className="major">
          <p>
              ¡Conoce el catálogo oficial!
            </p>
          </header>
        </Link>
      </article>
    </Grid>
  );
}