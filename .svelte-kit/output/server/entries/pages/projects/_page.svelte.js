import { c as create_ssr_component, e as escape, d as add_attribute, f as each, v as validate_component } from "../../../chunks/ssr.js";
const css$1 = {
  code: '.background-overlay.svelte-148g8d9{position:relative}.background-overlay.svelte-148g8d9::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(\n      0,\n      0,\n      0,\n      0.3\n    )}.background-overlay.svelte-148g8d9:hover{background-color:rgba(0, 0, 0, 0)}body{background-color:black;color:white;transition:background-color 0.3s}body.dark-mode{background-color:white;color:black}div.svelte-148g8d9{position:relative;border:2px solid #353232;background-size:cover;background-position:center;background-repeat:no-repeat;height:100%}p.svelte-148g8d9{font-size:0.5em}h1.svelte-148g8d9{font-size:1.5em}a.svelte-148g8d9,p.svelte-148g8d9{font-size:0.5em;color:white;opacity:0.8}',
  map: null
};
const Projet = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { nom } = $$props;
  let { description } = $$props;
  let { image } = $$props;
  let { id } = $$props;
  if ($$props.nom === void 0 && $$bindings.nom && nom !== void 0)
    $$bindings.nom(nom);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css$1);
  return `<body><div class="background-overlay svelte-148g8d9" style="${"background-image: url(" + escape(image, true) + ");"}"><h1 class="svelte-148g8d9">${escape(nom)}</h1> <p class="svelte-148g8d9">${escape(description)}</p> <a href="${"/projects/" + escape(id, true)}" class="svelte-148g8d9">En savoir plus</a></div> </body>`;
});
const css = {
  code: '.projects.svelte-re1awm{display:grid;grid-template-columns:1fr 1fr}div.svelte-re1awm{text-align:center;margin-top:3%;font-family:"Inter", sans-serif;font-optical-sizing:auto;font-weight:10;font-style:normal;font-variation-settings:"slnt" 0;font-size:1.5em;width:100%}input.svelte-re1awm{width:80%;background:none;height:45px;border:1px solid #464343;border-radius:17px;margin-bottom:20px;color:white}@media(max-width: 768px){.projects.svelte-re1awm{grid-template-columns:1fr;flex-direction:column;align-items:center}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let searchQuery = "";
  let searchResults = data.projets;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="svelte-re1awm"> <input type="search" placeholder="Rechercher ..." name="q" class="svelte-re1awm"${add_attribute("value", searchQuery, 0)}> <div class="projects svelte-re1awm">${each(searchResults, (projet) => {
    return `${validate_component(Projet, "Projet").$$render(
      $$result,
      {
        nom: projet.nom,
        description: projet.descirption,
        image: projet.image,
        id: projet.id
      },
      {},
      {}
    )}`;
  })} ${searchResults.length === 0 && searchQuery !== "" ? `<p data-svelte-h="svelte-jurwq9">Aucun résultat trouvé.</p>` : ``}</div> </div>`;
});
export {
  Page as default
};
