import { c as create_ssr_component, d as add_attribute, e as escape, f as each, v as validate_component } from "../../../chunks/ssr.js";
const css$1 = {
  code: "body{background-color:black;color:white;transition:background-color 0.3s}body.dark-mode{background-color:white;color:black}div.svelte-1hkj0w7{margin-left:2%;border:1px solid #353232;border-radius:10%;margin:3%;height:100%}img.svelte-1hkj0w7{margin-top:10%;margin-bottom:-10%}p.svelte-1hkj0w7{font-size:0.5em;margin-top:-10%}h1.svelte-1hkj0w7{font-size:1.5em}",
  map: null
};
const Skill = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { description } = $$props;
  let { imageUrl } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.imageUrl === void 0 && $$bindings.imageUrl && imageUrl !== void 0)
    $$bindings.imageUrl(imageUrl);
  $$result.css.add(css$1);
  return `<body><div class="svelte-1hkj0w7"><img height="100" width="auto"${add_attribute("src", imageUrl, 0)} alt="" class="svelte-1hkj0w7"> <h1 class="svelte-1hkj0w7">${escape(name)}</h1> <p class="svelte-1hkj0w7">${escape(description)}</p></div> </body>`;
});
const css = {
  code: '.skills.svelte-z2rrwi{display:grid;grid-template-columns:1fr 1fr 1fr 1fr}div.svelte-z2rrwi{text-align:center;margin-top:3%;font-family:"Inter", sans-serif;font-optical-sizing:auto;font-weight:10;font-style:normal;font-variation-settings:"slnt" 0;font-size:1.5em;width:100%}input.svelte-z2rrwi{width:80%;background:none;height:45px;border:1px solid #464343;border-radius:17px;margin-bottom:20px;color:white}@media(max-width: 768px){.skills.svelte-z2rrwi{grid-template-columns:1fr;flex-direction:column;align-items:center}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let searchQuery = "";
  let searchResults = data.competences;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="svelte-z2rrwi"> <input type="search" placeholder="Rechercher ..." name="q" class="svelte-z2rrwi"${add_attribute("value", searchQuery, 0)}> <div class="skills svelte-z2rrwi">${each(searchResults, (competence) => {
    return `${validate_component(Skill, "Skill").$$render(
      $$result,
      {
        name: competence.name,
        description: competence.description,
        imageUrl: competence.imageurl
      },
      {},
      {}
    )}`;
  })} ${searchResults.length === 0 && searchQuery !== "" ? `<p data-svelte-h="svelte-jurwq9">Aucun résultat trouvé.</p>` : ``}</div> </div>`;
});
export {
  Page as default
};
