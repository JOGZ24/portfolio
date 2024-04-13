<script>
  import Presentation from "../components/presentation.svelte";
  import Thumbnail from "../components/thumbnail.svelte";
</script>

<body>
  <div class="container">
    <div class="pres">
      <Presentation></Presentation>
    </div>
    <div class="thumbnail">
      <Thumbnail></Thumbnail>
    </div>
  </div>
</body>

<style>
  body {
    height: 100%;
    margin: 0;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
  }

  .pres {
    width: 50%;
  }

  .thumbnail {
    margin-right: 10%;
  }
</style>
