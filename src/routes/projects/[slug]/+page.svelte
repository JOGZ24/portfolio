<script>
  import { page } from "$app/stores";
  export let data;

  let results = data.projets;

  let project_id = $page.params.slug;
</script>

<div class="all">
  {#each results as projet}
    {#if projet.id == project_id}
      <h1>{projet.nom}</h1>
      <div class="img">
        <img alt="" src={projet.image1} />
        <img alt="" src={projet.image2} />
      </div>
      <p>{projet.description2}</p>
      <div>
        <h2>Compétences experimentées :</h2>
        <h3><u>Lien vers le projet</u></h3>
      </div>
    {/if}
  {/each}
</div>

<style>
  svg {
    fill: white;
  }
  .img {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0;
  }

  .img > img {
    width: 100%;
    height: auto;
  }
  div {
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-weight: 10;
    font-style: normal;
    font-variation-settings: "slnt" 0;
  }
  h1 {
    font-size: 3.5em;
    text-align: center;
  }

  .all {
    margin: 10px;
  }
</style>
