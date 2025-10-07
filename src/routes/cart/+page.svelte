<script>
	import { cartItems, increaseQty, decreaseQty, removeFromCart } from '$lib/stores/cartStore';
	import { derived } from 'svelte/store';

	// Subtotal
	const subtotal = derived(cartItems, ($items) =>
		$items.reduce((sum, item) => sum + item.price * item.qty, 0)
	);

	// derive the cart count from cartItems
	const cartCount = derived(cartItems, ($items) => $items.reduce((sum, item) => sum + item.qty, 0));
</script>

<main class="mx-auto flex min-h-screen max-w-[1400px] flex-col gap-y-10 px-5 py-20 lg:px-20">
	<section>
		<h1 class="mx-auto text-center text-[35px] font-normal capitalize">
			SHOPPING CART
			{#if $cartCount > 0}
				<span> ({$cartCount} { $cartCount === 1 ? 'item' : 'items' })</span>
			{/if}
		</h1>
	</section>
	<div class="flex flex-col justify-between gap-20 lg:flex-row">
		<!-- LEFT: Cart Items -->
		<div class="l flex w-full justify-between">
			{#if $cartItems.length > 0}
				<div class="flex w-full flex-col justify-between gap-16">
					{#each $cartItems as item}
						<div class="flex items-center justify-between gap-4 pb-4">
							<!-- Product Image -->
							<div class="col-span-1 flex items-center gap-3 lg:gap-10">
								<img src={item.image} alt={item.title} class="md:h-24 w-12 h-20 md:w-24 rounded object-cover" />

								<div class="col-span-1">
									<p class="font-semibold">{item.title}</p>
									<!-- Quantity Controls -->
									<div class="col-span-1 mt-5 flex items-center gap-0 md:gap-3">
										<div class="flex items-center gap-2 md:gap-5 border border-black py-1">
											<button
												on:click={() => decreaseQty(item.id)}
												class="flex h-8 w-8 items-center justify-center hover:bg-black">-</button
											>
											<span>{item.qty}</span>
											<button
												on:click={() => increaseQty(item.id)}
												class="flex h-8 w-8 items-center justify-center hover:bg-black">+</button
											>
										</div>
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
							</div>

							<!-- Product Name -->

							<p class="text-sm text-gray-500 hidden md:block">₦{Number(item.price).toLocaleString()}.00 each</p>

							<!-- Total & Remove -->
							<div class="col-span-1 flex items-center justify-between">
								<p class="font-semibold">₦{(item.price * item.qty).toLocaleString()}.00</p>
							</div>
						</div>
					{/each}
				</div>
			{:else}
				<p class="text-gray-500">Your cart is empty</p>
			{/if}
		</div>

		<!-- RIGHT: Subtotal -->
		<div class="flex h-fit w-full flex-col space-y-4 rounded bg-black p-10 shadow-md">
			<h2 class="text-xl font-semibold">Order Summary</h2>

			<div class="mt-5 flex justify-between text-lg font-medium">
				<span class="text-[18px] font-bold uppercase">Subtotal</span>
				<span>₦{($subtotal).toLocaleString()}.00</span>
			</div>
			<p class="text-sm text-gray-500">Shipping, taxes, and discounts calculated at checkout.</p>

			<a
				href="/checkout"
				class="block w-full rounded bg-[#306b86] py-3 text-center font-medium text-white uppercase transition duration-500 hover:bg-[#0c0c0c]"
			>
				Checkout
			</a>
			<p class="mx-auto text-gray-500 capitalize transition duration-300 hover:text-white">
				<a href="/store">continue Shopping</a>
			</p>
		</div>
	</div>
</main>
