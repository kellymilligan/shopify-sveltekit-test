import { shopifyClient } from '$lib/shopify';
import { productsQuery } from '$lib/queries/products';

/** @type {import('./$types').LayoutLoad} */
export async function load() {
	const productsRequest = await shopifyClient.request(productsQuery);

	if (productsRequest.errors) console.log(productsRequest.errors);

	return {
		products: productsRequest.data.products.edges.map(({ node }) => node)
	};
}
