<template>
  <header id="header" class="Home">
    <div id="inner-header">
      <h2 id="brand">Maicá Escola de Música</h2> 
      <nav id="navbar">
        <a href="/">Início</a>
        <a href="/aulas">Aulas</a>
        <a href="#about">Sobre</a>
        <a href="#team">Professores</a>
        <a href="/videos">Vídeos</a>
        <a href="#contact">Contato</a>
      </nav>

      <!-- Menu Mobile -->
      <i class="bi bi-list" id="menu"></i>
      <nav id="mobile-navbar">
        <i class="bi bi-x-lg" id="close-menu"></i>
        <a href="/">Início</a>
        <a href="/aulas">Aulas</a>
        <a href="#about">Sobre</a>
        <a href="#team">Professores</a>
        <a href="/videos">Vídeos</a>
        <a href="#contact">Contato</a>
        <!-- <a href="/videos">Vídeos</a> -->
       
      </nav>
    </div>
    <div class="banner active">
      <h2>
        Amor.
        <br />
        Música.
        <br />
        Paixão.
      </h2>
    </div>
    <div class="banner">
      <span class="square"></span>
      <h2>Conheça os nossos Professores</h2>
      <p>Professores especializados inteiramente a sua disposição</p>
    </div>
    <div class="banner">
      <span class="square"></span>
      <h2>Nossas metodologias</h2>
      <p>Confira as nossas metodologias personalizadas</p>
    </div>
    <div class="dots">
      <div class="dot active"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </header>
  <AreasAtuacao />
  <SobreNos /> 
  <Colaboradores />
  <Contato />
</template>
<script>
import AreasAtuacao from "@/components/AreasAtuacao.vue";
import SobreNos from "@/components/SobreNos.vue";
import Colaboradores from "@/components/Colaboradores.vue";
import Contato from "@/components/Contato.vue";
export default {
  name: "HomerView",
  components: {
    AreasAtuacao,
    SobreNos,
    Colaboradores,
    Contato,
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
    //Scroll
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        var href = anchor.getAttribute("href");
        if (href != null) {
          document.querySelector(href)?.scrollIntoView({
            behavior: "smooth",
          });
          document.querySelectorAll('a[href^="#"]').forEach((remove) => {
            remove.classList.remove("active");
          });
          anchor.classList.add("active");
        }
      });
     });
      
    //  Slides
    const slides = document.querySelectorAll(".banner");
    const dots = document.querySelectorAll(".dot");
    let slideIndex = 0;
    function showSlides() {
      for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        dots[i].classList.remove("active");
      }

      slideIndex++;

      if (slideIndex > slides.length) {
        slideIndex = 1;
      }

      slides[slideIndex - 1].classList.add("active");
      dots[slideIndex - 1].classList.add("active");

      setTimeout(showSlides, 4000);
    }
    showSlides();
  },
};
</script>
<style>
/* Cabeçalho e banner */
#header {
  min-height: 90vh;
  background-image: url(https://images.pexels.com/photos/6510335/pexels-photo-6510335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
  background-size: cover;
  background-position: center;
  color: var(--primary-text-color);
  margin-bottom: 2rem;
  position: relative;
}

#inner-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}


#brand {
  /* background-color: #bf4904cb;     */
  padding: 1rem;
  font-size: 1.9rem;
  
}

#navbar {
  display: flex;
  gap: 3rem;
  text-transform: uppercase;
  margin-right: 2rem;
}

#navbar a {
  color: var(--primary-text-color);
  font-weight: bold;
}
#navbar a:hover {
  color: #bf4904;
}

.banner.active {
  opacity: 1;
}

.banner {
  max-width: 50%;
  padding: 4rem;
  opacity: 0;
  position: absolute;
  transition: 0.6s;
}

.banner h2 {
  font-size: 4rem;
  margin-bottom: 1.2rem;
  position: relative;
  z-index: 2;
}

.banner p {
  font-size: 1.5rem;
}
.dots {
  display: flex;
  gap: 2rem;
  position: absolute;
  bottom: 3rem;
  left: 3rem;
}

.dot {
  width: 20px;
  height: 20px;
  background-color: var(--secondary-color);
}

