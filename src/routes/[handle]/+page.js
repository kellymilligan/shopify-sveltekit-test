import { shopifyClient } from '$lib/shopify';
import { metaobjectQuery } from '$lib/queries/metaobjects';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	// const metaobjectsRequest = await shopifyClient.request(metaobjectsQuery);
	// if (metaobjectsRequest.errors) console.log(metaobjectsRequest.errors);
	// else console.log(metaobjectsRequest.data.metaobjects.edges.map(({ node }) => node));

	const metaobjectRequest = await shopifyClient.request(metaobjectQuery(`${params.handle}`));
	if (metaobjectRequest.errors) console.log(metaobjectRequest.errors);
	else console.log(metaobjectRequest.data.metaobject);

	if (metaobjectRequest.data.metaobject) {
		return {
			handle: params.handle,
			...metaobjectRequest.data.metaobject.fields.reduce((acc, { key, value }) => {
				acc[key] = value;
				return acc;
			}, {})
		};
	}

	error(404, 'Not found');
}
