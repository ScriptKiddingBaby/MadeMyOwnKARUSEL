<script lang="ts">


	import homeban1 from "$lib/Images/annapol_img/homebanner_1.webp";
	import homeban2 from "$lib/Images/annapol_img/homebanner_2.webp";

	const photos = [homeban1, homeban2]

	import '@splidejs/svelte-splide/css';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';

	let carousel: { goToNext: () => void; }; // for calling methods of the carousel instance

	const handleNextClick = () => {
		carousel.goToNext()
	}
</script>
  
<div class="">

	<Splide aria-label="My Favorite Images" options={{
		autoplay: true
	}}>

		
		{#each photos as selection }
		<SplideSlide>
			<img src={selection} alt="loading"/>
		</SplideSlide>
		{/each}
		

	</Splide>
	

</div>