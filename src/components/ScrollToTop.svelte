<script>
	import { onMount } from "svelte";

	let isVisible = false;

	onMount(() => {
		const handleScroll = () => {
			isVisible = window.scrollY > 300; // Show button after 300px scroll
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	});

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}
</script>

<style>
	.scroll-btn {
		position: fixed;
		bottom: 30px;
		right: 30px;
		width: 50px;
		height: 50px;
		background-color: #306b86;
		color: white;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24px;
		cursor: pointer;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
		transition: transform 0.3s ease, opacity 0.3s ease;
		z-index: 900;
	}
	.scroll-btn:hover {
		transform: scale(1.1);
		background-color: #2a5b72;
	}
	.scroll-btn.hidden {
		opacity: 0;
		pointer-events: none;
		transform: translateY(20px);
	}
</style>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="scroll-btn {isVisible ? '' : 'hidden'}"
	on:click={scrollToTop}
	title="Back to top"
>
↑
</div>
