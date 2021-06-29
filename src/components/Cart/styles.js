import styled from 'styled-components';
import { StyledLink } from '../StyledLink';

export const CartWrapper = styled(StyledLink).attrs(() => ({
         to: '/cart',
       }))`
         display: flex;
         color: black;
         text-decoration: none;
         padding-left: 16px;
         transition: 0.4s ease-in-out;

         > svg {
           margin: auto 0;
         }

         > div:last-child {
           padding-left: 8px;
           margin: auto 0;
         }

         &:hover {
           color: black;
           opacity: 0.5;
           
         }
       `;
