<template>
    <footer id="footer">
    <div class="contact-info">
      <div class="footer-brand">
        <h2 style="color: #fff;">Maicá Escola de Música</h2>
        <p>A escola de música certa para você</p>
      </div>
      <p><i class="bi bi-geo-alt"></i> Rua dos Músicos, 1415</p>
      <p><i class="bi bi-telephone"></i> (99) 9999-9999</p>
      <p><i class="bi bi-envelope"></i> contato@maicaem.com</p>
      <div class="social-networks">
        <p>Siga-nos:</p>
        <div class="networks">
          <a href="#"><i class="bi bi-facebook"></i></a>
          <a href="#"><i class="bi bi-twitter"></i></a>
          <a href="#"><i class="bi bi-linkedin"></i></a>
          <a href="#"><i class="bi bi-instagram"></i></a>
        </div>
      </div>
    </div>
    <div class="links-container">
      <h4>Outros serviços</h4>
      <nav>
        <a href="#" style="color: black;">Gravação em estúdio</a>
        <a href="#" style="color: black;">Venda de instrumentos musicais</a>
        <a href="#" style="color: black;">Aluguel de salas para espetáculo</a>
        <a href="#" style="color: black;">Biblioteca especializada</a>
      </nav>
    </div>
    <div class="links-container">
      <h4>Páginas</h4>
      <nav>
        <a href="#" style="color: black;">Termos e condições</a>
        <a href="#" style="color: black;">Política de privacidade</a>
        <a href="#" style="color: black;">Fale com um especialista</a>
        <a href="#" style="color: black;">FAQ</a>
      </nav>
    </div>
    <div class="links-container">
      <h4>Acesse o nosso canal</h4>
    
      <a href="https://www.youtube.com/channel/UC_4lh25rSPZlWjQTIshRShA" target="_blank"><img class="youtube"
          src="img/youtube_pp.jpg" alt="youtube"></a>
    </div>
  </footer>
</template>
<script>
export default {
    name:'Footer'
}
</script>
<style scoped>
    /* Rodapé */
#footer {
    color: var(--secondary-text-color);
    background-color: var(#464343a4);
    display: flex;
    justify-content: space-around;
    padding: 3rem 3rem 5rem;
  }
  
  #footer i {
    font-size: 1rem;
    padding: 0.3rem;
  }
  
  #footer a {
    color: var(--primary-text-color);
  }
  
  .contact-info,
  .links-container {
    width: 20%;
  }
  
  .footer-brand {
    margin-bottom: 2rem;
    font-size: 0.8rem;
  }
  
  .footer-brand h2 {
    background-color: var(--main-color);
    margin-bottom: 0.5rem;
    padding: 1rem;
  }
  
  .contact-info p {
    margin-bottom: 1rem;
  }
  
  .contact-info p i {
    background-color: transparent;
    padding: 0;
    color: var(--main-color);
  }
  
  .social-networks p {
    margin-bottom: 1rem;
  }
  
  .networks {
    margin-top: 2rem;
    display: flex;
    gap: 1rem;
  }
  
  #footer .networks i {
    padding: 1rem;
  }
  
  .links-container h4 {
    text-transform: uppercase;
    margin-bottom: 3rem;
  }

  .links-container nav {
    display: flex;
    flex-direction: column;
  }
  
  .links-container nav a {
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid var(--secondary-color);
  }
  
  .phone-number {
    display: flex;
    border: 1px solid var(--main-color);
    gap: 1rem;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  .phone-info {
    color: var(--secondary-color);
   
  }

  .youtube {
    transform: translateX(0px);
    animation: you 5s ease-in-out infinite;
  }
  
  @keyframes you {
    0% {
        transform: translateX(0px);
    }
    50% {
        transform: translateX(-30px);
    }
    100% {
        transform: translateX(0px);
    }
 }

 .youtube:hover {
  filter: brightness(80%);
 }

 @media (max-width: 450px) {
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