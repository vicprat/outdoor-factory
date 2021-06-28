import styled from 'styled-components';

export const HeaderWrapper = styled.header`

 padding: 40px;
  width: 100%;
  height: 128px;
  z-index: 4;
  @include media("<=phone") {
    height: 96px;
  }
       `;

export const Container = styled.div`
 width: 80%;
  height: 100%;
  .row {
    display: flex;
    height: 100%;
  }
  .v-center{
      align-items: center;
  }
  .space-between{
      justify-content: space-between;
  }
`;


export const Logo = styled.div`
a{
    font-size: 1rem;
    letter-spacing: 0.5rem;
    color: black;
    text-decoration: none;
    font-weight: 700;
    @media (min-width: 768px){
        font-size: 1.3rem;
    }
}`;

export const NavToggle = styled.div`
cursor: pointer;
position: relative;
display: flex;
justify-content: center;
align-items: center;
width: 20px;
margin-right: 16px;
@media (min-width: 768px){
    margin-right: 24px;
}`;

export const HamburgerMenu = styled.div`
width: 25px;
span{
    text-align: center;
    margin-bottom: 0.3rem;
    background: black;
    height: 2px;
    width: 100%;
    display: block;
}
`;


