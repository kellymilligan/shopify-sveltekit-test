import {
	PUBLIC_SHOPIFY_STORE_DOMAIN,
	PUBLIC_SHOPIFY_API_VERSION,
	PUBLIC_SHOPIFY_ACCESS_TOKEN
} from '$env/static/public';
import { createStorefrontApiClient } from '@shopify/storefront-api-client';

export const shopifyClient = createStorefrontApiClient({
	storeDomain: PUBLIC_SHOPIFY_STORE_DOMAIN,
	apiVersion: PUBLIC_SHOPIFY_API_VERSION,
	publicAccessToken: PUBLIC_SHOPIFY_ACCESS_TOKEN
});
