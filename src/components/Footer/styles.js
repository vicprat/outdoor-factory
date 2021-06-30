import styled from 'styled-components';

export const FooterWrapper = styled.div`
  margin: 5% 0 0 0;
  bottom: 0;
  width: 100%;
  background-color: transparent;
  p {
    font-weight: 400;
    font-size: 1.2rem;
    padding: 1rem;
    text-align: center;
  }
  h5 {
    text-decoration: none;
    color: #7c7c7c;
    &:hover {
      color: #23d997;
      text-decoration: none;
    }
  }
  h6 {
    padding: 1rem 0;
    font-size: 2rem;
    font-weight: 300;
    text-align: center;
  }
`;
export const Title = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: #202020;
  font-weight: bold;
  border-bottom: solid 2px #ccc;
  padding: 1rem;
`;
export const Icon = styled.div`
  text-align: center;
  width: 25px;
  cursor: pointer;
  &:hover {
    color: #0e73ad;
  }
`;

export const Contact = styled.div`
  display: flex;
  justify-content: justified;
  align-items: center;
`;
