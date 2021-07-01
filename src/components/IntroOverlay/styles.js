import styled from 'styled-components';

export const OverlayIntro = styled.div`
        
// intro overlay
.intro-overlay {
  .top {
    height: 50vh;
    position: absolute;
    width: 100%;
    z-index: 8;
    .overlay-top {
      position: absolute;
      height: 100%;
      width: 100vw;
      background: black;
      bottom: 0;
      left: 0;
      right: 0;
       @media (min-width: 768px)  {
        width: 33.33%;
      }
      &:nth-child(2) {
       
        display: none;
         @media (min-width: 768px)  {
          left: 33.333%;
          display: flex;
        }
      }
      &:nth-child(3) {
        
        display: none;
         @media (min-width: 768px)  {
          left: 66.666%;
          display: flex;
        }
      }
    }
  }

  .bottom {
    height: 50vh;
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 8;
    .overlay-bottom {
      position: absolute;
      height: 100%;
      width: 100vw;
      background: black;
      bottom: 0;
    
      @media (min-width: 768px) {
        right: 66.666%;
        width:33.333vW;
      }
      &:nth-child(2) {
        top: 100%;
        
        @media (min-width: 768px) {
          right: 33.333%;
          width:33.333vW;
          top: 0;
        }
      }
      &:nth-child(3) {
        top: 200%;
        @media (min-width: 768px) {
          width:33.333vW;
          top: 0;
          right: 0;
         
        }
      }
    }
  }
}


       `;
