import styled from 'styled-components';

export const Main = styled.div`
  height: 50vh;
  background-color: white;
  .row {
    flex-direction: column;
    justify-content: center;
    h2 {
      font-size: 1.2rem;
      margin-top: 72px;
      line-height: 2.2rem;
      font-weight: 700;
      z-index: 10;
      color: white;
      mix-blend-mode: difference;
      @media (min-width: 768px) {
        font-size: 2.4rem;
        line-height: 3rem;
      }
      @media (min-width: 1000px) {
        font-size: 2.5rem;
        line-height: 4.2rem;
      }
      .line {
        margin-bottom: 8px;
        height: 32px;
        position: relative;
        overflow: hidden;
        @media (min-width: 768px) {
          height: 48px;
        }
        @media (min-width: 1000px) {
          height: 56px;
        }
        span {
          position: absolute;
        }
      }
    }
    .btn-row {
      width: 256px;
      position: relative;
      z-index: 2;
      a {
        font-size: 1.1rem;
        color: black;
        text-decoration: none;
        display: flex;
        align-items: center;
        font-weight: 300;
        @media (min-width: 768px) {
          font-size: 1.3rem;
        }
        @media (min-width: 1000px) {
          font-size: 1.6rem;
        }
        svg {
          margin-left: 16px;
          border: 2px solid #000;
          padding: 4px;
          height: 16px;
          width: 16px;
          border-radius: 100px;
          transition: 0.4s ease-in-out;
          @media (min-width: 768px) {
            padding: 6px;
            width: 20px;
            height: 20px;
          }
          @media (min-width: 1000px) {
            padding: 12px;
            width: 24px;
            height: 24px;
          }
        }
        &:hover {
          svg {
            background: black;
            color: white;
          }
        }
      }
    }
  }
`;

export const Container = styled.div`
  width: 80%;
  height: 100%;
  .row {
    display: flex;
    height: 100%;
  }
  .v-center {
    align-items: center;
  }
  .space-between {
    justify-content: space-between;
  }
`;
