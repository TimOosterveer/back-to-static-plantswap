import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import "prettier";
/* empty css                                                        */import { N as NavDark, M as MobileMenu, F as Footer } from "../../../chunks/MobileMenu.js";
import { V as Vector } from "../../../chunks/Location.svelte_svelte_type_style_lang.js";
import { V as VectorPlant } from "../../../chunks/vectorplant.js";
const css$6 = {
  code: "header.svelte-t402zl{position:relative;display:flex;justify-content:center;align-items:center;width:100%;height:90vh}div.svelte-t402zl{position:absolute;width:100%;height:100%;z-index:-1}header.svelte-t402zl::after{content:'';position:absolute;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.117)}img.svelte-t402zl{width:100%;height:100%;object-fit:cover}h1.svelte-t402zl{color:white;font-size:6vw;z-index:2}",
  map: null
};
const KastImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$6);
  return `<header class="svelte-t402zl"><div class="svelte-t402zl"><img${add_attribute("src", data.kastHeaders[0].image.url, 0)} alt="" class="svelte-t402zl"></div> <h1 class="svelte-t402zl" data-svelte-h="svelte-54elew">De Kast</h1> </header>`;
});
const img1 = "/_app/immutable/assets/tweede.817ff5ea.avif";
const css$5 = {
  code: "section.svelte-pj7of3{position:sticky;top:0;padding:2em;height:90vh;width:100%;overflow:hidden;color:var(--main-offwhite);color:rgb(255, 217, 184);margin-bottom:55vh}.wrapper-block.svelte-pj7of3{height:100%;width:100%;background-color:rgb(73, 27, 2);display:flex;border-radius:1em;padding:2em}.left-content.svelte-pj7of3{width:100%}.right-content.svelte-pj7of3{height:100%;width:100%}img.svelte-pj7of3{height:100%;width:100%;object-fit:cover;border-radius:1em}h3.svelte-pj7of3{font-size:5em;font-weight:900;max-width:90%;line-height:1em;margin-bottom:1.2rem}p.svelte-pj7of3{max-width:75%}@media screen and (max-width: 1122px){}@media screen and (max-width: 700px){h3.svelte-pj7of3{font-size:2.5em}p.svelte-pj7of3{max-width:100%;padding-bottom:1em}img.svelte-pj7of3{height:60%;width:100%;object-fit:cover;border-radius:1em}.wrapper-block.svelte-pj7of3{flex-direction:column;padding:1em;justify-content:space-between;align-items:center}}",
  map: null
};
const TheMaking = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<section class="svelte-pj7of3" data-svelte-h="svelte-3r2gff"><div class="wrapper-block svelte-pj7of3"><div class="left-content svelte-pj7of3"><h3 class="svelte-pj7of3">The making of... de kast</h3> <p class="svelte-pj7of3">Het proces van het stekken van planten is een boeiende manier om nieuwe planten te laten
				groeien uit delen van bestaande exemplaren. Het begint met het selecteren van gezonde
				moederplanten. Knip een stukje van de plant, meestal een takje of een blad, met scherpe,

                <br> <br>
				schone scharen of een mes. Zorg ervoor dat het stekje minstens één knooppunt (waar bladeren
				groeien) heeft. Verwijder eventuele bladeren aan de onderkant van het stekje om wortelgroei
				te bevorderen.</p></div> <div class="right-content svelte-pj7of3"><img${add_attribute("src", img1, 0)} alt="" class="svelte-pj7of3"></div></div> </section>`;
});
const img$2 = "/_app/immutable/assets/bovenste.63dbcf15.avif";
const css$4 = {
  code: "section.svelte-1tgfvmx{position:sticky;top:2em;padding:2em;height:90vh;width:100%;overflow:hidden;color:rgb(73, 27, 2);margin-bottom:55vh}.wrapper-block.svelte-1tgfvmx{height:100%;width:100%;background-color:rgb(255, 154, 65);display:flex;border-radius:1em;padding:2em}.left-content.svelte-1tgfvmx{width:100%}.right-content.svelte-1tgfvmx{height:100%;width:100%;padding-left:2em}img.svelte-1tgfvmx{height:100%;width:100%;object-fit:cover;border-radius:1em}h3.svelte-1tgfvmx{font-size:5em;font-weight:900;max-width:90%;line-height:1em;margin-bottom:1.2rem}p.svelte-1tgfvmx{max-width:75%}@media screen and (max-width: 1122px){}@media screen and (max-width: 700px){h3.svelte-1tgfvmx{font-size:2.5em}p.svelte-1tgfvmx{max-width:100%;padding-bottom:1em}img.svelte-1tgfvmx{height:100%;width:100%;object-fit:cover;border-radius:1em}.wrapper-block.svelte-1tgfvmx{flex-direction:column;padding:1em;justify-content:space-between;align-items:center}.left-content.svelte-1tgfvmx{height:35%}.right-content.svelte-1tgfvmx{padding-left:0em;padding-top:1em}}",
  map: null
};
const TheMaking2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<section class="svelte-1tgfvmx" data-svelte-h="svelte-1ab9m7t"><div class="wrapper-block svelte-1tgfvmx"><div class="left-content svelte-1tgfvmx"><img${add_attribute("src", img$2, 0)} alt="" class="svelte-1tgfvmx"></div> <div class="right-content svelte-1tgfvmx"><h3 class="svelte-1tgfvmx">Toen de kast gemaakt werd...</h3> <p class="svelte-1tgfvmx">Het proces van het stekken van planten is een boeiende manier om nieuwe planten te laten
				groeien uit delen van bestaande exemplaren. Het begint met het selecteren van gezonde
				moederplanten. Knip een stukje van de plant, meestal een takje of een blad, met scherpe,
				schone scharen of een mes. Zorg ervoor dat het stekje minstens één knooppunt (waar bladeren
				groeien) heeft. Verwijder eventuele bladeren aan de onderkant van het stekje om wortelgroei
				te bevorderen.</p></div></div> </section>`;
});
const img$1 = "/_app/immutable/assets/derde.bbba9ac1.avif";
const css$3 = {
  code: "section.svelte-13krui{position:sticky;top:4em;padding:2em;height:90vh;width:100%;overflow:hidden;color:rgb(255, 217, 184);margin-bottom:55vh}.wrapper-block.svelte-13krui{height:100%;width:100%;background-color:rgb(59, 89, 62);display:flex;border-radius:1em;padding:2em}.left-content.svelte-13krui{width:100%}.right-content.svelte-13krui{height:100%;width:100%;padding-left:2em}img.svelte-13krui{height:100%;width:100%;object-fit:cover;border-radius:1em}h3.svelte-13krui{font-size:5em;font-weight:900;max-width:90%;line-height:1em;margin-bottom:1.2rem}p.svelte-13krui{max-width:75%}@media screen and (max-width: 1122px){}@media screen and (max-width: 700px){h3.svelte-13krui{font-size:2.5em}p.svelte-13krui{max-width:100%;padding-bottom:1em}img.svelte-13krui{height:100%;width:100%;object-fit:cover;border-radius:1em}.wrapper-block.svelte-13krui{flex-direction:column;padding:1em;justify-content:space-between;align-items:center}.left-content.svelte-13krui{height:35%}.right-content.svelte-13krui{padding-left:0em;padding-top:1em}}",
  map: null
};
const TheMaking3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<section class="svelte-13krui" data-svelte-h="svelte-2qi4ts"><div class="wrapper-block svelte-13krui"><div class="left-content svelte-13krui"><img${add_attribute("src", img$1, 0)} alt="" class="svelte-13krui"></div> <div class="right-content svelte-13krui"><h3 class="svelte-13krui">... met heel veel hulp</h3> <p class="svelte-13krui">Het proces van het stekken van planten is een boeiende manier om nieuwe planten te laten
				groeien uit delen van bestaande exemplaren. Het begint met het selecteren van gezonde
				moederplanten. Knip een stukje van de plant, meestal een takje of een blad, met scherpe,
				schone scharen of een mes. Zorg ervoor dat het stekje minstens één knooppunt (waar bladeren
				groeien) heeft. Verwijder eventuele bladeren aan de onderkant van het stekje om wortelgroei
				te bevorderen.</p></div></div> </section>`;
});
const img = "/_app/immutable/assets/laatste.e2e2a484.avif";
const css$2 = {
  code: "section.svelte-1daecxa{position:sticky;top:6em;padding:2em;height:90vh;width:100%;color:rgb(59, 89, 62);margin-bottom:55vh}.wrapper-block.svelte-1daecxa{height:100%;width:100%;background-color:rgb(255, 217, 184);display:flex;border-radius:1em;padding:2em}.left-content.svelte-1daecxa{width:100%}.right-content.svelte-1daecxa{height:100%;width:100%}img.svelte-1daecxa{height:100%;width:100%;object-fit:cover;border-radius:1em}h3.svelte-1daecxa{font-size:5em;font-weight:900;max-width:90%;line-height:1em;margin-bottom:1.2rem}p.svelte-1daecxa{max-width:75%}@media screen and (max-width: 1122px){}@media screen and (max-width: 700px){h3.svelte-1daecxa{font-size:2.5em}p.svelte-1daecxa{max-width:100%;padding-bottom:1em}img.svelte-1daecxa{height:60%;width:100%;object-fit:cover;border-radius:1em}.wrapper-block.svelte-1daecxa{flex-direction:column;padding:1em;justify-content:space-between;align-items:center}}",
  map: null
};
const TheMaking4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<section class="svelte-1daecxa" data-svelte-h="svelte-1omz6su"><div class="wrapper-block svelte-1daecxa"><div class="left-content svelte-1daecxa"><h3 class="svelte-1daecxa">En nu wordt de kast met liefde gebruikt!</h3> <p class="svelte-1daecxa">Het proces van het stekken van planten is een boeiende manier om nieuwe planten te laten
				groeien uit delen van bestaande exemplaren. Het begint met het selecteren van gezonde
				moederplanten. Knip een stukje van de plant, meestal een takje of een blad, met scherpe,
				schone scharen of een mes.</p></div> <div class="right-content svelte-1daecxa"><img${add_attribute("src", img, 0)} alt="" class="svelte-1daecxa"></div></div> </section>`;
});
const Pkast_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "p.svelte-xeiwej{width:60%}",
  map: null
};
const Pkast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<p class="svelte-xeiwej" data-svelte-h="svelte-b9s0q7">Natuurlijk! Workshops zijn fantastische leermogelijkheden waarbij deelnemers praktische
	vaardigheden kunnen verwerven, nieuwe kennis kunnen opdoen en vaak ook nieuwe mensen kunnen
	ontmoeten. Het idee achter jouw website om een overzicht te bieden van beschikbare workshops is
	geweldig.
