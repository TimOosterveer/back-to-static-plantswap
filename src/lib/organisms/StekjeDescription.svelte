<script>
    export let data;
    import VectorPlant from '$lib/assets/vectorplant.svg';
</script>

<section class="container">
	<div class="stekje-container">
		<img id="one" src={VectorPlant} alt="incon plant" />
		<div class="left">
			<div class="beschrijving-tag">
				<svg
					width="25"
					height="25"
					viewBox="0 0 23 25"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M20.5 8.16988C23.8333 10.0944 23.8333 14.9056 20.5 16.8301L7.74999 24.1913C4.41666 26.1158 0.249999 23.7102 0.249999 19.8612L0.25 5.13877C0.25 1.28977 4.41667 -1.11584 7.75 0.808657L20.5 8.16988Z"
						fill="#F26F21"
					/>
				</svg>
				<h2>Beschrijving</h2>
			</div>
			<p>{data.stekje.beschrijving}</p>
		</div>
		<div class="right">
			<ul class="accordion">
				<li>
					<input type="radio" name="accordion" id="first" checked />
					<label for="first">Landherkomst</label>
					<div class="content">
						<p>{data.stekje.landvanherkomst}</p>
					</div>
				</li>

				<li>
					<input type="radio" name="accordion" id="second" />
					<label for="second">Voeding</label>
					<div class="content">
						<p>{data.stekje.voeding}</p>
					</div>
				</li>

				<li>
					<input type="radio" name="accordion" id="fifth" />
					<label for="fifth">Temperatuur</label>
					<div class="content">
						<p>{data.stekje.temperatuur}</p>
					</div>
				</li>

				<li>
					<input type="radio" name="accordion" id="fourth" />
					<label for="fourth">Giftig</label>
					<div class="content">
						<p>{data.stekje.giftig}</p>
					</div>
				</li>

				<li>
					<input type="radio" name="accordion" id="third" />
					<label for="third">Verpotten</label>
					<div class="content">
						<p>{data.stekje.verpotten}</p>
					</div>
				</li>

				<li>
					<input type="radio" name="accordion" id="sixth" />
					<label for="sixth">Watergeven</label>
					<div class="content">
						<p>{data.stekje.watergeven}</p>
					</div>
				</li>

				<li>
					<input type="radio" name="accordion" id="seventh" />
					<label for="seventh">Zonlicht</label>
					<div class="content">
						<p>{data.stekje.zonlicht}</p>
					</div>
				</li>

				<li>
					<input type="radio" name="accordion" id="eighth" />
					<label for="eighth">Stekken</label>
					<div class="content">
						<p>{data.stekje.stekken}</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</section>

<style>
section {
    position: relative;
    width: 100%;
    background-color: var(--background-color);
}

h2 {
    color: var(--background-color);
    font-size: 2.7vw;
}

.left p {
    font-size: 1.2em;
    margin-top: 15px;
}
.container {
    padding: 2rem;
}

.stekje-container {
    position: relative;
    background-color: #f9e9c2;
    width: 100%;
    border-radius: var(--bradius);
    display: flex;
    padding: 2rem;
    justify-content: space-between;
}

.left {
    position: sticky;
    top: 1rem;
    width: 50%;
    height: 89vh;
    padding-right: 5%;
    overflow: hidden;
}

.beschrijving-tag {
    display: flex;
    align-items: center;
}

.beschrijving-tag svg {
    margin-right: 10px;
}

#one {
    position: absolute;
    bottom: 0;
    left: 5rem;
    width: 350px;
    height: 350px;
}
.right {
    width: 50%;
    padding: 0;
}

.accordion {
    width: 100%;
    border-radius: var(--bradius);
}

.accordion li {
    list-style: none;
    padding: 10px;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    width: 100%;
    background-color: #fbc980;
    border-radius: var(--bradius);
}

.accordion li label {
    display: flex;
    align-items: center;
    color: var(--background-color);
    text-transform: uppercase;
    font-weight: 600;
    padding: 7px;
    cursor: pointer;
}

label::before {
    content: '+';
    color: black;
    font-size: 25px;
    margin-right: 5px;
    margin-bottom: 5px;
    /* transition: transform 0.4s; */
}

.accordion input[type='radio']:checked + label::before {
    content: '-';
    /* transform: rotate(360deg); */
}

input[type='radio'] {
    display: none;
}

.accordion .content {
    color: black;
    padding: 0 10px;
    max-height: 0;
    overflow: hidden;
    transition:
        max-height 0.7s,
        padding 0.5s;
}

.accordion input[type='radio']:checked + label + .content {
    max-height: 400px;
    padding: 10px 10px 20px;
}
@media screen and (max-width: 768px) {
		.stekje-container {
			display: grid;
			align-content: space-evenly;
		}

		.left,
		.right {
			position: static;
			height: fit-content;
			width: 100%;
		}

		#one {
			display: none;
		}

		.accordion {
			margin-top: 20px;
		}
	}
</style>