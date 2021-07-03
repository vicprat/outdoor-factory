import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 4;
  padding: 10px 40px;
  background: white;
  

  .row {
    padding: 0 40px;
    align-items: center;
  justify-content: center;
  
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
  }
  .logo {
    a {
      font-size: 1.2rem;
      letter-spacing: 0.5rem;
      color: black;
      text-decoration: none;
      font-weight: 700;
    }
  }
  .nav-toggle {
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
      margin-right: 16px;
    @media (min-width: 768px){
      margin-right: 24px;
    }
    //@media (min-width: 1000px) {
    //width: 20px;
    //margin-right: 16px;
    //}

    .hamburger-menu {
      width: 25px;
      span {
        text-align: center;
        margin-bottom: 0.3rem;
        background: black;
        height: 2px;
        width: 100%;
        display: block;
      }
    }
    .hamburger-menu-close {
      position: absolute;
      display: none;

      svg {
        width: 48px;
        @media (min-width: 768px){
          width: 56px;
        }
  
      }
    }
  

       `;
