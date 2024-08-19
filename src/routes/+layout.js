import { shopifyClient } from '$lib/shopify';
import { productsQuery } from '$lib/queries/products';
import { metaobjectQuery } from '$lib/queries/metaobjects';

/** @type {import('./$types').LayoutLoad} */
export async function load({ route }) {
	console.log(route.id);

	/**
	 * Concept:
	 * ---
	 * Page content stored on shopify as metaobjects, with a metaobject definition
	 * for each individual page. Using a map of route paths to metaobject types, the
	 * appropriate metaobject can be queried and used to populate the page content.
	 *
	 * Possible to dynamically handle routing using [handle] as a route directory.
	 */
	const metaobjectTypeByRoute = {
		'/': 'page_home',
		'/about': 'page_about'
	};

	console.log(metaobjectTypeByRoute[route.id]);

	// const metaobjectRequest = await shopifyClient.request(
	// 	metaobjectQuery(metaobjectTypeByRoute[route.id])
	// );
	// if (metaobjectRequest.errors) console.log(metaobjectRequest.errors);
	// else console.log(metaobjectRequest.data.metaobject);

	const productsRequest = await shopifyClient.request(productsQuery);
	if (productsRequest.errors) console.log(productsRequest.errors);

	return {
		// content: [
		// 	...metaobjectRequest.data.metaobject.fields.reduce((acc, { key, value }) => {
		// 		acc[key] = value;
		// 		return acc;
		// 	}, {})
		// ],
		products: productsRequest.data.products.edges.map(({ node }) => node)
	};
}
