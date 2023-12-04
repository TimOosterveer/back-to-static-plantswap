<script>
    import Carousel from "../../lib/atoms/Carousel.svelte";
    import SectionOneHome from "../../lib/atoms/SectionOneHome.svelte";
    import SectionTwoHome from "../../lib/atoms/SectionTwoHome.svelte";
    import SectionThreeHome from "../../lib/atoms/SectionThreeHome.svelte";
    import SectionFourHome from "../../lib/atoms/SectionFourHome.svelte";
    import SectionBannerHome from "../../lib/atoms/SectionBannerHome.svelte";
    export let data
</script>

<!--HTML -->

<!-- <Header data={data} /> -->
<Carousel/>

<main>
    <SectionOneHome/>
    <SectionTwoHome/>
    <SectionThreeHome/>
    <SectionFourHome data={data}  />
    <SectionBannerHome />
</main>

<!--CSS STYLING-->
<style>

    main {
        background-color: var(--background-color);

    }

</style>
