import styled from 'styled-components';

export const MainWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .container {
    position: relative;
    .center {
      justify-content: center;
    }
    .row {
      height: 70vh;
      align-items: center;
      .image-container {
        position: relative;

        .thumbnail {
          overflow: hidden;
          position: relative;
          .frame {
            img {
              width: 100%;
            }
          }
        }
        .information {
          text-align: center;
          position: absolute;
          width: 100%;

          margin-top: 0;
          text-transform: uppercase;
          .title {
            font-weight: 700;
            font-size: 1.5rem;
          }
          .location {
            span {
              font-size: 1rem;
              margin: 10px auto;
            }
          }
        }
      }
    }
  }
`;
