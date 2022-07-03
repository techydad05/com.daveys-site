<script>
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Daveys portfolio site" />
</svelte:head>

<!-- <section class="bg-contain bg-no-repeat home flex items-center justify-center fixed w-full h-full left-0 top-0">
	<img class="z-50" src="daveys-logo-2.png" width="90%" alt="">
</section> -->
<div class="frame shadow-xl">
	<img class="hidden md:block" src="background.jpg" alt="daveys favorite" />
	<img class="md:hidden" src="background-mobile.jpg" alt="daveys favorite" />
</div>

<style>
img {
  border:solid 2px;
  border-bottom-color:#ffe;
  border-left-color:#eed;
  border-right-color:#eed;
  border-top-color:#ccb;
  max-height:100%;
  max-width:100%;
}

.frame {
	background-color:#fbfbfb;
	border:solid 5vmin #eee;
	border-bottom-color: #8c7272;
	border-left-color: #917777;
	border-right-color: #917777;
	border-top-color: #8c7272;
	box-shadow:0 0 5px 0 rgba(0, 0, 0, 0.338) inset, 0 5px 10px 5px rgba(0,0,0,.338);
	box-sizing:border-box;
	display:inline-block;
	margin: 40px;
	/* height:90vh; */
	padding:8vmin;
	position:relative;
	text-align:center;
	display: flex;
  	align-items: center;
}
.frame:before {
	border-radius:2px;
	bottom:-2vmin;
	box-shadow:0 2px 5px 0 rgba(0,0,0,.25) inset;
	content:"";
	left:-2vmin;
	position:absolute;
	right:-2vmin;
	top:-2vmin;
}
.frame:after {
	border-radius:2px;
	bottom:-2.5vmin;
	box-shadow: 0 2px 5px 0 rgba(0,0,0,.25);
	content:"";
	left:-2.5vmin;
	position:absolute;
	right:-2.5vmin;
	top:-2.5vmin;
}
@media (min-width: 640px) {
	.frame {
		height: 90vh;
	}
}
</style>