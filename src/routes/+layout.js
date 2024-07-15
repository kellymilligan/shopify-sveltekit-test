import {
	PUBLIC_SHOPIFY_STORE_DOMAIN,
	PUBLIC_SHOPIFY_API_VERSION,
	PUBLIC_SHOPIFY_ACCESS_TOKEN
} from '$env/static/public';
import { createStorefrontApiClient } from '@shopify/storefront-api-client';
import { productsQuery } from '$lib/queries/products';
import { metaobjectsQuery } from '$lib/queries/metaobjects';

/** @type {import('./$types').LayoutLoad} */
export async function load() {
	const shopifyClient = createStorefrontApiClient({
		storeDomain: PUBLIC_SHOPIFY_STORE_DOMAIN,
		apiVersion: PUBLIC_SHOPIFY_API_VERSION,
		publicAccessToken: PUBLIC_SHOPIFY_ACCESS_TOKEN
	});

	const metaobjectsRequest = await shopifyClient.request(metaobjectsQuery);

	if (metaobjectsRequest.errors) console.log(metaobjectsRequest.errors);

	const productsRequest = await shopifyClient.request(productsQuery);

	if (productsRequest.errors) console.log(productsRequest.errors);

	return {
		metaobjects: metaobjectsRequest.data.metaobjects.edges.map(({ node }) => node),
		products: productsRequest.data.products.edges.map(({ node }) => node)
	};
}
