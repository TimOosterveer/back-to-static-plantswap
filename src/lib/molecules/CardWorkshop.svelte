<script>
	export let data;
	import Background from '$lib/atoms/ImageWorkshop.svelte';
	import Button from '$lib/atoms/ButtonWorkshop.svelte'
</script>

<div>
	{#each data.workshops as workshop}
		<section>
			<Background workshop={workshop}/>
	
			<h2>{workshop.naam}</h2>
	
			<ul>
				<li><i class="fa-solid fa-location-crosshairs" style="color: #ffffff;"></i>{workshop.locatie}</li>
				<li><i class="fa-solid fa-sack-dollar" style="color: #ffffff;"></i>{workshop.kosten}</li>
				<li><i class="fa-solid fa-calendar-days" style="color: #ffffff;"></i>{workshop.datum}</li>
			</ul>
	
			<Button />
		</section>
	{/each}
</div>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border-radius: var(--bradius);
		height: 90vh;
		margin: var(--margin);
		padding: var(--padding);
		overflow: hidden;
		position: sticky;
		top: 2rem;
	}
	section::after {
		content: '';
		position: absolute;
		background-color: rgba(0, 0, 0, 0.07);
		z-index: -1;
		inset: 0;
	}
	h2 {
		color: white;
		font-size: 32px;
	}

	ul {
		color: white;
		list-style: none;
		font-size: 20px;
	}

	i {
		margin-right: 1rem;
	}

	@media screen and (min-width: 1800px) {
		div {
			display: flex;
			gap: 2rem;
			padding: 2rem;
		} 

		section {
			width: 100%;
			margin: 0;
		}
	}

	@media screen and (max-width: 767px) {

		section {
			width: 100%;
			margin: 0;
			margin-top: 1rem;
			margin-bottom: 1rem;
		}

		section ul {
			padding-bottom: 5rem;
		}
	}

</style>
