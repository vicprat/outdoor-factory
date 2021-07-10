import styled from 'styled-components';

export const MainWrapper = styled.div`
  margin-top: 150px;
  .container {
    display: grid;
    padding: 20px;
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
      padding: 20px;
      margin: auto;
      text-align: center;
      .title {
        font-size: 2rem;
        font-weight: 700;
        letter-spacing: 0.3rem;
      }
      .description {
        margin: 20px 0;
        font-size: 1rem;

        @media (min-width: 768px) {
          font-size: 1.3rem;
        }
      }
      .location {
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
          margin: 10px 0;
          color: black;
          list-style: none;
          text-decoration: none;
        }
      }
    }
  }
`;
