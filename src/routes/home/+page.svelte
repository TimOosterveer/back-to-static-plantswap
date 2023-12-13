<script>
    export let data
    import Carousel from "../../lib/atoms/Carousel.svelte";
    import SectionOneHome from "../../lib/atoms/SectionOneHome.svelte";
    import SectionTwoHome from "../../lib/atoms/SectionTwoHome.svelte";
    import SectionThreeHome from "../../lib/atoms/SectionThreeHome.svelte";
    import SectionFourHome from "../../lib/atoms/SectionFourHome.svelte";
    import SectionBannerHome from "../../lib/atoms/SectionBannerHome.svelte";

</script>

<!--HTML -->

<!-- <Header data={data} /> -->
<Carousel {data} />

<main>
    <SectionOneHome/>
    <SectionTwoHome/>
    <SectionThreeHome/>
    <SectionFourHome {data}  />
    <SectionBannerHome />
</main>

<!--CSS STYLING-->
<style>

    main {
        background-color: var(--background-color);

    }

</style>
