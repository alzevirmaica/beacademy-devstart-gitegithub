<template>
  <header id="header" class="Home">
    <div id="inner-header">
      <h2 id="brand">Maicá Escola de Música</h2>
      <nav id="navbar">
        <a href="/aulas">Aulas</a>
        <a href="/">Voltar</a>
      </nav>

      <!-- Menu Mobile -->
      <i class="bi bi-list" id="menu"></i>
      <nav id="mobile-navbar">
        <i class="bi bi-x-lg" id="close-menu"></i>
        <a href="/aulas">Aulas</a>
        <a href="/">Voltar</a>
      </nav>
    </div>
    <div class="banner active">
      <!-- <span class="square"></span> -->
      <h2>Vídeos</h2>
      <p>Assista aos vídeos dos alunos</p>
    </div>
  </header>
  <div id="other-services">
    <div class="service">
    <!-- <i class="bi bi-youtube"></i>    -->
    <a href="https://www.youtube.com/embed/DmL12NRE4hQ" target="_blank"><img src="img/aluna-piano..jpg"  alt="Piano" /></a>
     
      <div class="service-info">
        <h4>Piano</h4>
        <p>
          Nossa aluna Andréia Nascimento, estuda piano conosco a 3 anos. Já se
          apresentou fora do país e já coleciona muitos prêmios
          como pianista. Neste vídeo ela interpreta uma obra do Metállica com arranjo
          próprio elaborado em sala de aula.
        </p>
      </div>
    </div>
    <div class="service">
        <a href="https://www.youtube.com/embed/lICI6wrUnzo" target="_blank"><img src="img/aula-violao...jpg"  alt="violao" /></a>
      
      <div class="service-info">
        <h4>Violão</h4>
        <p>
          Nosso aluno de violão Alzevir. Ele estuda violão de oito cordas
          conosco. Seu estudo é voltado para a música regional do Rio Grande do
          Sul. Neste vídeo ele interpreta uma obra de Violeta Parra com arranjo que foi construido nas aulas.
        </p>
      </div>
    </div>
    <div class="service">
        <a href="https://www.youtube.com/embed/8RKwo_fIdI0" target="_blank"><img src="img/aluno-guitarra..jpg"  alt="Partitura" /></a>
      
      <div class="service-info">
        <h4>Guitarra</h4>
        <p>
          Nosso aluno de guitarra Raphael.Seu estudo é voltado para o Rock nacional e internacional. Neste vídeo ele interpreta uma obra muito conhecida da banda
          Guns Roses chamada Sweet Child O' Mine. Ele estuda conosco a 2 anos.
        </p>
      </div>
    </div>
    <div class="service">
        <a href="https://www.youtube.com/embed/DkHI1dV2kzk" target="_blank"><img src="img/aluno-canto.jpg"  alt="Aluno de Canto" /></a>
      
      <div class="service-info">
        <h4>Canto</h4>
        <p>
          Nosso aluno de canto Alzevir Maicá. Seu estudo é voltado para a música regional do Rio Grande do Sul. Neste vídeo ele interpreta uma obra chamada "Canto dos Livres" da autoria de Cenair Maicá, arranjo própio. Ele estuda a 3 anos.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: 'Videos',
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
  background-image: url(https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
}

#header {
  min-height: 50vh;
}

img:hover {
  filter: brightness(55%);
}
</style>