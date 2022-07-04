<script>
	import Counter from '$lib/Counter.svelte';
	import FaChevronDown from 'svelte-icons/fa/FaChevronDown.svelte'
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Daveys portfolio site" />
</svelte:head>

<section class="bg-[url('/art-gallery.jpg')] bg-cover bg-no-repeat home flex items-center justify-center w-full h-screen">
	<div class="h-screen w-[70%] pt-[160px]">
		<img src="/background.jpg" alt="Terracotta female statue" class="frame">
		<img class="mt-[-70px] max-w-xl mx-auto" src="daveys-logo-2.png" width="90%" alt="">
		<div class="text-red-800 w-14 mx-auto">
			<FaChevronDown />
		</div>
	</div>
</section>
<div class="hero">
	<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus totam placeat labore, ipsa quam tempore odit repellat, corrupti iure laudantium perferendis architecto pariatur explicabo commodi et magnam iusto deserunt! Rem?</p>
</div>



<style>
.chevron {
	transform: rotate(45deg);
	height: 60px;
	width: 60px;
	margin: 0 auto;
	box-shadow: 0 0 10px hsl(0, 0%, 80%), 0 0 0 15px hsl(0, 0%, 90%);
}
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
