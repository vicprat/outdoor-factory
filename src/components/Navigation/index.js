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
                <Link to="/nosotros" exact>
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
                <li className="nav-info-label">Email</li>
                <li>
                  <Link to="/contact" exact>
                    ¡Escribenos!
                  </Link>
                </li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">¡Siguenos!</li>
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
                <li className="nav-info-label">Atención a clientes</li>
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
