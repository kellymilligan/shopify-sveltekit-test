export const metaobjectsQuery = `#graphql
  {
    metaobjects(type:"page",first:100) {
      edges {
        node {
          handle
          type
          fields {
            key
            reference
            type
            value
          }
        }
      }
    }
  }
`;
