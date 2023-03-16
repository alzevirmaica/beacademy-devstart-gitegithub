<template>
  <section id="contact" class="text-image-section">
    <div id="contact-image-container" class="image-container">
      <img src="img/escola.jpg" alt="Advogados no escritório" />
    </div>
    <div id="contact-information" class="text-container">
      <i class="bi bi-envelope"></i>
      <p class="section-subtitle">Entre em contato</p>
      <form>
        <div class="form-control">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            required
          />
        </div>
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Telefone"
          required
        />
        <textarea
          name="message"
          id="message"
          placeholder="Sua mensagem..."
          required
        ></textarea>
        <input type="submit" value="Enviar" class="btn" />
      </form>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Contato',
};
</script>
