import { c as create_ssr_component, d as add_attribute, v as validate_component, f as each, e as escape, h as null_to_empty } from "../../../chunks/ssr.js";
import "prettier";
/* empty css                                                        */import { N as NavDark, M as MobileMenu, F as Footer } from "../../../chunks/MobileMenu.js";
import { V as Vector } from "../../../chunks/Location.svelte_svelte_type_style_lang.js";
import { V as VectorPlant } from "../../../chunks/vectorplant.js";
const css$3 = {
  code: "header.svelte-1s7090n{position:relative;display:flex;justify-content:center;align-items:center;width:100%;height:90vh}div.svelte-1s7090n{position:absolute;width:100%;height:100%;z-index:-1}header.svelte-1s7090n::after{content:'';position:absolute;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.117)}img.svelte-1s7090n{width:100%;height:100%;object-fit:cover}h1.svelte-1s7090n{color:white;font-size:6vw;z-index:2}",
  map: null
};
const ImageOverzicht = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$3);
  return `<header class="svelte-1s7090n"><div class="svelte-1s7090n"><img${add_attribute("src", data.stekjesHeaders[0].image.url, 0)} alt="" class="svelte-1s7090n"></div> <h1 class="svelte-1s7090n" data-svelte-h="svelte-hkf0vv">Stekjes</h1> </header>`;
});
const css$2 = {
  code: ".info-Stekjes.svelte-108z02r.svelte-108z02r{position:relative;display:flex;gap:var(--padding);background-color:var(--background-color-light);border-radius:var(--bradius);width:24.2%;height:70vh;padding:var(--padding);overflow:hidden;margin-top:1rem}.info-Stekjes.svelte-108z02r p.svelte-108z02r{z-index:10}.info-paragraph.svelte-108z02r.svelte-108z02r{width:60%}#one.svelte-108z02r.svelte-108z02r{position:absolute;top:10rem;right:18rem}#two.svelte-108z02r.svelte-108z02r{position:absolute;top:-150px;right:10rem;transform:rotate(250deg)}#three.svelte-108z02r.svelte-108z02r{position:absolute;top:6rem;right:-7rem;transform:rotate(-10deg)}@media(max-width: 750px){.info-Stekjes.svelte-108z02r.svelte-108z02r{width:100%}}",
  map: null
};
const InfoStekjes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="info-Stekjes svelte-108z02r" data-svelte-h="svelte-1qopvxh"><div class="vector"><img${add_attribute("src", Vector, 0)} alt="icon info tekst"></div> <p class="svelte-108z02r">Heb jij een of meerdere plantenstekjes over en zou je die graag willen ruilen voor een nieuwe plantje? Bekijk hieronder ons aanbod.</p> <div class="info-paragraph svelte-108z02r"><img id="one"${add_attribute("src", VectorPlant, 0)} alt="incon plant" class="svelte-108z02r"> <img id="two"${add_attribute("src", VectorPlant, 0)} alt="incon plant" class="svelte-108z02r"> <img id="three"${add_attribute("src", VectorPlant, 0)} alt="incon plant" class="svelte-108z02r"></div> </div>`;
});
const css$1 = {
  code: "article.svelte-prlj9g.svelte-prlj9g{position:relative;width:24.2%;height:70vh;padding:1rem;border-radius:var(--bradius);overflow:hidden;margin-top:1rem}h3.svelte-prlj9g.svelte-prlj9g{position:relative;color:white;z-index:5;font-size:2rem;line-height:1.5em}article.svelte-prlj9g a.svelte-prlj9g{position:absolute;bottom:1rem;left:1rem;text-decoration:none;color:white;background-color:var(--button-color);padding:0.5rem 1rem;border-radius:var(--bradius);cursor:pointer;z-index:5;transition:0.2s}a.svelte-prlj9g.svelte-prlj9g:hover{background-color:white;color:var(--button-color)}img.svelte-prlj9g.svelte-prlj9g{position:absolute;left:0;top:0;width:100%;height:100%;object-fit:cover}article.svelte-prlj9g.svelte-prlj9g::after{content:'';position:absolute;width:100%;height:100%;top:0;right:0;background-color:rgba(0, 0, 0, 0.199);z-index:1}@media(max-width: 750px){article.svelte-prlj9g.svelte-prlj9g{width:100%}}",
  map: null
};
const StekjesCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$1);
  return `${validate_component(InfoStekjes, "StekjesInfo").$$render($$result, {}, {}, {})} ${each(data.stekjes, (stekje) => {
    return `<article class="${escape(null_to_empty(stekje.categories.naam), true) + " svelte-prlj9g"}"><img${add_attribute("src", stekje.fotos[0].url, 0)} alt="" class="svelte-prlj9g"> <a${add_attribute("href", stekje.slug, 0)} class="svelte-prlj9g">Bekijk stekje <i class="fa-solid fa-play" style="color: #ffffff;"></i></a> <h3 class="svelte-prlj9g">${escape(stekje.naam)}</h3> </article>`;
  })}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-olgyn6{display:flex;flex-direction:row;flex-wrap:wrap;gap:1%;margin:1rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(NavDark, "NavDark").$$render($$result, {}, {}, {})} ${validate_component(MobileMenu, "MobileMenu").$$render($$result, {}, {}, {})} ${validate_component(ImageOverzicht, "HeaderStekje").$$render($$result, { data }, {}, {})} <main class="svelte-olgyn6"> ${validate_component(StekjesCard, "StekjeCard").$$render($$result, { data }, {}, {})}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
