import styled from 'styled-components';

export const MainWrapper = styled.div`
         width: 100%;
         .info {
           display: grid;
           grid-template-columns: 1fr;
           gap: 5px;
           @media (min-width: 768px) {
             grid-template-columns: 1fr 1fr;
           }
           .title {
             text-align: center;
             padding: 20px 0;
             h1 {
               font-size: 2.5rem;
               letter-spacing: 0.65rem;
               font-weight: bold;
               @media (min-width: 768px) {
                 letter-spacing: 0.75rem;
                 font-size: 3rem;
               }
             }
             h2 {
               font-size: 1.2rem;
             }
             p {
               margin: 20px 0;
               font-weight: lighter;
             }
           }
           .description {
             top: 10%;
             font-size: 0.75rem;
             line-height: 2rem;
             @media (min-width: 768px) {
               font-size: 1.2rem;
               margin: auto;
             }
           }
         }
         .img-container {
           padding: 10% 0 0 0;
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
