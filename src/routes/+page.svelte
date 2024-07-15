<script>
	/** @type {import('./$types').PageData} */
	export let data;
	// console.log(data.products);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
{#each data.products as product}
	<p>
		{product.title}
		{#if product.totalInventory === 0}
			<span>(Out of stock)</span>
		{/if}
	</p>
	{#if product.variants}
		<ul>
			{#each product.variants.edges.map(({ node }) => node) as variant}
				<li>{variant.title} ${variant.price.amount}</li>
			{/each}
		</ul>
	{/if}
{/each}
