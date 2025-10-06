<script>
	import CallPhone from '$lib/assets/call.png';
</script>

<section
	class="relative z-10 flex h-[700px] flex-col items-center justify-center gap-10 bg-[url('/src/lib/assets/Purple.webp')] bg-cover bg-center bg-no-repeat text-center lg:h-[450px]"
>
	<!-- Overlay -->
	<div class="absolute inset-0 bg-black/50"></div>
	<div class=" lg:grid-cols-3 relative mx-auto grid  grid-cols-1 p-5 gap-[40px]">
		<img
			alt="call"
			src={CallPhone}
			class="relative top-[-9em] mx-auto mb-10 h-auto w-[180px] xl:top-[-6em] xl:w-[250px] xl:p-16 bg-[#0c0c0c] object-cover object-center p-8 pt-20"
		/>
		<div>
			<h3 class="text-center text-[20px] xl:text-[30px] font-semibold text-[#fff] capitalize max-w-[600px]">
				Let's Create Something Meaningful Together. Whether you are looking to collaborate,
				commission a piece, or simply learn more about my work, I would love to hear from you.
			</h3>
			<p class="pt-8 text-center text-[30px] xl:text-[40px] font-semibold text-[#fff] capitalize hover:text-[#306b86]">
				<a href="tel:+234 903 383 0451">+234 903 383 0451</a>
			</p>
		</div>

		<button class="mx-auto"
			><a
				href="/contact"
				class=" bg-[#306b86] rounded-lg px-6 py-5 text-[18px] font-semibold transition duration-500 ease-in-out hover:scale-105 hover:bg-[#b8d6ee] hover:text-[#000000]"
				>Book a Photo Shoot</a
			>
		</button>
	</div>
</section>
