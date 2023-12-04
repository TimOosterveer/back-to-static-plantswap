<script>
    export let data;
</script>

<section class="image-section">
	<img src={data.stekje.fotos[0].url} alt="foto van {data.naam}" />
	<h1>{data.stekje.naam}</h1>
</section>

<style>
	section {
		position: relative;
		width: 100%;
		background-color: var(--background-color);
	}

	.image-section {
		height: 90vh;
	}

	img {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}

	h1 {
		position: absolute;
		bottom: 2rem;
		left: 2rem;
		color: white;
		font-size: 5vw;
	}
</style>