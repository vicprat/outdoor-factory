import React from 'react';
import { Link } from 'gatsby';
import { NavigationContainer } from './styles';
import { Search } from '../Search';

export function Navigation() {
  return (
    <NavigationContainer>
      <div className="container">
        <div className="nav-columns">
          <div className="nav-column">
            <div className="nav-label">Menu</div>
            <ul className="nav-links">
              <li>
                <Search />
              </li>
              <li>
                <Link to="/" exact>
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/all-products" exact>
                  Tienda
                </Link>
              </li>
              <li>
                <Link to="/services" exact>
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/about-us" exact>
                  Servicios
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-column">
            <div className="nav-label">Contacto</div>
            <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">Email</li>
                <li>
                  <Link to="/contact" exact>
                    ¡Escribenos!
                  </Link>
                </li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">¡Siguenos!</li>
                <li>Instagram</li>
                <li>Facebook</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Atención a clientes</li>
                <li>+41 (0) 79 510 28 70</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </NavigationContainer>
  );
}