</p>`;
});
const InfoKast_svelte_svelte_type_style_lang = "";
const css = {
  code: ".info-workshop.svelte-1xckenp.svelte-1xckenp{position:relative;display:flex;gap:var(--padding);background-color:var(--background-color-light);border-radius:var(--bradius);height:15rem;margin:var(--margin) var(--margin) 0 var(--margin);padding:var(--padding);overflow:hidden}.info-paragraph.svelte-1xckenp.svelte-1xckenp{width:60%}#one.svelte-1xckenp.svelte-1xckenp{position:absolute;top:10rem;right:18rem}#two.svelte-1xckenp.svelte-1xckenp{position:absolute;top:-150px;right:10rem;transform:rotate(250deg)}#three.svelte-1xckenp.svelte-1xckenp{position:absolute;top:6rem;right:-7rem;transform:rotate(-10deg)}@media screen and (max-width: 767px){.info-workshop.svelte-1xckenp.svelte-1xckenp{width:100%;margin:0;margin-top:2rem;padding:1rem;height:100%}.vector.svelte-1xckenp img.svelte-1xckenp{width:30px}.info-paragraph.svelte-1xckenp.svelte-1xckenp{width:100%}}",
  map: null
};
const InfoKast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="info-workshop svelte-1xckenp"><div class="vector svelte-1xckenp" data-svelte-h="svelte-3iwfkp"><img${add_attribute("src", Vector, 0)} alt="icon info tekst" class="svelte-1xckenp"></div> ${validate_component(Pkast, "ParagraphKast").$$render($$result, {}, {}, {})} <div class="info-paragraph svelte-1xckenp" data-svelte-h="svelte-jwmha0"><img id="one"${add_attribute("src", VectorPlant, 0)} alt="incon plant" class="svelte-1xckenp"> <img id="two"${add_attribute("src", VectorPlant, 0)} alt="incon plant" class="svelte-1xckenp"> <img id="three"${add_attribute("src", VectorPlant, 0)} alt="incon plant" class="svelte-1xckenp"></div> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(NavDark, "NavDark").$$render($$result, {}, {}, {})} ${validate_component(MobileMenu, "MobileMenu").$$render($$result, {}, {}, {})} ${validate_component(KastImage, "HeaderKast").$$render($$result, { data }, {}, {})} ${validate_component(InfoKast, "InfoKast").$$render($$result, {}, {}, {})} ${validate_component(TheMaking, "TheMaking").$$render($$result, {}, {}, {})} ${validate_component(TheMaking2, "TheMaking2").$$render($$result, {}, {}, {})} ${validate_component(TheMaking3, "TheMaking3").$$render($$result, {}, {}, {})} ${validate_component(TheMaking4, "TheMaking4").$$render($$result, {}, {}, {})} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
