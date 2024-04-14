import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/ssr.js";
const css$2 = {
  code: 'body{background-color:black;color:white;transition:background-color 0.3s}body.dark-mode{background-color:white;color:black}div.svelte-6frgbg{margin-top:22%;text-align:left;margin-left:8%;width:100%;font-family:"Inter", sans-serif;font-optical-sizing:auto;font-weight:10;font-style:normal;font-variation-settings:"slnt" 0}h1.svelte-6frgbg{margin-bottom:-2%;font-size:5em}p.svelte-6frgbg{font-size:1.2em}svg.svelte-6frgbg{fill:white}nav.svelte-6frgbg{display:flex;align-items:center;justify-content:space-between;width:17%}@media(max-width: 768px){div.svelte-6frgbg{grid-template-columns:1fr;flex-direction:column;align-items:center}}',
  map: null
};
let presentation = "un passionné de développement informatique. À 19 ans et en 2ème année de BUT Informatique à l'IUT de Lille, je mets en œuvre mes compétences dans la création d'applications. Actuellement à la recherche d'une alternance pour approfondir mon expérience. Explorez mes réalisations et contactez-moi pour discuter de collaborations potentielles. ";
const Presentation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com"> <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"> <div class="svelte-6frgbg"><h1 class="svelte-6frgbg" data-svelte-h="svelte-1o2xv98">Bouin Julien,</h1> <p class="svelte-6frgbg">${escape(presentation)}</p> <nav class="svelte-6frgbg" data-svelte-h="svelte-1nb1914"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" class="svelte-6frgbg"><path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" class="svelte-6frgbg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="svelte-6frgbg"><path d="M19 9.062s-5.188-.333-7 1.938c2-4.896 7-5.938 7-5.938v-2l5 4-5 4.019v-2.019zm-18.974 14.938h23.947l-11.973-11.607-11.974 11.607zm1.673-14l10.291-7.488 3.053 2.218c.712-.459 1.391-.805 1.953-1.054l-5.006-3.637-11.99 8.725v12.476l7.352-7.127-5.653-4.113zm15.753 4.892l6.548 6.348v-11.612l-6.548 5.264z"></path></svg></nav> </div>`;
});
const css$1 = {
  code: "body{background-color:black;color:white;transition:background-color 0.3s}body.dark-mode{background-color:white;color:black}div.svelte-b0efe9{margin-top:46%;width:100%;margin-right:100%}img.svelte-b0efe9{border:1px solid white;border-radius:15%}",
  map: null
};
const Thumbnail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="svelte-b0efe9" data-svelte-h="svelte-1dn060a"><img width="350" height="auto" alt="" src="https://scontent-cdg4-3.xx.fbcdn.net/v/t1.15752-9/426660886_642754561310087_3166163148633590885_n.png?stp=dst-png_p403x403&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fH2t8kqt_GQAb4xYpDy&_nc_ht=scontent-cdg4-3.xx&oh=03_AdWRIOBC-oIHLiVz8GZGYBvOWroXkm3Irnu9UDSGkWW2dQ&oe=663F44E7" class="svelte-b0efe9"> </div>`;
});
const css = {
  code: "body.svelte-bva573{height:100%;margin:0}.container.svelte-bva573{display:flex;align-items:center;justify-content:space-between;height:100%;width:100%}.pres.svelte-bva573{width:50%}.thumbnail.svelte-bva573{margin-right:10%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<body class="svelte-bva573"><div class="container svelte-bva573"><div class="pres svelte-bva573">${validate_component(Presentation, "Presentation").$$render($$result, {}, {}, {})}</div> <div class="thumbnail svelte-bva573">${validate_component(Thumbnail, "Thumbnail").$$render($$result, {}, {}, {})}</div></div> </body>`;
});
export {
  Page as default
};
