import styled from 'styled-components';

export const MainWrapper = styled.div`
  width: 100%;
  img {
    width: 100%;
    padding: 20px 0;
    object-fit: contain;
    transition: 0.3s ease-in-out;
    &:hover {
      filter: brightness(0.75);
    }
  }
`;
