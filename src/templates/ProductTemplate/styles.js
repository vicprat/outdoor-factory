import styled from 'styled-components';

export const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  top: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;
  h1 {
    padding: 10% 5%;
    font-size: 1.7rem;
    letter-spacing: 0.5rem;
    font-weight: bold;
    color: #575555;
  }
  p {
    font-size: 1rem;
    line-height: 2rem;
    padding: 5%;
    font-weight: lighter;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;

    > div:first-child {
      order: 2;
    }

    > div:last-child {
      order: 1;
    }
  }
`;

export const SelectWrapper = styled.div`
  color: #333;
  font-weight: lighter;
  margin-top: 5rem;
  > strong {
    display: block;
    margin-bottom: 8px;
  }
`;

export const Price = styled.div`
  margin: 40px 0;
  font-weight: bold;
  font-size: 30px;
`;
