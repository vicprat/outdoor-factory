import styled from 'styled-components';

export const About = styled.div`
  display: grid;
  padding: 3rem 1rem;
  align-items: center;
  justify-content: center;
  text-align: center;
  grid-template-columns: 1fr;
  @media (min-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export const Description = styled.div`
  flex: 1;
  padding: 0 0.5rem;
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 0.75rem;
    margin: 20px 0;
  }
  h6 {
    font-size: 1.5rem;
  }
  p {
    margin: 2rem 0;
    text-align: start;
  }
  @media (min-width: 400px) {
    h2 {
      font-size: 2rem;
    }
    h6 {
      font-size: 2rem;
    }
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    object-fit: cover;
    width: 50%;
  }
`;
export const Hide = styled.div`
  overflow: hidden;
  padding: 0.5rem;
`;
