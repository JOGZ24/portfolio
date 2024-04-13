<script>
  // @ts-nocheck
  export let data;
  import Skill from "../../components/skill.svelte";

  let searchQuery = "";

  let searchResults = data.competences;

  function performSearch() {
    searchResults = data.competences.filter((competence) =>
      competence.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
</script>

<div>
  <!--<h1>Compétences</h1>--->
  <input
    type="search"
    placeholder="Rechercher ..."
    name="q"
    bind:value={searchQuery}
    on:input={performSearch}
  />

  <div class="skills">
    {#each searchResults as competence}
      <Skill
        name={competence.name}
        description={competence.description}
        imageUrl={competence.imageurl}
      ></Skill>
    {/each}
    {#if searchResults.length === 0 && searchQuery !== ""}
      <p>Aucun résultat trouvé.</p>
    {/if}
  </div>
</div>

<style>
  .skills {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
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
