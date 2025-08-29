
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const slides = document.querySelectorAll(".slides");
  const dots = document.querySelectorAll(".dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));
  slides[slideIndex - 1].classList.add("active");
  dots[slideIndex - 1].classList.add("active");
}
// Seleciona todos os itens da galeria
const imagensGaleria = document.querySelectorAll('.gallery-item img');
const modal = document.getElementById('modalImagem');
const modalImg = document.getElementById('imagemExpandida');
const descricao = document.getElementById('descricaoImagem');

imagensGaleria.forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = img.src;
    descricao.innerHTML = img.alt;
  });
});

function fecharModal() {
  modal.style.display = 'none';
}

// Fecha o modal se clicar fora da imagem
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};