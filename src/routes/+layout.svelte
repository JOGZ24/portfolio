<script>
  import Header from "../components/header.svelte";
</script>

<body>
  <div>
    <Header></Header>
  </div>
  <slot />
</body>

<style>
  body {
    /*background-color: black;*/
    margin: 0;
    padding: 0;
    width: 100%;
  }

  :global(body) {
    background-color: black;
    color: white;
    transition: background-color 0.3s;
  }
  :global(body.dark-mode) {
    background-color: white;
    color: black;
  }
</style>
