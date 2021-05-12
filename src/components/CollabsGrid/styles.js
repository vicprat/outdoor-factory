import styled from 'styled-components';

export const Grid = styled.div`
         display: grid;
         grid-template-columns: repeat(1, 1fr);
         padding: 2rem 0;
         gap: 1rem;
         width: 100%;
         @media (min-width: 768px) {
           grid-template-columns: repeat(2, 1fr);
         }
         article {
           position: relative;
           background-position: center; /* Center the image */
           background-repeat: no-repeat; /* Do not repeat the image */
           background-size: cover;
           height: 60vh;
           min-height: 0;
           max-height: none;
           .major {
             display: block;
             color: white;
             flex-grow: 1;
             justify-content: center;
             align-items: center;
             position: absolute;
             padding: 85% 25%;
             text-decoration: none;
             text-align: center;
             h4 {
             }
             p {
               font-size: 1.2rem;
               padding: auto;
               font-weight: lighter;
             }
             @media (min-width: 400px) {
                  p {
                    padding-top: 3rem;
                  font-size: 1.5rem;
                }
             }
           }
         }
       `;