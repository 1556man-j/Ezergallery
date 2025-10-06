<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import Cartsidebar from '../components/Cartsidebar.svelte';
	import SearchModal from '../components/SearchModal.svelte';
	import Toast from '../components/Toast.svelte';
	import ContactCTA from '../components/ContactCTA.svelte';
	import ScrollToTop from '../components/ScrollToTop.svelte';

	let { children } = $props();
</script>
<Header/>
<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
<Cartsidebar/>
<SearchModal/>
<Toast/>
<ScrollToTop />
<ContactCTA />
<Footer/>