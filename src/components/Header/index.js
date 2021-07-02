import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { Cart } from '../Cart';
import { HeaderWrapper } from './styles';
import  UpArrow from '../../images/up-arrow-circle.svg';
import { openMenu, closeMenu } from "../../animations/menuAnimations";


export function Header() {
  const [menuState, setMenuState] = useState({ menuOpened: false });
  useEffect(() => {
    
   
    if (menuState.menuOpened === true) {
      openMenu();
    } else if (menuState.menuOpened === false) {
      closeMenu();
    }
  });
 
  return (
    <HeaderWrapper className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="nav-toggle">
            <div
              onClick={() => setMenuState({ menuOpened: true })}
              className="hamburger-menu"
            >
              <span>
                
              </span>
              <span>
                
              </span>
            </div>
            <div
              className="hamburger-menu-close"
              onClick={() => setMenuState({ menuOpened: false })}
            >
             <img src={UpArrow} alt="" />
            </div>
          </div>
          <div className="logo">
            <Link to="/" exact>
              OUTDOOR FACTORY
            </Link>
          </div>

          <Cart />
        </div>
      </div>
    </HeaderWrapper>
  );
}
