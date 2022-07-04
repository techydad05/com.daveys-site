<script>
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Daveys portfolio site" />
</svelte:head>

<section class="bg-[url('/art-gallery.jpg')] bg-cover bg-no-repeat home flex items-center justify-center fixed w-full h-full left-0 top-0">
	<div class="w-[70%] absolute top-[180px]">
		<img src="/background.jpg" alt="Terracotta female statue" class="frame">
		<img class="z-50 max-w-xl mx-auto" src="daveys-logo-2.png" width="90%" alt="">
	</div>
</section>



<style>
section.home {
	background-position: center top;
}
.frame {
	border-image: url('/frame-2.png') 80 70 80 70 stretch stretch;
	border-color: #f4be52;
	border-style: inset;
	border-width: 48px;
	display: block;
	width: 100%;
	height: auto;
	max-width: 500px;
	margin: 0 auto;
}
</style>
