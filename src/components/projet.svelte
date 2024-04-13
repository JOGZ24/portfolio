<script>
  /**
   * @type {any}
   */
  export let nom;
  /**
   * @type {any}
   */
  export let description;

  /**
   * @type {any}
   */
  export let image;

  /**
   * @type {any}
   */
  export let id;
</script>

<body>
  <div style="background-image: url({image});">
    <h1>{nom}</h1>
    <p>{description}</p>
    <a href="/projects/{id}"> En savoir plus </a>
  </div>
</body>

<style>
  :global(body) {
    background-color: black;
    color: white;
    transition: background-color 0.3s;
  }
  :global(body.dark-mode) {
    background-color: white;
    color: black;
  }

  div:hover {
    opacity: 0.8;
  }
  div {
    position: relative;
    border: 2px solid #353232;
    /*background-image: url("https://imgs.search.brave.com/lWO-I72x0lTgTI986XbZg3AX8OIoNyAm-LS1wgyyayQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMyLmFscGhhY29k/ZXJzLmNvbS83MTcv/NzE3OTIuanBn");*/
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
  }

  p {
    font-size: 0.5em;
  }

  h1 {
    font-size: 1.5em;
  }

  a {
    font-size: 0.5em;
    color: white;
    opacity: 0.8;
  }
</style>
