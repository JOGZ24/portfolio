import { c as create_ssr_component, b as subscribe, f as each, e as escape, d as add_attribute } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
const css = {
  code: 'a.svelte-25d5r5.svelte-25d5r5{color:white}.img.svelte-25d5r5.svelte-25d5r5{display:grid;grid-template-columns:1fr 1fr;margin:0}.img.svelte-25d5r5>img.svelte-25d5r5{width:100%;height:auto}div.svelte-25d5r5.svelte-25d5r5{font-family:"Inter", sans-serif;font-optical-sizing:auto;font-weight:10;font-style:normal;font-variation-settings:"slnt" 0}h1.svelte-25d5r5.svelte-25d5r5{font-size:3.5em;text-align:center}.all.svelte-25d5r5.svelte-25d5r5{margin:10px}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let results = data.projets;
  let project_id = $page.params.slug;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="all svelte-25d5r5">${each(results, (projet) => {
    return `${projet.id == project_id ? `<h1 class="svelte-25d5r5">${escape(projet.nom)}</h1> <div class="img svelte-25d5r5"><img alt=""${add_attribute("src", projet.image1, 0)} class="svelte-25d5r5"> <img alt=""${add_attribute("src", projet.image2, 0)} class="svelte-25d5r5"></div> <p>${escape(projet.description2)}</p> <div class="svelte-25d5r5"><h2><u data-svelte-h="svelte-1udwa0s">Compétences éprouvées : </u>${escape(projet.competences)}</h2> <h3><u><a href="${" " + escape(projet.lien, true)}" class="svelte-25d5r5">Lien vers le projet </a></u></h3> </div>` : ``}`;
  })} </div>`;
});
export {
  Page as default
};
