<script>
	import FaChevronDown from 'svelte-icons/fa/FaChevronDown.svelte'
	import * as animateScroll from "svelte-scrollto"
	import { onMount } from 'svelte';
	let Carousel; // for saving Carousel component class
	let carousel; // for calling methods of the carousel instance
	onMount(async () => {
		const module = await import('svelte-carousel');
		Carousel = module.default;
	});
	const handleNextClick = () => {
		carousel.goToNext()
	}
	function handleClick() {
		animateScroll.scrollTo({element:"#hero"})
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Daveys portfolio site" />
</svelte:head>

<section class="bg-[url('/art-gallery.jpg')] bg-cover bg-no-repeat home flex items-center justify-center w-full h-screen">
	<div class="h-screen w-[70%] max-w-[400px] xl:max-w-none pt-[160px]">
		<img src="/pic1.jpg" alt="" class="frame">
		<img class="xl:mt-[-135px] mt-[-70px] max-w-xl mx-auto" src="daveys-logo-2.png" width="90%" alt="">
		<a on:click={() => handleClick()} class="animate-ping-slow block text-red-800 w-14 mx-auto cursor-pointer">
			<FaChevronDown />
		</a>
	</div>
</section>
<section id="hero">
	<div class="hero">
		<div class="hero-content flex-col lg:flex-row p-10">
		  <img src="pic2.jpg" class="max-w-sm shadow-2xl w-[100%]" />
		  <div class="text-white">
			<h1 class="text-3xl lg:text-5xl font-bold">One of my Faves</h1>
			<p class="text-xl italic py-6">This is one of my favorite pieces and could be an inspiration for a piece I make for you!</p>
			<button on:click={() => animateScroll.scrollTo({element:"#about"})} class="btn btn-primary bg-blue-800 border-blue-800 hover:bg-black hover:border-red-800">About Me</button>
		  </div>
		</div>
	  </div>
</section>
<section id="about" class="h-screen bg-red-900">
	<div class="p-10  text-white">
		<h1 class="text-3xl lg:text-5xl font-bold mb-5">A Little Bit About Me...</h1>
		<p class="text-xl">
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus totam placeat labore, ipsa quam tempore odit repellat, corrupti iure laudantium perferendis architecto pariatur explicabo commodi et magnam iusto deserunt! Rem? Lorem ipsum dolor, sit amet consectetur adipisicing Rem?</p>
			<button on:click={() => animateScroll.scrollTo({element:"#more"})} class="mt-5 btn btn-primary bg-blue-800 border-blue-800 hover:bg-black hover:border-red-800">More of My Work</button>
	</div>
</section>
<section id="more" class="p-10 text-white flex-col lg:flex-row">
	<h1 class="text-5xl font-bold my-4 text-center">More of My Stuff</h1>
	<div class="w-full lg:w-[50%] mx-auto">
		<svelte:component
		this={Carousel}
		bind:this={carousel}
		>
		<div>
			<img src="/pic1.jpg" class="w-[100%] md:w-[50%] mx-auto" />
		</div>
		<div>
			<img src="/pic2.jpg" class="w-[100%] md:w-[50%] mx-auto" />
		</div>
		<div>
			<img src="/pic3.jpg" class="w-[100%] md:w-[50%] mx-auto" />
		</div>
		</svelte:component>
	</div>
</section>
<footer class="bg-primary-content py-10">
	<p class="text-2xl text-black text-center font-sans">
		&copy; All Rights Reserved 2022
	</p>
</footer>



<style>
/* @import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"; */
section.home {
	background-position: center top;
}
section {
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
}
.frame {
	border-image: url('/frame-2.png') 80 70 80 70 stretch stretch;
	border-color: #f4be52;
	border-style: inset;
	border-width: 28px;
	display: block;
	width: 100%;
	height: auto;
	max-width: 500px;
	margin: 0 auto;
}
.sc-carousel-button.sc-carousel-arrow__circle {
  width: 43px !important;
  height: 46px !important;
}
</style>
