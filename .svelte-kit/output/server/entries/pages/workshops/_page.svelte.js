import { c as create_ssr_component, d as add_attribute, v as validate_component, f as each, e as escape } from "../../../chunks/ssr.js";
import "prettier";
/* empty css                                                        */import { V as Vector } from "../../../chunks/Location.svelte_svelte_type_style_lang.js";
import { V as VectorPlant } from "../../../chunks/vectorplant.js";
import { N as NavDark, M as MobileMenu, F as Footer } from "../../../chunks/MobileMenu.js";
const css$5 = {
  code: "header.svelte-1tr3h29{position:relative;display:flex;justify-content:center;align-items:center;width:100%;height:90vh}div.svelte-1tr3h29{position:absolute;width:100%;height:100%;z-index:-1}header.svelte-1tr3h29::after{content:'';position:absolute;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.117)}img.svelte-1tr3h29{width:100%;height:100%;object-fit:cover}h1.svelte-1tr3h29{color:white;font-size:6vw;z-index:2}",
  map: null
};
const HeaderImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data.workshopHeaders);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$5);
  return `<header class="svelte-1tr3h29"><div class="svelte-1tr3h29"><img${add_attribute("src", data.workshopHeaders[0].image.url, 0)} alt="" class="svelte-1tr3h29"></div> <h1 class="svelte-1tr3h29" data-svelte-h="svelte-1oyquew">Workshops</h1> </header>`;
});
const css$4 = {
  code: "p.svelte-xeiwej{width:60%}",
  map: null
};
const Pworkshops = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<p class="svelte-xeiwej" data-svelte-h="svelte-wj6jfg">Natuurlijk! Workshops zijn fantastische leermogelijkheden waarbij deelnemers praktische
	vaardigheden kunnen verwerven, nieuwe kennis kunnen opdoen en vaak ook nieuwe mensen kunnen
	ontmoeten. Het idee achter jouw website om een overzicht te bieden van beschikbare workshops is
	geweldig, omdat het mensen kan helpen om gemakkelijk toegang te krijgen tot deze waardevolle
	leermogelijkheden. Ontdek en Leer met Onze Workshopgids Welkom bij Plantswap, dé plek om workshops
	te ontdekken die jouw vaardigheden kunnen verbeteren, je passies kunnen verdiepen en je horizon
	kunnen verbreden.
