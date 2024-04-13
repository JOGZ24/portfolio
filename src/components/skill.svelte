<script>
  /**
   * @type {any}
   */
  export let name;
  /**
   * @type {any}
   */
  export let description;

  /**
   * @type {any}
   */
  export let imageUrl;
</script>

<body>
  <div>
    <img height="100" width="auto" src={imageUrl} alt="" />
    <h1>{name}</h1>
    <p>{description}</p>
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
  div {
    margin-left: 2%;
    border: 1px solid #353232;
    border-radius: 10%;
    margin: 3%;
    height: 100%;
  }
  img {
    margin-top: 10%;
    margin-bottom: -10%;
  }

  p {
    font-size: 0.5em;
    margin-top: -10%;
  }

  h1 {
    font-size: 1.5em;
  }
</style>
