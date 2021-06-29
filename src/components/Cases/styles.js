import styled from 'styled-components';

export const CasesContainer = styled.section`
  .row {
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    @media (min-width: 700px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    .case {
      position: relative;
      background: black;
      cursor: pointer;
      &:hover {
        .case-image {
          opacity: 0.4;
        }
      }
      .case-details {
        width: 100%;
        height: 60vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 32px;
        box-sizing: border-box;
        z-index: 1;
        position: relative;
        span {
          margin-top: 170px;
          font-size: 1.2rem;
          opacity: 0.8;
          color: white;
          font-weight: 600;
          @media (min-width: 768px) {
            font-size: 1.4rem;
          }
          @media (min-width: 1000px) {
            font-size: 1.6rem;
            line-height: 2rem;
          }
        }
        h2 {
          font-size: 1rem;
          line-height: 1.4rem;
          width: 85%;
          margin-top: 16px;
          color: white;
          font-weight: 300;
          @media (min-width: 1000px) {
            font-size: 1.5rem;
            line-height: 2rem;
          }
        }
      }
      .case-image {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: absolute;
        opacity: 0.65;
        transition: 0.4s cubic-bezier(0.6, -0.05, 0.1, 0.99);
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
    }
  }
`;