</p>`;
});
const css$3 = {
  code: ".info-workshop.svelte-1xckenp.svelte-1xckenp{position:relative;display:flex;gap:var(--padding);background-color:var(--background-color-light);border-radius:var(--bradius);height:15rem;margin:var(--margin) var(--margin) 0 var(--margin);padding:var(--padding);overflow:hidden}.info-paragraph.svelte-1xckenp.svelte-1xckenp{width:60%}#one.svelte-1xckenp.svelte-1xckenp{position:absolute;top:10rem;right:18rem}#two.svelte-1xckenp.svelte-1xckenp{position:absolute;top:-150px;right:10rem;transform:rotate(250deg)}#three.svelte-1xckenp.svelte-1xckenp{position:absolute;top:6rem;right:-7rem;transform:rotate(-10deg)}@media screen and (max-width: 767px){.info-workshop.svelte-1xckenp.svelte-1xckenp{width:100%;margin:0;margin-top:2rem;padding:1rem;height:100%}.vector.svelte-1xckenp img.svelte-1xckenp{width:30px}.info-paragraph.svelte-1xckenp.svelte-1xckenp{width:100%}}",
  map: null
};
const InfoWorkshop$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div class="info-workshop svelte-1xckenp"><div class="vector svelte-1xckenp" data-svelte-h="svelte-3iwfkp"><img${add_attribute("src", Vector, 0)} alt="icon info tekst" class="svelte-1xckenp"></div> ${validate_component(Pworkshops, "Paragraph").$$render($$result, {}, {}, {})} <div class="info-paragraph svelte-1xckenp" data-svelte-h="svelte-jwmha0"><img id="one"${add_attribute("src", VectorPlant, 0)} alt="incon plant" class="svelte-1xckenp"> <img id="two"${add_attribute("src", VectorPlant, 0)} alt="incon plant" class="svelte-1xckenp"> <img id="three"${add_attribute("src", VectorPlant, 0)} alt="incon plant" class="svelte-1xckenp"></div> </div>`;
});
const InfoWorkshop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(InfoWorkshop$1, "Info").$$render($$result, {}, {}, {})}`;
});
const css$2 = {
  code: ".background-image.svelte-1duaj7u{position:absolute;inset:0;height:100%;width:100%;z-index:-1}img.svelte-1duaj7u{border-radius:var(--bradius);height:100%;width:100%;object-fit:cover}",
  map: null
};
const ImageWorkshop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { workshop } = $$props;
  if ($$props.workshop === void 0 && $$bindings.workshop && workshop !== void 0)
    $$bindings.workshop(workshop);
  $$result.css.add(css$2);
  return `<div class="background-image svelte-1duaj7u"><img${add_attribute("src", workshop.foto[0].url, 0)} alt="" class="svelte-1duaj7u"> </div>`;
});
const css$1 = {
  code: "button.svelte-ziybio.svelte-ziybio{position:absolute;background-color:var(--button-color);color:var(--text-color);font-family:var(--main-font);border:none;bottom:2rem;right:2rem;border-radius:var(--bradius);padding:0.5rem 1.1rem;font-size:1rem;transition:0.2s;cursor:pointer}button.svelte-ziybio.svelte-ziybio:hover{background-color:var(--text-color);color:orange}button.svelte-ziybio:hover svg.svelte-ziybio{fill:orange}svg.svelte-ziybio.svelte-ziybio{margin-left:5px;transform:translateY(4px) scale(0.9);fill:var(--text-color)}",
  map: null
};
const ButtonWorkshop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<button class="svelte-ziybio" data-svelte-h="svelte-1qmany4">Meld je aan <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-ziybio"><path d="M17.927 7.57075L4.41288 0.355913C2.41452 -0.710956 0 0.737063 0 3.00238V17.1041C0 19.3443 2.36618 20.7942 4.36214 19.777L17.8763 12.8901C20.0368 11.7891 20.0661 8.71276 17.927 7.57075Z" fill=""></path></svg> </button>`;
});
const css = {
  code: "section.svelte-1xnyp39.svelte-1xnyp39{display:flex;flex-direction:column;justify-content:space-between;border-radius:var(--bradius);height:90vh;margin:var(--margin);padding:var(--padding);overflow:hidden;position:sticky;top:2rem}section.svelte-1xnyp39.svelte-1xnyp39::after{content:'';position:absolute;background-color:rgba(0, 0, 0, 0.07);z-index:-1;inset:0}h2.svelte-1xnyp39.svelte-1xnyp39{color:white;font-size:32px}ul.svelte-1xnyp39.svelte-1xnyp39{color:white;list-style:none;font-size:20px}i.svelte-1xnyp39.svelte-1xnyp39{margin-right:1rem}@media screen and (min-width: 1800px){div.svelte-1xnyp39.svelte-1xnyp39{display:flex;gap:2rem;padding:2rem}section.svelte-1xnyp39.svelte-1xnyp39{width:100%;margin:0}}@media screen and (max-width: 767px){section.svelte-1xnyp39.svelte-1xnyp39{width:100%;margin:0;margin-top:1rem;margin-bottom:1rem}section.svelte-1xnyp39 ul.svelte-1xnyp39{padding-bottom:5rem}}",
  map: null
};
const CardWorkshop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="svelte-1xnyp39">${each(data.workshops, (workshop) => {
    return `<section class="svelte-1xnyp39">${validate_component(ImageWorkshop, "Background").$$render($$result, { workshop }, {}, {})} <h2 class="svelte-1xnyp39">${escape(workshop.naam)}</h2> <ul class="svelte-1xnyp39"><li><i class="fa-solid fa-location-crosshairs svelte-1xnyp39" style="color: #ffffff;"></i>${escape(workshop.locatie)}</li> <li><i class="fa-solid fa-sack-dollar svelte-1xnyp39" style="color: #ffffff;"></i>${escape(workshop.kosten)}</li> <li><i class="fa-solid fa-calendar-days svelte-1xnyp39" style="color: #ffffff;"></i>${escape(workshop.datum)}</li></ul> ${validate_component(ButtonWorkshop, "Button").$$render($$result, {}, {}, {})} </section>`;
  })} </div>`;
});
const OverviewWorkshops = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(CardWorkshop, "Card").$$render($$result, { data }, {}, {})}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(NavDark, "NavDark").$$render($$result, {}, {}, {})} ${validate_component(MobileMenu, "MobileMenu").$$render($$result, {}, {}, {})} ${validate_component(HeaderImage, "Header").$$render($$result, { data }, {}, {})} ${validate_component(InfoWorkshop, "Info").$$render($$result, {}, {}, {})} ${validate_component(OverviewWorkshops, "Card").$$render($$result, { data }, {}, {})} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
