import { c as create_ssr_component, o as onDestroy, v as validate_component, d as add_attribute, f as each } from "../../../chunks/ssr.js";
const image1 = "/_app/immutable/assets/carousel-img-1.8bb9eaf5.avif";
const image2 = "/_app/immutable/assets/carousel-img-2.752ad0e8.avif";
const image3 = "/_app/immutable/assets/carousel-img-3.977929cf.avif";
const ButtonGelijkSwappen_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: "button.svelte-1w0sdiv.svelte-1w0sdiv{position:absolute;background-color:var(--button-color);color:var(--text-color);font-family:var(--main-font);border:none;border-radius:var(--bradius);padding:0.4rem 0.9rem .6rem .9rem;font-size:1rem;transition:0.2s;cursor:pointer;z-index:999;left:30%;top:60%}button.svelte-1w0sdiv.svelte-1w0sdiv:hover{background-color:var(--text-color);color:orange}button.svelte-1w0sdiv:hover svg.svelte-1w0sdiv{fill:orange}svg.svelte-1w0sdiv.svelte-1w0sdiv{margin-left:5px;transform:translateY(4px) scale(0.9);fill:var(--text-color)}@media screen and (min-width: 48rem){button.svelte-1w0sdiv.svelte-1w0sdiv{top:60%;left:38%;margin-top:0.5rem;z-index:2}}@media screen and (min-width: 64rem){button.svelte-1w0sdiv.svelte-1w0sdiv{top:70%;left:45%}}",
  map: null
};
const ButtonGelijkSwappen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$9);
  return `<a href="/stekjes_overzicht" data-svelte-h="svelte-13i0z7m"><button class="svelte-1w0sdiv">Gelijk Swappen

    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-1w0sdiv"><path d="M17.927 7.57075L4.41288 0.355913C2.41452 -0.710956 0 0.737063 0 3.00238V17.1041C0 19.3443 2.36618 20.7942 4.36214 19.777L17.8763 12.8901C20.0368 11.7891 20.0661 8.71276 17.927 7.57075Z" fill=""></path></svg></button> </a>`;
});
const Carousel_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: "main.svelte-1ptfe7j.svelte-1ptfe7j{background-color:var(--background-color)}.carrousel.svelte-1ptfe7j.svelte-1ptfe7j{display:flex;justify-content:center;align-items:center;width:100%;height:100vh}.overlay.svelte-1ptfe7j.svelte-1ptfe7j{position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.1) 100%);z-index:1}.carrousel.svelte-1ptfe7j h1.svelte-1ptfe7j{position:absolute;z-index:1;width:80%;font-size:2rem;color:var(--text-color);display:flex;text-align:center;justify-content:center;align-items:center;font-weight:900;line-height:1.1em}.carrousel.svelte-1ptfe7j img.svelte-1ptfe7j{width:100%;height:100vh;object-fit:cover}.carrousel-a.svelte-1ptfe7j.svelte-1ptfe7j{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none}.carrousel-a.svelte-1ptfe7j.svelte-1ptfe7j::-webkit-scrollbar{display:none}.carrousel-picture.svelte-1ptfe7j.svelte-1ptfe7j{flex-grow:0;flex-shrink:0;flex-basis:100%;scroll-snap-align:start}@media screen and (min-width: 48rem){.overlay.svelte-1ptfe7j.svelte-1ptfe7j{height:100%;background:linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.1) 100%)}.carrousel.svelte-1ptfe7j h1.svelte-1ptfe7j{width:80%;height:45%;font-size:4rem}}@media screen and (min-width: 64rem){.carrousel.svelte-1ptfe7j.svelte-1ptfe7j{height:100vh;width:100%}.overlay.svelte-1ptfe7j.svelte-1ptfe7j{height:100%;background:linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.1) 100%)}.carrousel.svelte-1ptfe7j.svelte-1ptfe7j{display:flex;justify-content:center;align-items:center}.carrousel.svelte-1ptfe7j h1.svelte-1ptfe7j{width:60%;height:100%;font-size:8vw;line-height:7rem}}",
  map: null
};
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let intervalId;
  onDestroy(() => {
    clearInterval(intervalId);
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$8);
  return `<main class="svelte-1ptfe7j"><div class="carrousel svelte-1ptfe7j" aria-label="Carousel"><div class="overlay svelte-1ptfe7j"></div> <h1 class="svelte-1ptfe7j" data-svelte-h="svelte-zs5oeh">Swap nu je stekjes!</h1>  ${validate_component(ButtonGelijkSwappen, "ButtonGelijkSwappen").$$render($$result, {}, {}, {})} <div class="carrousel-a svelte-1ptfe7j" role="list" tabindex="0" aria-live="polite" data-svelte-h="svelte-1ao3shj"><div class="carrousel-picture svelte-1ptfe7j"><img${add_attribute("src", image1, 0)} alt="Slide 1" aria-label="foto-van-stekjes" class="svelte-1ptfe7j"></div> <div class="carrousel-picture svelte-1ptfe7j"><img${add_attribute("src", image2, 0)} loading="”lazy”" alt="Slide 2" aria-label="foto-van-stekjes" class="svelte-1ptfe7j"></div> <div class="carrousel-picture svelte-1ptfe7j"><img${add_attribute("src", image3, 0)} loading="”lazy”" alt="Slide 3" aria-label="foto-van-een-stekje-die-word-gepot" class="svelte-1ptfe7j"></div></div></div> </main>`;
});
const ButtonLocation_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: "button.svelte-14nud81.svelte-14nud81{background-color:var(--button-color);color:var(--text-color);font-family:var(--main-font);border:none;bottom:2rem;right:2rem;border-radius:var(--bradius);padding:0.5rem 1.1rem;margin-bottom:2rem;font-size:1rem;transition:0.2s;cursor:pointer}button.svelte-14nud81.svelte-14nud81:hover{background-color:var(--text-color);color:orange}button.svelte-14nud81:hover svg.svelte-14nud81{fill:orange}svg.svelte-14nud81.svelte-14nud81{margin-left:5px;transform:translateY(4px) scale(0.9);fill:var(--text-color)}@media screen and (min-width: 48rem){}@media screen and (min-width: 64rem){}",
  map: null
};
const ButtonLocation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$7);
  return `<a href="contact" data-svelte-h="svelte-18iavkl"><button class="svelte-14nud81">Zoek locatie

    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-14nud81"><path d="M17.927 7.57075L4.41288 0.355913C2.41452 -0.710956 0 0.737063 0 3.00238V17.1041C0 19.3443 2.36618 20.7942 4.36214 19.777L17.8763 12.8901C20.0368 11.7891 20.0661 8.71276 17.927 7.57075Z" fill=""></path></svg></button> </a>`;
});
const SectionOneHome_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "section.svelte-13nauve{padding:2rem}h2.svelte-13nauve{color:var(--text-color);margin-bottom:1rem}p.svelte-13nauve{color:var(--text-color);margin-bottom:1rem}.container-text-one.svelte-13nauve{width:100%}@media screen and (min-width: 48rem){h2.svelte-13nauve{font-size:3rem}.container-text-one.svelte-13nauve{padding-left:6rem;width:80%}}@media screen and (min-width: 64rem){section.svelte-13nauve{height:80vh;display:flex;justify-content:center;align-items:center;padding:0 25vw}h2.svelte-13nauve{font-size:5rem;font-weight:700;line-height:1em}p.svelte-13nauve{font-size:1.1rem;margin-bottom:1rem}.container-text-one.svelte-13nauve{width:100%;text-align:left}}",
  map: null
};
const SectionOneHome = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `<section class="svelte-13nauve"><div class="container-text-one svelte-13nauve"><h2 class="svelte-13nauve" data-svelte-h="svelte-rvqlba">Doe mee!</h2> <p class="svelte-13nauve" data-svelte-h="svelte-1ry38r3">Heb jij een of meerdere plantenstekjes over en zou je die graag willen ruilen voor een nieuw
			plantje? Meld je stekje hier aan en ruil ‘m via de app. Schrijf de Latijnse naam van je plant
			en eventuele verzorgingstips op een labeltje en neem ‘m mee naar de OBA Linnaeusstraat in
			Amsterdam.</p> ${validate_component(ButtonLocation, "ButtonLocation").$$render($$result, {}, {}, {})}</div> </section>`;
});
const Img1 = "/_app/immutable/assets/img-planten.5f84573f.avif";
const SectionTwoHome_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "h3.svelte-kwe3yk{color:var(--background-color);margin-bottom:1rem}p.svelte-kwe3yk{color:var(--background-color)}main.svelte-kwe3yk{margin-bottom:5rem}.svg-leaf.svelte-kwe3yk{z-index:-1;position:absolute;width:40%}.svg-arrow.svelte-kwe3yk{visibility:hidden}.container-text-two.svelte-kwe3yk{padding-top:3rem;padding-left:2rem;padding-bottom:2rem;width:95%}.flex-wrapper.svelte-kwe3yk{z-index:1;position:relative;background-color:var(--background-color-light)}img.svelte-kwe3yk{width:19rem;margin-top:1rem;margin-bottom:2rem;margin-left:2rem;border-radius:40px}@media screen and (min-width: 48rem){h3.svelte-kwe3yk{font-size:3rem}.svg-leaf.svelte-kwe3yk{width:20%;top:-10%}.flex-wrapper.svelte-kwe3yk{display:flex;flex-direction:column;margin-top:5rem;margin-left:5%;width:90%;border-radius:40px}.container-text-two.svelte-kwe3yk{margin-top:2rem;margin-bottom:2rem;padding-left:4rem;width:40rem;height:20rem}img.svelte-kwe3yk{margin-top:0rem;margin-bottom:2rem;margin-left:4rem;width:35rem}}@media screen and (min-width: 64rem){h3.svelte-kwe3yk{font-size:8rem;line-height:8rem;margin-bottom:2rem}.svg-leaf.svelte-kwe3yk{width:40%;top:20%}.svg-arrow.svelte-kwe3yk{visibility:visible;margin-top:8rem;margin-left:3rem}.flex-wrapper.svelte-kwe3yk{display:flex;flex-direction:row;margin-top:5rem;margin-left:5%;width:90%;border-radius:40px}.container-text-two.svelte-kwe3yk{margin-top:3rem;padding-left:4rem;width:40rem;height:80vh}img.svelte-kwe3yk{margin-top:7rem;margin-left:10rem;width:30rem;height:35rem}}",
  map: null
};
const SectionTwoHome = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<main class="svelte-kwe3yk" data-svelte-h="svelte-2dr7rp"><div class="flex-wrapper svelte-kwe3yk"><svg class="svg-leaf svelte-kwe3yk" width="282" height="605" viewBox="0 0 282 605" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-112.732 469.473C-121.286 469.003 -131.96 467.556 -144.436 463.462C-173.627 453.317 -167.116 449.366 -144.072 455.464C-130.934 459.107 -109.299 457.448 -93.7835 454.628C-90.9259 451.712 -88.0683 448.797 -85.2107 445.882C-101.159 438.825 -132.739 423.042 -158.258 402.646C-193.741 374.023 -190.308 361.997 -151.699 392.366C-123.61 414.401 -91.8188 429.072 -75.7653 435.573C-74.3365 434.115 -73.4639 432.552 -72.0351 431.094C-66.8762 425.158 -61.6117 418.666 -56.3472 412.174C-68.1432 398.413 -97.7006 362.847 -124.266 326.696C-157.592 280.62 -134.777 297.046 -115.846 324.835C-101.422 346.008 -61.5366 381.804 -44.2841 397.176C-29.1525 378.149 -13.3591 358.673 3.09588 338.745C-5.70809 324.4 -25.5701 292.4 -40.4549 258.464C-60.5666 212.589 -46.7855 224.997 -26.4152 263.431C-11.5883 291.594 5.75121 315.625 13.6248 325.761C36.8785 297.327 60.2377 268.337 82.0626 241.361C75.9342 228.099 56.9636 185.321 54.5552 155.479C51.8304 127.305 57.3159 131.803 63.9342 160.715C69.5165 185.973 87.0771 220.993 91.7189 229.94C154.23 152.484 160.397 147.315 160.397 147.315C160.397 147.315 81.7563 255.132 56.6809 290.134C63.0679 295.955 74.9117 303.386 90.8308 307.557C115.093 313.31 119.811 318.814 92.9025 314.864C72.6682 312.18 55.1568 304.25 47.6863 301.105C29.5151 327.045 10.7875 352.88 -6.06041 377.918C-0.0186988 382.521 13.7336 392.043 39.348 399.781C75.3193 410.635 79.194 420.588 37.4497 409.792C9.39952 402.745 -7.76654 396.033 -16.244 392.121C-25.2097 405.978 -33.9646 418.723 -42.1631 431.573C-29.4657 446.657 5.33739 484.946 34.1648 503.088C70.808 525.593 73.9633 530.225 31.8924 508.995C-0.694179 492.445 -38.0861 461.732 -52.8741 448.556C-56.1535 453.696 -58.7713 458.386 -61.9453 462.969C-57.6198 473.585 -48.2306 490.922 -33.2028 505.872C-9.87963 528.732 -13.5809 536.097 -41.9389 509.401C-56.0651 495.775 -64.2841 484.421 -68.4752 476.136C-80.6047 506.679 -66.1706 539.954 -56.7049 553.849C3.06215 645.848 153.84 601.261 218.115 511.463C267.604 441.908 103.025 416.464 130.804 385.432C159.246 353.948 272.862 490.153 280.986 325.751C284.79 250.991 188.031 290.264 180.933 257.804C169.663 207.843 278.462 284.363 281.153 209.392C282.024 174.41 279.75 146.898 273.38 98.4425C267.011 49.9872 255.779 15.0148 255.779 15.0148C255.779 15.0148 210.488 38.1175 168.187 27.2159C125.331 16.2088 69.3436 -19.7592 32.0606 15.8095C-32.7148 77.8557 33.5925 168.79 -5.52395 165.406C-36.1919 163.049 -48.8637 84.0127 -38.1443 45.712C-26.0249 3.0672 -130.169 14.4347 -142.268 81.2832C-160.465 171.175 -69.2824 240.322 -79.2161 268.4C-92.6111 305.617 -144.4 223.198 -159.927 180.496C-175.455 137.795 -273.268 182.629 -292.04 281.632C-315.769 406.775 -214.974 537.667 -112.732 469.473Z" fill="#FF8D06" fill-opacity="0.35"></path></svg> <svg class="svg-arrow svelte-kwe3yk" width="44" height="47" viewBox="0 0 44 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40.4919 18.7885L8.94272 1.03288C4.94308 -1.21808 0 1.67214 0 6.26168V40.9658C0 45.5033 4.84225 48.3987 8.83946 46.2514L40.3886 29.3028C44.5558 27.0642 44.6143 21.1085 40.4919 18.7885Z" fill="#FF8D06"></path></svg> <div class="container-text-two svelte-kwe3yk"><h3 class="svelte-kwe3yk">Hoe werkt het?</h3> <p class="svelte-kwe3yk">Bij Buurtcampus Oost kun je de stekjeskast bezoeken om stekjes te ruilen, je kunt ook op onze website
                inzien welke
                stekjes beschikbaar zijn. Dit is een geweldige manier voor plantenliefhebbers om met elkaar in contact
                te komen en
                planten te delen. Het maakt het gemakkelijk om je favoriete stekjes te vinden en te ruilen met anderen
                in de buurt,
                zonder gedoe. Kom langs bij Buurtcampus Oost en ontmoet mede-plantenliefhebbers!</p></div> <img${add_attribute("src", Img1, 0)} alt="" aria-label="" class="svelte-kwe3yk"></div> </main>`;
});
const ButtonDeKast_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "button.svelte-dnxcbx.svelte-dnxcbx{background-color:var(--button-color);color:var(--text-color);font-family:var(--main-font);border:none;bottom:2rem;right:2rem;border-radius:var(--bradius);padding:0.5rem 1.1rem;margin-bottom:2rem;font-size:1rem;transition:0.2s;cursor:pointer}button.svelte-dnxcbx.svelte-dnxcbx:hover{background-color:var(--text-color);color:orange}button.svelte-dnxcbx:hover svg.svelte-dnxcbx{fill:orange}svg.svelte-dnxcbx.svelte-dnxcbx{margin-left:5px;transform:translateY(4px) scale(0.9);fill:var(--text-color)}@media screen and (min-width: 48rem){}@media screen and (min-width: 64rem){}",
  map: null
};
const ButtonDeKast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<a href="/maken" data-svelte-h="svelte-1pykx9u"><button class="svelte-dnxcbx">Bekijk de kast

    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-dnxcbx"><path d="M17.927 7.57075L4.41288 0.355913C2.41452 -0.710956 0 0.737063 0 3.00238V17.1041C0 19.3443 2.36618 20.7942 4.36214 19.777L17.8763 12.8901C20.0368 11.7891 20.0661 8.71276 17.927 7.57075Z" fill=""></path></svg></button> </a>`;
});
const SectionThreeHome_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "h4.svelte-49pkvr{color:var(--text-color);margin-bottom:1rem;font-size:1.5rem}p.svelte-49pkvr{color:var(--text-color)}.container-text-three.svelte-49pkvr{width:95%}@media screen and (min-width: 48rem){h4.svelte-49pkvr{font-size:2rem}.container-text-three.svelte-49pkvr{width:80%}}@media screen and (min-width: 64rem){section.svelte-49pkvr{height:80vh;display:flex;justify-content:center;align-items:center;padding:0 25vw}h4.svelte-49pkvr{font-size:5rem;font-weight:700;line-height:1em}p.svelte-49pkvr{font-size:1.1rem;margin-bottom:1rem}.container-text-three.svelte-49pkvr{width:100%;text-align:left}}",
  map: null
};
const SectionThreeHome = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<section class="svelte-49pkvr"><div class="container-text-three svelte-49pkvr"><h4 class="svelte-49pkvr" data-svelte-h="svelte-ro6yui">Over PlantSwap</h4> <p class="svelte-49pkvr" data-svelte-h="svelte-104vbmm">De Buurtcampus-Oost heeft als doel Amsterdam-Oost duurzamer, inclusiever en gezonder te maken. PlantSwap
        Amsterdam zorgt ervoor dat plantenliefhebbers elkaar ontmoeten in de bibliotheek. Daarnaast hebben planten in
        huis een positief effect op je lichamelijke en geestelijke gezondheid. Veel mensen weten niet goed hoe ze voor
        planten moeten zorgen en kopen nieuwe als ze dood gaan. In het kader van duurzaamheid, gezondheid en meer
        sociale connectie, is PlantSwap Amsterdam een plek van sociale ontmoeting, waar mensen samen leren over
        planten.</p> ${validate_component(ButtonDeKast, "ButtonDeKast").$$render($$result, {}, {}, {})}</div> </section>`;
});
const SectionFourHome_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "h5.svelte-1vlh6j8.svelte-1vlh6j8{font-size:1.5rem;color:var(--background-color);margin-bottom:1rem}p.svelte-1vlh6j8.svelte-1vlh6j8{color:var(--background-color)}main.svelte-1vlh6j8.svelte-1vlh6j8{margin-bottom:5rem}.svg-leaf.svelte-1vlh6j8.svelte-1vlh6j8{z-index:-1;position:absolute;width:40%}.svg-arrow.svelte-1vlh6j8.svelte-1vlh6j8{visibility:hidden}.container-text-four.svelte-1vlh6j8.svelte-1vlh6j8{padding-top:3rem;padding-left:2rem;padding-bottom:2rem;width:95%}.flex-wrapper-2.svelte-1vlh6j8.svelte-1vlh6j8{z-index:1;position:relative;background-color:var(--background-color-light)}.flex-wrapper-recent-stekjes.svelte-1vlh6j8.svelte-1vlh6j8{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:2rem;margin-top:2rem;padding-bottom:5rem}.flex-wrapper-recent-stekjes.svelte-1vlh6j8 img.svelte-1vlh6j8{width:15rem;border-radius:30px}@media screen and (min-width: 48rem){h5.svelte-1vlh6j8.svelte-1vlh6j8{font-size:3rem}.svg-leaf.svelte-1vlh6j8.svelte-1vlh6j8{width:20%;top:-10%}.flex-wrapper-2.svelte-1vlh6j8.svelte-1vlh6j8{display:flex;flex-direction:column;margin-top:5rem;margin-left:5%;width:90%;border-radius:40px}.container-text-four.svelte-1vlh6j8.svelte-1vlh6j8{margin-top:2rem;margin-bottom:0rem;padding-left:4rem;width:40rem;height:20rem}.flex-wrapper-recent-stekjes.svelte-1vlh6j8.svelte-1vlh6j8{flex-direction:row;flex-wrap:wrap;margin-top:0}}@media screen and (min-width: 64rem){h5.svelte-1vlh6j8.svelte-1vlh6j8{font-size:6rem;line-height:8rem;margin-bottom:2rem}.svg-leaf.svelte-1vlh6j8.svelte-1vlh6j8{width:40%;top:20%}.svg-arrow.svelte-1vlh6j8.svelte-1vlh6j8{visibility:visible;margin-top:8rem;margin-left:3rem}.flex-wrapper-2.svelte-1vlh6j8.svelte-1vlh6j8{display:flex;flex-direction:row;margin-top:5rem;margin-left:5%;width:90%;border-radius:40px;height:100vh}.container-text-four.svelte-1vlh6j8.svelte-1vlh6j8{margin-top:3rem;padding-left:4rem;width:40rem}.flex-wrapper-recent-stekjes.svelte-1vlh6j8.svelte-1vlh6j8{padding-top:8rem;width:50%}}",
  map: null
};
const SectionFourHome = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$2);
  return `<main class="svelte-1vlh6j8"><div class="flex-wrapper-2 svelte-1vlh6j8"><svg class="svg-leaf svelte-1vlh6j8" width="282" height="605" viewBox="0 0 282 605" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-112.732 469.473C-121.286 469.003 -131.96 467.556 -144.436 463.462C-173.627 453.317 -167.116 449.366 -144.072 455.464C-130.934 459.107 -109.299 457.448 -93.7835 454.628C-90.9259 451.712 -88.0683 448.797 -85.2107 445.882C-101.159 438.825 -132.739 423.042 -158.258 402.646C-193.741 374.023 -190.308 361.997 -151.699 392.366C-123.61 414.401 -91.8188 429.072 -75.7653 435.573C-74.3365 434.115 -73.4639 432.552 -72.0351 431.094C-66.8762 425.158 -61.6117 418.666 -56.3472 412.174C-68.1432 398.413 -97.7006 362.847 -124.266 326.696C-157.592 280.62 -134.777 297.046 -115.846 324.835C-101.422 346.008 -61.5366 381.804 -44.2841 397.176C-29.1525 378.149 -13.3591 358.673 3.09588 338.745C-5.70809 324.4 -25.5701 292.4 -40.4549 258.464C-60.5666 212.589 -46.7855 224.997 -26.4152 263.431C-11.5883 291.594 5.75121 315.625 13.6248 325.761C36.8785 297.327 60.2377 268.337 82.0626 241.361C75.9342 228.099 56.9636 185.321 54.5552 155.479C51.8304 127.305 57.3159 131.803 63.9342 160.715C69.5165 185.973 87.0771 220.993 91.7189 229.94C154.23 152.484 160.397 147.315 160.397 147.315C160.397 147.315 81.7563 255.132 56.6809 290.134C63.0679 295.955 74.9117 303.386 90.8308 307.557C115.093 313.31 119.811 318.814 92.9025 314.864C72.6682 312.18 55.1568 304.25 47.6863 301.105C29.5151 327.045 10.7875 352.88 -6.06041 377.918C-0.0186988 382.521 13.7336 392.043 39.348 399.781C75.3193 410.635 79.194 420.588 37.4497 409.792C9.39952 402.745 -7.76654 396.033 -16.244 392.121C-25.2097 405.978 -33.9646 418.723 -42.1631 431.573C-29.4657 446.657 5.33739 484.946 34.1648 503.088C70.808 525.593 73.9633 530.225 31.8924 508.995C-0.694179 492.445 -38.0861 461.732 -52.8741 448.556C-56.1535 453.696 -58.7713 458.386 -61.9453 462.969C-57.6198 473.585 -48.2306 490.922 -33.2028 505.872C-9.87963 528.732 -13.5809 536.097 -41.9389 509.401C-56.0651 495.775 -64.2841 484.421 -68.4752 476.136C-80.6047 506.679 -66.1706 539.954 -56.7049 553.849C3.06215 645.848 153.84 601.261 218.115 511.463C267.604 441.908 103.025 416.464 130.804 385.432C159.246 353.948 272.862 490.153 280.986 325.751C284.79 250.991 188.031 290.264 180.933 257.804C169.663 207.843 278.462 284.363 281.153 209.392C282.024 174.41 279.75 146.898 273.38 98.4425C267.011 49.9872 255.779 15.0148 255.779 15.0148C255.779 15.0148 210.488 38.1175 168.187 27.2159C125.331 16.2088 69.3436 -19.7592 32.0606 15.8095C-32.7148 77.8557 33.5925 168.79 -5.52395 165.406C-36.1919 163.049 -48.8637 84.0127 -38.1443 45.712C-26.0249 3.0672 -130.169 14.4347 -142.268 81.2832C-160.465 171.175 -69.2824 240.322 -79.2161 268.4C-92.6111 305.617 -144.4 223.198 -159.927 180.496C-175.455 137.795 -273.268 182.629 -292.04 281.632C-315.769 406.775 -214.974 537.667 -112.732 469.473Z" fill="#FF8D06" fill-opacity="0.35"></path></svg> <svg class="svg-arrow svelte-1vlh6j8" width="44" height="47" viewBox="0 0 44 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40.4919 18.7885L8.94272 1.03288C4.94308 -1.21808 0 1.67214 0 6.26168V40.9658C0 45.5033 4.84225 48.3987 8.83946 46.2514L40.3886 29.3028C44.5558 27.0642 44.6143 21.1085 40.4919 18.7885Z" fill="#FF8D06"></path></svg> <div class="container-text-four svelte-1vlh6j8" data-svelte-h="svelte-15hjtyv"><h5 class="svelte-1vlh6j8">Beschikbare stekjes</h5> <p class="svelte-1vlh6j8">Dit zijn de meest recente stekjes die je kunt ruilen, en het enige wat je hoeft te doen is
				je eigen stekje meenemen.</p></div> <div class="flex-wrapper-recent-stekjes svelte-1vlh6j8">${each(data.stekjes.slice(0, 4), (stekje) => {
    return `<a${add_attribute("href", stekje.slug, 0)}><img${add_attribute("src", stekje.fotos[0].url, 0)} alt="foto van een stekje" width="100" class="svelte-1vlh6j8"> </a>`;
  })}</div></div> </main>`;
});
const SectionBannerHome_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "h1.svelte-1ssnxlc{visibility:hidden}main.svelte-1ssnxlc{background-color:var(--background-color)\r\n    }",
  map: null
};
const SectionBannerHome = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<main class="svelte-1ssnxlc" data-svelte-h="svelte-1xvykh7"><div><h1 class="svelte-1ssnxlc">hi</h1></div> </main>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-jvsanx{background-color:var(--background-color)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `  ${validate_component(Carousel, "Carousel").$$render($$result, { data }, {}, {})} <main class="svelte-jvsanx">${validate_component(SectionOneHome, "SectionOneHome").$$render($$result, {}, {}, {})} ${validate_component(SectionTwoHome, "SectionTwoHome").$$render($$result, {}, {}, {})} ${validate_component(SectionThreeHome, "SectionThreeHome").$$render($$result, {}, {}, {})} ${validate_component(SectionFourHome, "SectionFourHome").$$render($$result, { data }, {}, {})} ${validate_component(SectionBannerHome, "SectionBannerHome").$$render($$result, {}, {}, {})}</main> `;
});
export {
  Page as default
};
