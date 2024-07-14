import {
	PUBLIC_SHOPIFY_STORE_DOMAIN,
	PUBLIC_SHOPIFY_API_VERSION,
	PUBLIC_SHOPIFY_ACCESS_TOKEN
} from '$env/static/public';
import { createStorefrontApiClient } from '@shopify/storefront-api-client';

export async function load() {
	const client = createStorefrontApiClient({
		storeDomain: PUBLIC_SHOPIFY_STORE_DOMAIN,
		apiVersion: PUBLIC_SHOPIFY_API_VERSION,
		publicAccessToken: PUBLIC_SHOPIFY_ACCESS_TOKEN
	});

	const productsQuery = `#graphql
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
            variants(first: 5) {
              edges {
                node {
                  id
                  title
                  quantityAvailable
                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
            priceRange {
              maxVariantPrice {
                amount
                currencyCode
              }
              minVariantPrice {
                amount
                currencyCode
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

	const { data, errors } = await client.request(productsQuery);

	if (errors) console.log(errors);

	return {
		products: data.products.edges.map(({ node }) => node)
	};
}
