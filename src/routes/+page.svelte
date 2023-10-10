<script>
	// @ts-ignore
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
  
	/**
	 * @type {{ goToNext: () => void; }}
	 */
	let carousel; // for calling methods of the carousel instance
	
	const handleNextClick = () => {
	  carousel.goToNext()
	}
  </script>
  
  {#if browser}
	<Carousel
	  bind:this={carousel}
	>
	  <div>1</div>
	  <div>2</div>
	  <div>3</div>
	</Carousel>
  {/if}
  
  <button on:click={handleNextClick}>Next</button>