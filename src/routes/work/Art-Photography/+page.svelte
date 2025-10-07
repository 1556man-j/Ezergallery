<script>
	import Bloodlust from '$lib/assets/Blood lust.webp';

	const images = [
		{ src: Bloodlust, alt: 'Bloodlust'},
		{ src: '/assets/Arrival copy.webp', alt: 'arrival'},
		{ src: '/assets/Caught.webp', alt: 'caught'},
		{ src: '/assets/Colourful dreams.webp', alt: 'colouful'},
		{ src: '/assets/Do you miss me like I miss you.webp', alt: 'Do you miss me like I miss you'},
		{src: '/assets/ppjpg copy.webp', alt: 'ppjpg'},
		{src: '/assets/The Lioness Stands Still.webp', alt: 'The Lioness Stands Still'},
		{ src: '/assets/Fish Boy.webp', alt: 'fish boy'},
		{ src: '/assets/Kiishi.webp', alt: 'kiishi'},
		{ src: '/assets/KUWE.webp', alt: 'Kuwe'},
		{ src: '/assets/Misunderstanding.webp', alt: 'misunderstanding'},
		{ src: '/assets/Nameless beauty.webp', alt: 'nameless beauty'},
		{ src: '/assets/She who speaks with fire.webp', alt: 'She who speaks with fire'},
		{ src: '/assets/Pothead Attention copy.webp', alt: 'Pothead Attention'},
		{ src: '/assets/Tara 3.webp', alt: 'tara'},
		{ src: '/assets/Waiting Glitch.webp', alt: 'Waiting Glitch'},
    {src: '/assets/gold skin/Sun God copy.webp', alt:'Sun God'},
		{src: '/assets/gold skin/Sun God 2 copy.webp', alt: 'Sun God'},
		{ src: '/assets/Avarice.webp', alt: 'avarice'},
		{ src: '/assets/Cursed-Programming.webp', alt: 'Cursed-Programming'},
		{ src: '/assets/Disposal.webp', alt: 'disposal'},
		{ src: '/assets/Echoes-of-Origin.webp', alt: 'Echoes-of-Origin'},
		{src: '/assets/Embodied.webp', alt: 'embodied'},
		{src: '/assets/Gold-eyes.webp', alt: 'Gold eyes'},
		{ src: '/assets/Holding-It-Together.webp', alt: 'holding-It-TOogether'},

	];
</script>

<main class="mx-auto flex min-h-screen flex-col gap-y-20 px-5 py-20 lg:px-20 pb-40">
	<h2 class="text-center text-[45px] capitalize">Art Photography</h2>

	<div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
		{#each images as image}
			<div class="h-[500px] overflow-hidden lg:h-[400px] 2xl:h-[600px]">
				<img
					src={image.src}
					alt={image.alt}
					class="h-full w-full transform object-cover transition duration-500 ease-in-out hover:scale-[1.02] hover:brightness-75"
				/>
			</div>
		{/each}
	</div>
</main>
