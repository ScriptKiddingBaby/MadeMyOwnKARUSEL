<script>
	// @ts-ignore
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';

	import homeBan1 from "$lib/Optimize/homebanner_1.webp";
	import homeBan2 from "$lib/Optimize/homebanner_2.webp";
	import homeBan3 from "$lib/Optimize/homebanner_3.webp";
  
	/**
	 * @type {{ goToNext: () => void; }}
	 */
	let carousel; // for calling methods of the carousel instance
	
	const handleNextClick = () => {
	  carousel.goToNext()
	}

	
  </script>
  
  {#if browser}
	<Carousel bind:this={carousel}
	autoplay
	autoplayDuration={2000}
	>
		<div>
			<img src={homeBan1} alt="loading" class="" />
		</div>
		<div>
			<img src={homeBan1} alt="loading" class="" />
		</div>
		<div>
			<img src={homeBan1} alt="loading" class="" />
		</div>
	</Carousel>
  {/if}
  
  <button on:click={handleNextClick}>Next</button>