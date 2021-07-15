import styled from 'styled-components';

export const MainWrapper = styled.div`
  margin-top: 100px;
  justify-content: center;
  overflow: hidden;
  .container {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr;
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    .image-container {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        object-fit: contain;
      }
    }
    .description-container {
      margin: auto;
      text-align: center;
      .title {
        font-size: 1.7rem;
        font-weight: 700;
        letter-spacing: 0.3rem;
        padding: 5%;
      }
      .description {
        padding: 5%;
        font-size: 1rem;
        line-height: 1.5rem;

        @media (min-width: 768px) {
          font-size: 1.3rem;
        }
      }
      .location {
        padding: 5%;
        font-weight: lighter;
        font-size: 0.75rem;
        p {
          color: black;
        }
        @media (min-width: 768px) {
          font-size: 1rem;
        }
      }
      .contact {
        li {
          cursor: pointer;
          padding: 5%;
          color: black;
          list-style: none;
          text-decoration: none;
        }
      }
    }
  }
`;
