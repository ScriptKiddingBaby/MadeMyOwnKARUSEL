<script lang="ts">
	import '../app.postcss';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });



	import { LightSwitch } from "@skeletonlabs/skeleton";

    import { statics } from "$lib";
    import type { Navigation } from "$lib/types";
	import annapolLogo from "$lib/Images/annapol_img/annapol_logo.webp"
	import { browser } from '$app/environment';


    export let selection: Navigation[] = [{title: "APPLY NOW", url: "/ApplyNow"}, {title: "CAREER", url: "/Career"}, {title: "HOME", url: "/"}, ]


</script>

<div class="fixed bottom-0 right-0 m-2">
	<LightSwitch />
</div>
<nav class="fixed w-full bg-slate-300 dark:bg-cyan-800 p-2 flex items-center">

	<div class="w-full flex gap-1">
		<img src={annapolLogo} alt="loading" class="w-14" />
		<h1 class="h3 text-blue-700">Annapolis Finance Inc</h1>
	</div>

    <div class="flex gap-2 flex-row-reverse w-full">
        {#each selection as select }
            <a href={select.url} class=" p-2 text-blue-700 font-bold" >{select.title}</a>
        {/each}
    </div>
</nav>

<div class="md:flex md:justify-stretch p-4 md:p-0 w-full">

	<div class="hidden pt-20 border-r-[0.1rem] border-black min-h-screen md:px-10 md:flex flex-col gap-2">
		<h4 class="h4 text-blue-700 font-bold">LOCATIONS</h4>
		
		<div class="flex flex-col gap-1">
			{#each $statics.location as selection }
				<a href={selection.url} class="transition-all hover:underline active:scale-95 hover:text-red-500">{selection.title}</a>
			{/each}
		</div>

		<h4 class="h4 text-blue-700 font-bold">LOAN</h4>
		
		<div class="flex flex-col gap-1">
			{#each $statics.loan as selection }
				<a href={selection.url} class="transition-all hover:underline active:scale-95 hover:text-red-500">{selection.title}</a>
			{/each}
		</div>
	</div>

	<div class="pt-20 p-4 ">
		<slot />
	</div>

</div>