import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { N as NavDark, M as MobileMenu, F as Footer } from "../../../chunks/MobileMenu.js";
import { V as VectorPlant } from "../../../chunks/vectorplant.js";
const imageStekje_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "section.svelte-1avcz4y{position:relative;width:100%;background-color:var(--background-color)}.image-section.svelte-1avcz4y{height:90vh}img.svelte-1avcz4y{object-fit:cover;width:100%;height:100%}h1.svelte-1avcz4y{position:absolute;bottom:2rem;left:2rem;color:white;font-size:5vw}",
  map: null
};
const ImageStekje = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$1);
  return `<section class="image-section svelte-1avcz4y"><img${add_attribute("src", data.stekje.fotos[0].url, 0)} alt="${"foto van " + escape(data.naam, true)}" class="svelte-1avcz4y"> <h1 class="svelte-1avcz4y">${escape(data.stekje.naam)}</h1> </section>`;
});
const StekjeDescription_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-atnyb0.svelte-atnyb0.svelte-atnyb0.svelte-atnyb0{position:relative;width:100%;background-color:var(--background-color)}h2.svelte-atnyb0.svelte-atnyb0.svelte-atnyb0.svelte-atnyb0{color:var(--background-color);font-size:2.7vw}.left.svelte-atnyb0 p.svelte-atnyb0.svelte-atnyb0.svelte-atnyb0{font-size:1.2em;margin-top:15px}.container.svelte-atnyb0.svelte-atnyb0.svelte-atnyb0.svelte-atnyb0{padding:2rem}.stekje-container.svelte-atnyb0.svelte-atnyb0.svelte-atnyb0.svelte-atnyb0{position:relative;background-color:#f9e9c2;width:100%;border-radius:var(--bradius);display:flex;padding:2rem;justify-content:space-between}.left.svelte-atnyb0.svelte-atnyb0.svelte-atnyb0.svelte-atnyb0{position:sticky;top:1rem;width:50%;height:89vh;padding-right:5%;overflow:hidden}.beschrijving-tag.svelte-atnyb0.svelte-atnyb0.svelte-atnyb0.svelte-atnyb0{display:flex;align-items:center}.beschrijving-tag.svelte-atnyb0 svg.svelte-atnyb0.svelte-atnyb0.svelte-atnyb0{margin-right:10px}#one.svelte-atnyb0.svelte-atnyb0.svelte-atnyb0.svelte-atnyb0{position:absolute;bottom:0;left:5rem;width:350px;height:350px}.right.svelte-atnyb0.svelte-atnyb0.svelte-atnyb0.svelte-atnyb0{width:50%;padding:0}.accordion.svelte-atnyb0.svelte-atnyb0.svelte-atnyb0.svelte-atnyb0{width:100%;border-radius:var(--bradius)}.accordion.svelte-atnyb0 li.svelte-atnyb0.svelte-atnyb0.svelte-atnyb0{list-style:none;padding:10px;display:flex;flex-direction:column;margin-bottom:1rem;width:100%;background-color:#fbc980;border-radius:var(--bradius)}.accordion.svelte-atnyb0 li label.svelte-atnyb0.svelte-atnyb0.svelte-atnyb0{display:flex;align-items:center;color:var(--background-color);text-transform:uppercase;font-weight:600;padding:7px;cursor:pointer}label.svelte-atnyb0.svelte-atnyb0.svelte-atnyb0.svelte-atnyb0::before{content:'+';color:black;font-size:25px;margin-right:5px;margin-bottom:5px}.accordion.svelte-atnyb0 input[type='radio'].svelte-atnyb0:checked+label.svelte-atnyb0.svelte-atnyb0::before{content:'-'}input[type='radio'].svelte-atnyb0.svelte-atnyb0.svelte-atnyb0.svelte-atnyb0{display:none}.accordion.svelte-atnyb0 .content.svelte-atnyb0.svelte-atnyb0.svelte-atnyb0{color:black;padding:0 10px;max-height:0;overflow:hidden;transition:max-height 0.7s,\n        padding 0.5s}.accordion.svelte-atnyb0 input[type='radio'].svelte-atnyb0:checked+label.svelte-atnyb0+.content.svelte-atnyb0{max-height:400px;padding:10px 10px 20px}@media screen and (max-width: 768px){.stekje-container.svelte-atnyb0.svelte-atnyb0.svelte-atnyb0.svelte-atnyb0{display:grid;align-content:space-evenly}.left.svelte-atnyb0.svelte-atnyb0.svelte-atnyb0.svelte-atnyb0,.right.svelte-atnyb0.svelte-atnyb0.svelte-atnyb0.svelte-atnyb0{position:static;height:fit-content;width:100%}#one.svelte-atnyb0.svelte-atnyb0.svelte-atnyb0.svelte-atnyb0{display:none}.accordion.svelte-atnyb0.svelte-atnyb0.svelte-atnyb0.svelte-atnyb0{margin-top:20px}}",
  map: null
};
const StekjeDescription = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<section class="container svelte-atnyb0"><div class="stekje-container svelte-atnyb0"><img id="one"${add_attribute("src", VectorPlant, 0)} alt="incon plant" class="svelte-atnyb0"> <div class="left svelte-atnyb0"><div class="beschrijving-tag svelte-atnyb0" data-svelte-h="svelte-1b5qyig"><svg width="25" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-atnyb0"><path d="M20.5 8.16988C23.8333 10.0944 23.8333 14.9056 20.5 16.8301L7.74999 24.1913C4.41666 26.1158 0.249999 23.7102 0.249999 19.8612L0.25 5.13877C0.25 1.28977 4.41667 -1.11584 7.75 0.808657L20.5 8.16988Z" fill="#F26F21"></path></svg> <h2 class="svelte-atnyb0">Beschrijving</h2></div> <p class="svelte-atnyb0">${escape(data.stekje.beschrijving)}</p></div> <div class="right svelte-atnyb0"><ul class="accordion svelte-atnyb0"><li class="svelte-atnyb0"><input type="radio" name="accordion" id="first" checked class="svelte-atnyb0"> <label for="first" class="svelte-atnyb0" data-svelte-h="svelte-cm7u6i">Landherkomst</label> <div class="content svelte-atnyb0"><p>${escape(data.stekje.landvanherkomst)}</p></div></li> <li class="svelte-atnyb0"><input type="radio" name="accordion" id="second" class="svelte-atnyb0"> <label for="second" class="svelte-atnyb0" data-svelte-h="svelte-zesc8g">Voeding</label> <div class="content svelte-atnyb0"><p>${escape(data.stekje.voeding)}</p></div></li> <li class="svelte-atnyb0"><input type="radio" name="accordion" id="fifth" class="svelte-atnyb0"> <label for="fifth" class="svelte-atnyb0" data-svelte-h="svelte-6djzjp">Temperatuur</label> <div class="content svelte-atnyb0"><p>${escape(data.stekje.temperatuur)}</p></div></li> <li class="svelte-atnyb0"><input type="radio" name="accordion" id="fourth" class="svelte-atnyb0"> <label for="fourth" class="svelte-atnyb0" data-svelte-h="svelte-76foes">Giftig</label> <div class="content svelte-atnyb0"><p>${escape(data.stekje.giftig)}</p></div></li> <li class="svelte-atnyb0"><input type="radio" name="accordion" id="third" class="svelte-atnyb0"> <label for="third" class="svelte-atnyb0" data-svelte-h="svelte-1knflmy">Verpotten</label> <div class="content svelte-atnyb0"><p>${escape(data.stekje.verpotten)}</p></div></li> <li class="svelte-atnyb0"><input type="radio" name="accordion" id="sixth" class="svelte-atnyb0"> <label for="sixth" class="svelte-atnyb0" data-svelte-h="svelte-1cpjs1m">Watergeven</label> <div class="content svelte-atnyb0"><p>${escape(data.stekje.watergeven)}</p></div></li> <li class="svelte-atnyb0"><input type="radio" name="accordion" id="seventh" class="svelte-atnyb0"> <label for="seventh" class="svelte-atnyb0" data-svelte-h="svelte-1fttcce">Zonlicht</label> <div class="content svelte-atnyb0"><p>${escape(data.stekje.zonlicht)}</p></div></li> <li class="svelte-atnyb0"><input type="radio" name="accordion" id="eighth" class="svelte-atnyb0"> <label for="eighth" class="svelte-atnyb0" data-svelte-h="svelte-1sgi9d6">Stekken</label> <div class="content svelte-atnyb0"><p>${escape(data.stekje.stekken)}</p></div></li></ul></div></div> </section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(NavDark, "NavDark").$$render($$result, {}, {}, {})} ${validate_component(MobileMenu, "MobileMenu").$$render($$result, {}, {}, {})} ${validate_component(ImageStekje, "ImageStekje").$$render($$result, { data }, {}, {})} ${validate_component(StekjeDescription, "StekjeDescription").$$render($$result, { data }, {}, {})} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};