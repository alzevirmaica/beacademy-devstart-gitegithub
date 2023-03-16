<template>
  <meta name="author" content="Alzevir Maycá de Maicá">
  <meta name="title" content="Maicá Escola de Música">
  <meta name="description" content="Site sobre uma escola de música onde é fornecida aula de instrumentos.">
  <meta name="Keyboard" content="escola, música, educação musical, instrumentos musicais">
  <meta property="og:image" content="img/violao.capa.jpg">
  <router-view/>
  <Footer />
</template>
<script>
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>
<style>
/* Geral */
:root {
    --main-color:#8C4C14;
    --primary-text-color: #fff;
    --secondary-text-color: #191919;
    --secondary-color:#F29C50;
    --tertiary-color:#BF4904 ;
}
* {
    font-family: "Lato";
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

a {
    text-decoration: none;
}

img {
    width: 100%;
}

input[type="submit"] {
    cursor: pointer;
}

body{
     background: #fff
}

i {
    background-color:var(--secondary-color) ;
    color:var(--primary-text-color) ;
    font-size: 2.5rem;
    padding: 2rem;
}

/* Responsivo */
@media (max-width: 450px) {
  /* Geral */
  body {
    overflow-x: hidden;
  }

  i {
    padding: 1.5rem;
    font-size: 2rem;
  }

  /* navbar */
  #navbar {
    display: none;
  }

  #menu,
  #close-menu {
    display: block;
  }

  .banner {
    max-width: 100%;
    padding: 4rem 2rem;
  }

  .banner h2 {
    font-size: 3rem;
  }

  .banner p {
    font-size: 1rem;
  }

  /* Áreas de atuação */
  .btn {
    align-self: initial;
  }

  .image-container {
    flex: 1 1 100%;
  }

  #other-services {
    flex-wrap: wrap;
  }

  /* Sobre nós */
  #about {
    gap: 0;
  }

  #about-text,
  #about-data {
    flex: 1 1 100%;
  }

  .about-description {
    gap: 1rem;
  }

  .about-description i {
    padding: 0;
    min-width: 40px;
  }

  #about #about-data .data {
    width: 100%;
    border: none;
    border-bottom: 1px solid var(--secondary-text-color);
  }

  /* Depoimentos */
  .text-container {
    text-align: center;
    padding: 2rem;
  }

  /* Colaboradores */
  #team {
    margin-top: 2rem;
  }

  #team h2 {
    font-size: 2.5rem;
  }

  .employees {
    flex-wrap: wrap;
  }

  /* Contato */
  #contact {
    padding-bottom: 0;
  }

  #contact-information {
    padding: 7rem 1rem;
  }

  #contact-information .form-control {
    flex-direction: column;
  }

  #contact-information .btn {
    align-self: auto;
  }

  /* Rodapé */
  #footer {
    flex-wrap: wrap;
  }

  #footer i {
    font-size: 2rem;
    padding: 1rem;
  }

  .footer-brand {
    text-align: center;
  }

  .networks {
    margin-bottom: 3rem;
  }

  .links-container {
    margin-bottom: 1rem;
  }

  .links-container h4 {
    margin-bottom: 1.5rem;
  }

  .contact-info,
  .links-container {
    width: 100%;
  }
}
</style>
