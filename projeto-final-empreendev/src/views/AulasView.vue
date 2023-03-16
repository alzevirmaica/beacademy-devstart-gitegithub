<template>
  <header id="header" class="Home">
    <div id="inner-header">
      <h2 id="brand">Maicá Escola de Música</h2>
      <nav id="navbar">
        <a href="/videos">Vídeos</a>
        <a href="/">Voltar</a>
      </nav>
      <!-- Menu Mobile -->
      <i class="bi bi-list" id="menu"></i>
      <nav id="mobile-navbar">
        <i class="bi bi-x-lg" id="close-menu"></i>
        <a href="/videos">Vídeos</a>
        <a href="/">Voltar</a>
      </nav>
    </div>
    <div class="banner active">
      <!-- <span class="square"></span> -->
      <h2>Horário das Aulas</h2>
      <p>Confira os horários disponíveis e agende sua aula experimental!</p>
    </div>
  </header>
  <div id="other-services">
    <div class="service">
      <img src="img/slider.canto.jpg" alt="Aula de Canto" />
      <div class="service-info">
        <h4>Canto</h4>
        <ButtonAulas />
      </div>
    </div>
    <div class="service">
      <img src="img/horario-violao.jpg" alt="Aula de violão" />
      <div class="service-info">
        <h4>Violão</h4>
        <ButtonAulas />
      </div>
    </div>
    <div class="service">
      <img src="img/guitarra.aula.jpg" alt="Aula de guitarra" />
      <div class="service-info">
        <h4>Guitarra</h4>
        <ButtonAulas />
      </div>
    </div>
    <div class="service">
      <img src="img/piano.aula.jpg" alt="Aula de piano" />
      <div class="service-info">
        <h4>Piano</h4>
        <ButtonAulas />
      </div>
    </div>
  </div>
</template>
<script>
import ButtonAulas from "@/components/ButtonAulas.vue";
export default {
  components: {
    ButtonAulas,
  },
  mounted() {
    // Menu Mobile
    const menuBtn = document.querySelector("#menu");
    const closeMenuBtn = document.querySelector("#close-menu");
    const menu = document.querySelector("#mobile-navbar");

    [menuBtn, closeMenuBtn].forEach((btn) => {
      btn.addEventListener("click", (e) => {
        menu.classList.toggle("menu-active");
      });
    });
  },
};
</script>
<style scoped>
#header {
  background-image: url(https://images.unsplash.com/photo-1552422535-c45813c61732?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80);

  min-height: 55vh;
}
table {
  width: 250px;
  border-collapse: collapse;
}
td {
  border: 1px solid black;
  padding: 3px;
}
h4 {
  text-align: center;
}
</style>