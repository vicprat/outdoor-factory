import styled from 'styled-components';

export const HeaderWrapper = styled.header`
         position: fixed;
         padding: 20px;
         width: 100%;
         height: 95px;
         z-index: 4;
         background: white;
         align-items: center;
         justify-content: center;
       `;

export const Container = styled.div`
  width: 100%;
  height: 100%;

  .row {
    display: grid;
    height: 100%;
    grid-template-columns: 1fr 1fr 2fr;
  }
  .v-center {
    align-items: center;
  }
  .space-between {
    justify-content: space-between;
  }
`;

export const Logo = styled.div`
  justify-content: end;
  a {
    font-size: 0.7rem;
    letter-spacing: 0.5rem;
    color: black;
    text-decoration: none;
    font-weight: 700;
    @media (min-width: 768px) {
      font-size: 1.3rem;
    }
  }
`;

export const NavToggle = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  margin-right: 16px;
  @media (min-width: 768px) {
    margin-right: 24px;
  }
`;

export const HamburgerMenu = styled.div`
  width: 25px;
  span {
    text-align: center;
    margin-bottom: 0.3rem;
    background: black;
    height: 2px;
    width: 100%;
    display: block;
  }
`;
