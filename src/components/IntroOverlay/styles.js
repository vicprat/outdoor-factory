import styled from 'styled-components';

export const OverlayIntro = styled.div`
  .intro-overlay {
    display: grid;
    grid-template-columns: 1fr;

    .top {
      height: 50vh;
      position: absolute;
      display: grid;
      grid-template-columns: 1fr;
      width: 100%;
      z-index: 8;
      @media (min-width: 1000px) {
        grid-template-columns: 1fr 1fr 1fr;
      }
      .overlay-top {
        height: 50vh;
        width: 100%;
        background: black;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }
    .bottom {
      height: 50vh;
      position: absolute;
      display: grid;
      grid-template-columns: 1fr;
      bottom: 0%;
      width: 100%;
      z-index: 8;
      @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
      }
      @media (min-width: 1000px) {
        grid-template-columns: 1fr 1fr 1fr;
      }
      .overlay-bottom {
        height: 50vh;
        right: 0;
        width: 100%;
        background: black;
      }
    }
  }
`;
