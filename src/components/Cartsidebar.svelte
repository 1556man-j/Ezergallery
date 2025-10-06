<script>
	import {
		isCartOpen,
		cartItems,
		removeFromCart,
		increaseQty,
		decreaseQty
	} from '$lib/stores/cartStore';
	import { fly } from 'svelte/transition';
	import { derived } from 'svelte/store';

	// Subtotal calculation
	const subtotal = derived(cartItems, ($items) =>
		$items.reduce((sum, item) => sum + item.price * item.qty, 0)
	);

	function toggleCart() {
		isCartOpen.update((o) => !o);
	}

	let showSummary = true;
</script>

<!-- Overlay -->
{#if $isCartOpen  && showSummary}
	<button aria-label="Close cart" class="fixed inset-0 z-40 bg-black/50" on:click={toggleCart}
	></button>
{/if}

<!-- Sidebar -->
{#if $isCartOpen  && showSummary}
	<aside
		transition:fly={{ x: 600, duration: 400 }}
		class="fixed top-0 right-0 z-50 flex h-full w-full flex-col bg-white text-black shadow-2xl sm:max-w-[530px]"
	>
		<!-- Header -->
		<div class="flex items-center justify-between border-b p-4 text-xl font-semibold text-black">
			<h2>Shopping Cart</h2>
			<button
				on:click={toggleCart}
				aria-label="Close"
				class="cursor-pointer p-2 text-2xl text-gray-400 transition hover:text-black"
			>
				✕
			</button>
		</div>

		<!-- Items -->
		<div class="flex-1 space-y-4 overflow-y-auto p-4">
			{#if $cartItems.length > 0}
				{#each $cartItems as item}
					<div class="flex w-full items-center justify-between gap-4 border-b pb-4">
						<!-- Product Image -->
						<img src={item.image} alt={item.title} class="h-28 w-20 rounded object-cover shadow" />

						<!-- Product Info -->
						<div class="flex h-28 flex-col justify-between pb-5">
							<p class="font-semibold">{item.title}</p>
							<!-- Qty controls -->
							<div class="flex items-center gap-2 border justify-between rounded-lg py-1 border-gray-300">
								<button
									on:click={() => decreaseQty(item.id)}
									class="flex h-8 w-8 items-center justify-center text-gray-500  text-[20px] font-bold  hover:text-black"
									>-</button
								>
								<span>{item.qty}</span>
								<button
									on:click={() => increaseQty(item.id)}
									class="flex h-8 w-8 items-center justify-center text-gray-500  text-[20px] font-bold   hover:text-black"
									>+</button
								>
							</div>
						</div>

						<div class="flex h-28 flex-1 flex-col items-end justify-between py-2 text-right">
							<p class="font-semibold">₦{item.price * item.qty}.00</p>
							<!-- Remove -->
							<!-- svelte-ignore a11y_consider_explicit_label -->
							<button
								on:click={() => removeFromCart(item.id)}
								class="text-red-500 hover:text-red-700"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4m-4 0a1 1 0 00-1 1v1h6V4a1 1 0 00-1-1m-4 0h4"
									/>
								</svg>
							</button>
						</div>
					</div>
				{/each}
			{:else}
				<p class="text-center text-gray-500">Your cart is empty</p>
			{/if}
		</div>

		<!-- Footer -->
		{#if $cartItems.length > 0}
			<div class="space-y-3 p-4 text-black">
				<div class="flex justify-between font-semibold">
					<span class="text-[16px] font-semibold uppercase">Subtotal</span>
					<span class="text-[18px] font-semibold">₦{$subtotal}.00</span>
				</div>
				<p class="-mt-5 text-[14px]">Shipping, taxes, and discounts calculated at checkout</p>
				<div class="flex gap-3">
					<a
						href="/cart"
						class="w-full border border-[#306b86] py-3 text-center font-medium text-black uppercase transition duration-300 hover:bg-black hover:text-white"
						on:click={() => (showSummary = false)}
					>
						View Cart
					</a>
					<a href="/checkout"
						class="w-full bg-black py-3 font-medium text-white uppercase transition duration-300 hover:bg-[#306b86] text-center"
						on:click={() => (showSummary = false)}
					>
						Checkout
					</a>
				</div>
			</div>
		{/if}
	</aside>
{/if}
