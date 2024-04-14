import { c as create_ssr_component, e as escape, f as each, v as validate_component } from "../../../chunks/ssr.js";
const css$1 = {
  code: '.vertical-line.svelte-1tan9cv{border-left:2px solid white;display:inline-block;height:70%;margin:0 10px 0 0}.util.svelte-1tan9cv{height:70%;margin:40px 20px 0 0;display:grid;grid-template-rows:auto 1fr;align-items:center}.status.svelte-1tan9cv{font-size:1.5em}.title.svelte-1tan9cv{font-weight:bold}.all.svelte-1tan9cv{font-family:"Inter", sans-serif;font-optical-sizing:auto;font-weight:10;font-style:normal;font-variation-settings:"slnt" 0;align-items:center;font-size:1.2em;display:grid;grid-template-columns:auto 1fr}svg.svelte-1tan9cv{fill:white}',
  map: null
};
const Training = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { status } = $$props;
  let { title } = $$props;
  let { competence1 } = $$props;
  let { competence2 } = $$props;
  let { competence3 } = $$props;
  let { competence4 } = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.competence1 === void 0 && $$bindings.competence1 && competence1 !== void 0)
    $$bindings.competence1(competence1);
  if ($$props.competence2 === void 0 && $$bindings.competence2 && competence2 !== void 0)
    $$bindings.competence2(competence2);
  if ($$props.competence3 === void 0 && $$bindings.competence3 && competence3 !== void 0)
    $$bindings.competence3(competence3);
  if ($$props.competence4 === void 0 && $$bindings.competence4 && competence4 !== void 0)
    $$bindings.competence4(competence4);
  $$result.css.add(css$1);
  return `<div class="all svelte-1tan9cv"><div class="util svelte-1tan9cv" data-svelte-h="svelte-1903dxn"><svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="svelte-1tan9cv"><path d="M4.861 9.713c-.131-.146-.242-.299-.33-.459v-3.181l7.107 3.804 7.852-3.298v2.675c-.074.15-.169.294-.284.431.342.948.392 2.073.399 2.623 1.229-.437 2.398.593 2.398 2.492 0 3.208-2.462 4.017-2.561 4.053-2.414 4.776-6.276 5.147-7.404 5.147-1.128 0-4.99-.372-7.403-5.147-.1-.036-2.563-.845-2.563-4.061 0-2.003 1.289-2.917 2.4-2.48.007-.551.056-1.659.389-2.599zm13.52.669c-1.62 1.032-4.431 1.524-6.371 1.524-2.107 0-4.736-.501-6.319-1.508-.156.621-.241 1.298-.241 2.033 0 .528-.425.918-.897.918-.121 0-.244-.026-.365-.08-.06-.029-.152-.051-.256-.051-.112 0-.236.026-.344.099-.898.595-.804 3.838 1.393 4.598.219.076.403.238.509.451 2.16 4.299 5.557 4.634 6.548 4.634.99 0 4.389-.335 6.547-4.634.108-.213.291-.375.51-.451 2.197-.76 2.291-4.003 1.393-4.598-.365-.245-.632.032-.964.032-.472 0-.898-.388-.898-.918 0-.741-.085-1.424-.245-2.049zm4.619-.373h-2.99l1.012-2.002-.015-3.142-9.316 3.907-9.691-5.12 10.451-3.651 9.552 4.446v3.56l.997 2.002z"></path></svg> <span class="vertical-line svelte-1tan9cv"></span></div> <div class="pres"><p class="status svelte-1tan9cv">${escape(status)}</p> <p class="title svelte-1tan9cv">${escape(title)}</p> <ul><li>${escape(competence1)}</li> <li>${escape(competence2)}</li> <li>${escape(competence3)}</li> <li>${escape(competence4)}</li></ul></div> </div>`;
});
const css = {
  code: "div.svelte-1csx31e{margin-left:30%;color:white}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let searchResults = data.competences;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com"> <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"> <div class="svelte-1csx31e">${each(searchResults, (formation) => {
    return `${validate_component(Training, "Training").$$render(
      $$result,
      {
        status: formation.status,
        title: formation.title,
        competence1: formation.competence1,
        competence2: formation.competence2,
        competence3: formation.competence3,
        competence4: formation.competence4
      },
      {},
      {}
    )}`;
  })} </div>`;
});
export {
  Page as default
};
