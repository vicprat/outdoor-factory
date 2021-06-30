import { Search } from '../Search';
import React from 'react';
import { Link } from 'gatsby';
//import { Nav, Navbar, Form} from 'react-bootstrap';
import { Cart } from '../Cart';
import {
  HeaderWrapper,
  Container,
  Logo,
  NavToggle,
  HamburgerMenu,
} from './styles';

export function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <div className="row v-center space-between">
          <NavToggle>
            <HamburgerMenu>
              <span></span>
              <span></span>
            </HamburgerMenu>
          </NavToggle>
          <Logo>
            <Link to="/">
              OUTDOOR <br></br>FACTORY
            </Link>
          </Logo>

          <Cart />
        </div>
      </Container>
    </HeaderWrapper>
  );
}
