export const productsQuery = `#graphql
  {
    products(first:100) {
      edges {
        node {
          id
          handle
          description
          title
          totalInventory
          productType
          variants(first: 10) {
            edges {
              node {
                id
                title
                quantityAvailable
                price {
                  amount
                  # currencyCode
                }
              }
            }
          }
          priceRange {
            maxVariantPrice {
              amount
              # currencyCode
            }
            minVariantPrice {
              amount
              # currencyCode
            }
          }
          images(first: 1) {
            edges {
              node {
                src
                altText
              }
            }
          }
        }
      }
    }
  }
`;
