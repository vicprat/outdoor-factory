import styled from 'styled-components';

export const About = styled.div`
  display: grid;
  min-height: 90vh;
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
           font-weight: lighter;
         }
         h6 {
           font-size: 1.5rem;
         }
         @media (min-width: 400px) {
           h2 {
             font-size: 2rem;
             font-weight: lighter;
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
