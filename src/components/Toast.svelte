<script>
	import { fly } from 'svelte/transition';
	import { toast } from '$lib/stores/toastStore.js';

	let data = null;

	// Subscribe to the toast store
	toast.subscribe((msg) => {
		data = msg;
		if (msg) {
			setTimeout(() => toast.set(null), 2500); 
		}
	});
</script>

{#if data}
	<div
		class="fixed bottom-1 left-1/2 z-50 flex -translate-x-1/2
           -translate-y-1/2 items-center gap-4 rounded-xl px-6 py-4 shadow-2xl
           {data.type === 'success' ? 'bg-[#000] text-white' : 'bg-red-600 text-white'}"
		transition:fly={{ y: 40, duration: 250 }}
	>
		{#if data.image}
			<img src={data.image} alt={data.name} class="h-14 w-14 rounded-lg object-cover shadow" />
		{/if}

		<div class="flex flex-col">
			<span class="text-base font-semibold">{data.name}</span>
			<span class="text-sm opacity-90">{data.message}</span>
		</div>
	</div>
{/if}

<style>
	/* A little bounce for nicer effect */
	@keyframes bounce-in {
		0% {
			transform: translateY(100%);
			opacity: 0;
		}
		60% {
			transform: translateY(-10%);
			opacity: 1;
		}
		80% {
			transform: translateY(5%);
		}
		100% {
			transform: translateY(0);
		}
	}
	.animate-bounce-in {
		animation: bounce-in 0.5s ease forwards;
	}
</style>
