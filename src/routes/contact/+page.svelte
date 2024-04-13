<script>
  const data = [
    {
      id: 1,
      label: "Github",
      url: "https://github.com/JOGZ24",
      description:
        "Explorateur du code source ouvert. Découvrez des projets et contributions intéressants. Suivez-moi pour rester à jour sur les développements collaboratifs. 💻🤝",
    },
    {
      id: 2,
      label: "Linkedin",
      url: "https://www.linkedin.com/in/julien-bouin-12438828b/",
      description:
        "Réseau professionnel axé sur la collaboration et le partage. Suivez mon profil pour accéder à des actualités sectorielles et participer à des échanges pertinents. 💼👥",
    },
    { id: 3, label: "Coordonnées", description: "" },
    { id: 4, label: "CV", description: "" },
  ];
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
  rel="stylesheet"
/>

<div class="main">
  {#each data as item (item.id)}
    <div>
      <h1>{item.label}</h1>
      {#if item.id < 3}
        <p>{item.description}</p>
        <button><a href={item.url}>URL</a></button>
      {:else if item.id == 4}
        <p>
          Vous trouverez ci-joint un boutton qui mène directement via le
          téléchargement de mon cv .
        </p>
        <button><a href={item.url}>URL</a></button>
      {:else if item.id == 3}
        <p>
          Contactez-moi directement via les informations ci-dessous. Que ce soit
          par email ou téléphone, je suis disponible pour échanger et répondre à
          vos questions.
        </p>
        <p>
          <u>Adresse mail : </u><a
            href="mailto:julienbouin@yahoo.fr"
            class="mail">julienbouin@yahoo.fr</a
          >
        </p>
        <p><u>Numéro de téléphone : </u>06 38 59 94 18</p>
      {/if}
    </div>
  {/each}
</div>

<style>
  .main {
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-weight: 10;
    font-style: normal;
    font-variation-settings: "slnt" 0;
  }
  .mail:hover {
    color: black;
    opacity: 10;
  }

  a {
    text-decoration: none;
    color: white;
  }

  h1 {
    opacity: 0.8;
  }

  p {
    opacity: 0.75;
    font-size: 15px;
  }

  h1,
  p,
  button {
    margin-left: 20px;
  }

  .main {
    display: flex;
    flex-wrap: wrap;
    background-color: #131312;
    margin: 1.2vw;
  }

  div > div {
    flex: 0 1 100%;
    border-bottom: 1px solid rgb(255, 255, 255, 0.4);
    width: 100%;
  }

  button {
    background-color: #171515;
    text-decoration: none;
    width: 150px;
    height: 35px;
    border: 1px solid rgb(255, 255, 255, 0.8);
    color: white;
    margin-bottom: 20px;
  }
</style>
