<script>
  // @ts-nocheck

  import Projet from "../../components/projet.svelte";

  export let data;

  let searchQuery = "";

  let searchResults = data.projets;

  function performSearch() {
    searchResults = data.projets.filter((projet) =>
      projet.nom.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
</script>

<div>
  <!--<h1>Projets</h1>-->
  <input
    type="search"
    placeholder="Rechercher ..."
    name="q"
    bind:value={searchQuery}
    on:input={performSearch}
  />

  <div class="projects">
    {#each searchResults as projet}
      <Projet
        nom={projet.nom}
        description={projet.descirption}
        image={projet.image}
        id={projet.id}
      ></Projet>
    {/each}
    {#if searchResults.length === 0 && searchQuery !== ""}
      <p>Aucun résultat trouvé.</p>
    {/if}
  </div>
</div>

<style>
  .projects {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  div {
    /*color: white;*/
    text-align: center;
    margin-top: 3%;
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-weight: 10;
    font-style: normal;
    font-variation-settings: "slnt" 0;
    font-size: 1.5em;
    width: 100%;
  }

  input {
    width: 80%;
    background: none;
    height: 45px;
    border: 1px solid #464343;
    border-radius: 17px;
    margin-bottom: 20px;
    color: white;
  }
</style>
