const header = document.querySelector(".site-header");

function updateHeaderState() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 8);
}

window.addEventListener("scroll", updateHeaderState, { passive: true });
updateHeaderState();
