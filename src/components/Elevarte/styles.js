import styled from 'styled-components';

export const MainWrapper = styled.div`
  width: 100%;
  .img-container {
    padding: 10% 0;
    @media (min-width: 768px) {
      padding: 3% 0;
    }
    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }
  img {
    width: 100%;
    padding: 20px 0;
    object-fit: contain;
    transition: 0.3s ease-in-out;
  }
`;