.dot.active {
  background-color: var(--primary-text-color);
}

/* Mobile navbar */
#menu,
#close-menu {
  font-size: 2rem;
  padding: 1rem;
  display: none;
}

#close-menu {
  position: absolute;
  top: 0;
  right: 0;
}

#mobile-navbar {
  position: fixed;
  top: 0;
  left: 100%;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  flex-direction: column;
  padding: 4rem 2rem;
  transition: 0.4s;
  z-index: 5;
}

#mobile-navbar.menu-active {
  left: 0;
}

#mobile-navbar a {
  color: var(--primary-text-color);
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--main-color);
}

/* Areas de atuação */

.text-image-section {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}
.service h4 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.text-container {
  flex: 2 1 0;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: center;
  text-align: right;
}

.section-subtitle {
  text-transform: uppercase;
  font-weight: bold;
  color: var(--secondary-text-color);
}

.section-title {
  color: var(--secondary-text-color);
  font-size: 2.7rem;
}

.btn {
  padding: 1.2rem 1.8rem;
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: bold;
  background-color: var(--tertiary-color);
  align-self: end;
  color: #fff;
  border-radius: 3px;
}
.btn:hover {
  background-color: darkgrey;
  color: #bf4904;
}

#other-services {
  width: 100%;
  display: flex;
  gap: 2rem;
  padding: 2rem;
}

.service {
  position: relative;
}

.service i {
  position: absolute;
  left: 0;
  top: 0;
  padding: 1rem;
  font-size: 1.5rem;
}

.service-info {
  background-color: #e0d5d557;
  padding: 2rem 1.4rem;
  min-height: 250px;
  margin-top: -3px;
  z-index: 2;
  position: relative;
}

.service h4 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
}
#about {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
}

#about-text {
  background-image: url(https://images.pexels.com/photos/243988/pexels-photo-243988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: #fff;
  flex: 1 1 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding: 4rem 2rem;
  transform: translateY(0px);
  animation: float 5s ease-in-out infinite;
}
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-30px);
  }
  100% {
    transform: translateY(0px);
  }
}

/* #about {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
}

#about-text {
  background-image: url(https://images.pexels.com/photos/243988/pexels-photo-243988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: #fff;
  flex: 1 1 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding: 4rem 2rem;
  transform: translateY(0px);
  animation: float 5s ease-in-out infinite;
}
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-30px);
  }
  100% {
    transform: translateY(0px);
  }
} */

#sobre1 {
  color: #fff;
}
/* Colaboradores */
#team {
  position: relative;
  margin-bottom: 2rem;
}

#team h2 {
  font-size: 3rem;
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

#team h2 span {
  color: var(--main-color);
}

#team .square {
  background-color: var(--tertiary-color);
  width: 100px;
  height: 100px;
  left: 50%;
  margin-left: -50px;
  top: -25px;
}

.employees {
  display: flex;
  gap: 2rem;
  padding: 2rem;
  text-align: center;
}

.employee-name {
  color: var(--main-color);
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0.5rem 0;
}

/* Contato */
.image-container {
  flex: 1 1 300px;
  position: relative;
}

#contact {
  background-color: var(--main-color);
  gap: 0;
  padding-bottom: 5rem;
}

#contact-information {
  position: relative;
  text-align: left;
  padding: 3rem;
  flex: 1 1 0;
}

#contact-information .section-subtitle {
  color: var(--primary-text-color);
}

#contact-information i {
  padding: 1.3rem;
  font-size: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--primary-text-color);
  color: var(--main-color);
}

#contact-information form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

#contact-information .form-control {
  display: flex;
  gap: 1rem;
}

#contact-information input,
#contact-information textarea {
  flex: 0.5;
  padding: 1rem;
  border: none;
}

#contact-information .btn {
  align-self: start;
  border: 2px solid var(--primary-text-color);
  font-size: 1.2rem;
  transition: 0.4s;
}

#contact-information .btn:hover {
  background-color: var(--primary-text-color);
  color: var(--main-color);
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
  #brand {
    font-size: 1.5rem;
  } 
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




