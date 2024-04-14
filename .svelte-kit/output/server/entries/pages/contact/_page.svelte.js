import { c as create_ssr_component, f as each, e as escape, d as add_attribute } from "../../../chunks/ssr.js";
const css = {
  code: '.main.svelte-15ljybc.svelte-15ljybc{font-family:"Inter", sans-serif;font-optical-sizing:auto;font-weight:10;font-style:normal;font-variation-settings:"slnt" 0}.mail.svelte-15ljybc.svelte-15ljybc:hover{color:black;opacity:10}a.svelte-15ljybc.svelte-15ljybc{text-decoration:none;color:white}h1.svelte-15ljybc.svelte-15ljybc{opacity:0.8}p.svelte-15ljybc.svelte-15ljybc{opacity:0.75;font-size:15px}h1.svelte-15ljybc.svelte-15ljybc,p.svelte-15ljybc.svelte-15ljybc,button.svelte-15ljybc.svelte-15ljybc{margin-left:20px}.main.svelte-15ljybc.svelte-15ljybc{display:flex;flex-wrap:wrap;background-color:#131312;margin:1.2vw}div.svelte-15ljybc>div.svelte-15ljybc{flex:0 1 100%;border-bottom:1px solid rgb(255, 255, 255, 0.4);width:100%}button.svelte-15ljybc.svelte-15ljybc{background-color:#171515;text-decoration:none;width:150px;height:35px;border:1px solid rgb(255, 255, 255, 0.8);color:white;margin-bottom:20px}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const data = [
    {
      id: 1,
      label: "Github",
      url: "https://github.com/JOGZ24",
      description: "Explorateur du code source ouvert. Découvrez des projets et contributions intéressants. Suivez-moi pour rester à jour sur les développements collaboratifs. 💻🤝"
    },
    {
      id: 2,
      label: "Linkedin",
      url: "https://www.linkedin.com/in/julien-bouin-12438828b/",
      description: "Réseau professionnel axé sur la collaboration et le partage. Suivez mon profil pour accéder à des actualités sectorielles et participer à des échanges pertinents. 💼👥"
    },
    {
      id: 3,
      label: "Coordonnées",
      description: ""
    },
    { id: 4, label: "CV", description: "" }
  ];
  $$result.css.add(css);
  return `<link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com"> <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"> <div class="main svelte-15ljybc">${each(data, (item) => {
    return `<div class="svelte-15ljybc"><h1 class="svelte-15ljybc">${escape(item.label)}</h1> ${item.id < 3 ? `<p class="svelte-15ljybc">${escape(item.description)}</p> <button class="svelte-15ljybc"><a${add_attribute("href", item.url, 0)} class="svelte-15ljybc">URL</a></button>` : `${item.id == 4 ? `<p class="svelte-15ljybc" data-svelte-h="svelte-xg5qc">Vous trouverez ci-joint un boutton qui mène directement via le
          téléchargement de mon cv .</p> <button class="svelte-15ljybc" data-svelte-h="svelte-ylwgmg"><a href="https://drive.google.com/file/d/1-r2nA06xXw3L7m3uf4yHnuF5Tn-hBIEu/view?usp=drive_link" class="svelte-15ljybc">Voir le CV</a></button>` : `${item.id == 3 ? `<p class="svelte-15ljybc" data-svelte-h="svelte-1lc8bu0">Contactez-moi directement via les informations ci-dessous. Que ce soit
          par email ou téléphone, je suis disponible pour échanger et répondre à
          vos questions.</p> <p class="svelte-15ljybc" data-svelte-h="svelte-1xv5xw2"><u>Adresse mail : </u><a href="mailto:julienbouin@yahoo.fr" class="mail svelte-15ljybc">julienbouin@yahoo.fr</a></p> <p class="svelte-15ljybc" data-svelte-h="svelte-wmcvf9"><u>Numéro de téléphone : </u>06 38 59 94 18</p>` : ``}`}`} </div>`;
  })} </div>`;
});
export {
  Page as default
};
