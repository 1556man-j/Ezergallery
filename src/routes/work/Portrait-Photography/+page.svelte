<script>
	import Bloodlust from '$lib/assets/Blood lust.webp';

	const images = [
		{ src: '/assets/wande/Image 1.webp', alt: 'wande' },
		{ src: '/assets/wande/Image 2.webp', alt: 'wande' },
		{ src: '/assets/wande/Image 4.webp', alt: 'wande' },
		{ src: '/assets/wande/Image 5.webp', alt: 'wande' },
		{ src: '/assets/wande/Image 6.webp', alt: 'wande' },
		{ src: '/assets/wande/Image 7.webp', alt: 'wande' },
		{ src: '/assets/wande/Image 8.webp', alt: 'wande' },
		{ src: '/assets/wande/Image 9.webp', alt: 'wande' },
		{ src: '/assets/wande/Image 10.webp', alt: 'wande' },
		{ src: '/assets/wande/Image 12.webp', alt: 'wande' },
		{ src: '/assets/wande/Image 13.webp', alt: 'wande' },
		{ src: '/assets/wande/Image 14.webp', alt: 'wande' },
		{ src: '/assets/wande/Image 15.webp', alt: 'wande' },
		{ src: '/assets/wande/Image 16.webp', alt: 'wande' },
		{ src: '/assets/lisa/Image 1.webp', alt: 'lisa' },
		{ src: '/assets/lisa/Image 2.webp', alt: 'lisa' },
		{ src: '/assets/lisa/Image 3.webp', alt: 'lisa' },
		{ src: '/assets/lisa/Image 4.webp', alt: 'lisa' },
		{ src: '/assets/lisa/Image 5.webp', alt: 'lisa' },
		{ src: '/assets/lisa/Image 6.webp', alt: 'lisa' },
		{ src: '/assets/lisa/Image 7.webp', alt: 'lisa' },
		{ src: '/assets/lisa/Image 8.webp', alt: 'lisa' },
		{ src: '/assets/lisa/Image 9.webp', alt: 'lisa' },
		{ src: '/assets/lisa/Image 10.webp', alt: 'lisa' },
    { src: '/assets/lisa/Image 11.webp', alt: 'lisa' },
		{ src: '/assets/lisa/Image 12.webp', alt: 'lisa' },
		{ src: '/assets/lisa/Image 13.webp', alt: 'lisa' },
		{ src: '/assets/lisa/Image 14.webp', alt: 'lisa' },
		{ src: '/assets/lisa/Image 15.webp', alt: 'lisa' },
		{ src: '/assets/lisa/Image 16.webp', alt: 'lisa' },
		{ src: '/assets/lisa/Image 17.webp', alt: 'lisa' },
		{ src: '/assets/lisa/Image 18.webp', alt: 'lisa' },
		{ src: '/assets/lisa/Image 19.webp', alt: 'lisa' },
		{ src: '/assets/lisa/Image 20.webp', alt: 'lisa' },
    { src: '/assets/lisa/Image 21.webp', alt: 'lisa' },
		{ src: '/assets/lisa/Image 22.webp', alt: 'lisa' },
		{ src: '/assets/lisa/Image 23.webp', alt: 'lisa' },
		{ src: '/assets/lisa/Image 24.webp', alt: 'lisa' },
	];
</script>

<main class="mx-auto flex min-h-screen flex-col gap-y-20 px-5 py-20 pb-40 lg:px-20">
	<h2 class="text-center text-[45px] capitalize">Portrait Photography</h2>

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
