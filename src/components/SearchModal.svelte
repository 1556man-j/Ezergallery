<script>
	import { isSearchOpen } from '$lib/stores/searchStore';
	import { products } from '$lib/stores/products'; // writable store
	import { fade, fly } from 'svelte/transition';

	let query = '';

	// subscribe to products store
	let allProducts = [];
	$: filtered = allProducts.filter((p) => p.title.toLowerCase().includes(query.toLowerCase()));

	$: {
		$products; // reactive dependency
		allProducts = $products; // get actual array from store
	}
</script>

{#if $isSearchOpen}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div
		class="fixed inset-0 z-50 flex items-start justify-center bg-black/50 p-10"
		transition:fade
		role="dialog"
		aria-modal="true"
		tabindex="-1"
		key
		on:click={() => isSearchOpen.set(false)}
	>
		<!-- Modal box -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			class="relative w-full max-w-xl rounded-2xl bg-white p-6 pt-16 shadow-xl"
			transition:fly={{ y: -20, duration: 300 }}
			on:click|stopPropagation
		>
			<!-- Close button -->
			<button
				class="absolute top-2 right-4 cursor-pointer p-3 text-lg font-bold text-gray-500 transition duration-500 hover:text-black"
				on:click={() => isSearchOpen.set(false)}
				aria-label="Close search"
			>
				✕
			</button>

			<!-- Input -->
			<input
				type="text"
				placeholder="Search products..."
				bind:value={query}
				class="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg text-black focus:ring-2 focus:ring-[#306b86] focus:outline-none"
			/>

			<!-- Results -->
			<div class="mt-4 max-h-64 space-y-3 overflow-y-auto">
				{#if query.trim() === ''}
					<p class="text-gray-500">Start typing to search...</p>
				{:else if filtered.length === 0}
					<p class="text-gray-500">No results found.</p>
				{:else}
					{#each filtered as product}
						<a
							href={`/store/${product.slug}`}
							class="block rounded-lg border border-gray-200 p-3 transition hover:bg-[#f4f9fc]"
							on:click={() => isSearchOpen.set(false)}
						>
							<p class="font-semibold text-black">{product.title}</p>
							<p class="text-sm text-gray-600">₦{product.price}</p>
						</a>
					{/each}
				{/if}
			</div>
		</div>
	</div>
{/if}
