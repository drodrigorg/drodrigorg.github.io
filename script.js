document.addEventListener("DOMContentLoaded", () => {
    // Variables del Carrusel
    const slides = document.querySelectorAll(".carousel-slide");
    const prevButton = document.querySelector(".carousel-btn.prev");
    const nextButton = document.querySelector(".carousel-btn.next");
    let currentSlide = 0;
  
    // Mostrar el slide activo
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });
    }
  
    // Cambiar al siguiente slide
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    // Cambiar al slide anterior
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }
  
    // Configuración inicial
    showSlide(currentSlide);
  
    // Eventos de los botones
    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);
  
    // Cambio automático del carrusel cada 5 segundos
    setInterval(nextSlide, 5000);
  
    // Validación del formulario de contacto
    const form = document.querySelector("form");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevenir el envío automático
      const nombre = document.getElementById("nombre").value.trim();
      const correo = document.getElementById("correo").value.trim();
      const mensaje = document.getElementById("mensaje").value.trim();
  
      if (!nombre || !correo || !mensaje) {
        alert("Por favor, completa todos los campos antes de enviar. 😊");
        return;
      }
  
      if (!validarCorreo(correo)) {
        alert("Por favor, ingresa un correo electrónico válido. ✉️");
        return;
      }
  
      alert("¡Mensaje enviado con éxito! ✅");
      form.reset(); // Limpiar el formulario después de enviarlo
    });
  
    // Función para validar correos electrónicos
    function validarCorreo(correo) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(correo);
    }
  });
  document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".scroll-anim");
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });
  
    elements.forEach(element => observer.observe(element));
  });
    