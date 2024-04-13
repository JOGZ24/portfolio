<script>
  import Training from "../../components/training.svelte";
  export let data;
  let searchResults = data.competences;
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
  rel="stylesheet"
/>
<div>
  {#each searchResults as formation}
    <Training
      status={formation.status}
      title={formation.title}
      competence1={formation.competence1}
      competence2={formation.competence2}
      competence3={formation.competence3}
      competence4={formation.competence4}
    ></Training>
  {/each}
</div>

<style>
  div {
    margin-left: 30%;
    color: white;
  }
</style>
