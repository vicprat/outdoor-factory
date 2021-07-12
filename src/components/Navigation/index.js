import React from 'react';
import { Link } from 'gatsby';
import { NavigationContainer } from './styles';
import { Search } from '../Search';

export function Navigation() {
  return (
    <NavigationContainer>
      <div className="nav-container">
        <div className="title">
          <p>
            Envios gratis a toda la república en compra miníma de $1000.00 mxn
          </p>
        </div>
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
                <Link to="/about-us" exact>
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/experiencias" exact>
                  Experiencias
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-column">
            <div className="nav-label">Contacto</div>
            <div className="nav-infos">
              <ul className="nav-info">
                <p className="nav-info-label">E-mail</p>
                <li>
                  <Link to="/contact" exact>
                    ¡Escribenos!
                  </Link>
                </li>
              </ul>
              <ul className="nav-info">
                <p className="nav-info-label">¡Siguenos!</p>
                <li>
                  <Link to="https://www.instagram.com/outdoor_factory_of/?hl=es-la">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link to="https://www.facebook.com/Outdoor-Factory-106060428199885">
                    Facebook
                  </Link>
                </li>
              </ul>
              <ul className="nav-info">
                <p className="nav-info-label">Atención a clientes</p>
                <li>
                  <Link to="https://wa.me/524421716830">Whatssapp</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </NavigationContainer>
  );
}
