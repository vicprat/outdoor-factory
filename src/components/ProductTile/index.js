import React from 'react';
import { ProductTileWrapper, Title, Description, Price } from './styles';
import Img from 'gatsby-image';
import { StyledLink } from '../StyledLink';

export function ProductTile({
  title,
  imageFluid,
  description,
  minPrice,
  handle,
}) {
  return (
    <ProductTileWrapper>
       <StyledLink to={`/products/${handle}`}><Img fluid={imageFluid} /></StyledLink>
      
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Price>Desde ${parseFloat(minPrice)} mxn</Price>
     
    </ProductTileWrapper>
  );
}
