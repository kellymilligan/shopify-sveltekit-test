/**
 * Returns the GraphQL query string for retrieving a single metaobject by handle.
 *
 * @param {string} handle - The handle of the metaobject.
 * @returns {string} The GraphQL query string.
 */
export const metaobjectQuery = (handle) => `#graphql
  {
    metaobject(handle: {type:"page", handle:"${handle}"}) {
      fields {
        key
        reference
        type
        value
      }
    }
  }
`;

// /**
//  * Returns the GraphQL query string for retrieving multiple metaobjects of a specific type.
//  *
//  * @returns {string} The GraphQL query string.
//  */
// export const metaobjectsQuery = `#graphql
//   {
//     metaobjects(type:"page",first:100) {
//       edges {
//         node {
//           handle
//           type
//           fields {
//             key
//             reference
//             type
//             value
//           }
//         }
//       }
//     }
//   }
// `;
