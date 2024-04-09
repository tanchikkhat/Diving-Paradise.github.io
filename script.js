const goTopBtn = document.querySelector(".go-top");

// обработчик на скролл окна
window.addEventListener("scroll", trackScroll);
// обработчик на нажатии
goTopBtn.addEventListener("click", goTop);

function trackScroll() {
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;
  if (scrolled > coords) {
    goTopBtn.classList.add("go-top--show");
  } else {
    goTopBtn.classList.remove("go-top--show");
  }
}

function goTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -50); 
    setTimeout(goTop, 0); 
  }
}
function smoothScroll(target) {
  var targetElement = document.getElementById(target);
  var offset = targetElement.getBoundingClientRect().top - window.innerHeight / 4 + targetElement.offsetHeight / 4;
  window.scrollBy({ top: offset, left: 0, behavior: 'smooth' });
}