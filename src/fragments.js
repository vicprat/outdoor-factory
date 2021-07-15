import { graphql } from 'gatsby';

export const productFields = graphql`
  fragment ShopifyProductFields on ShopifyProduct {
    shopifyId
    title
    description
    images {
      id
      localFile {
        childImageSharp {
          fluid(maxWidth: 2500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;
