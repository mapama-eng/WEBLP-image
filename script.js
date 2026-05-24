const header = document.querySelector("[data-header]");
const contactForm = document.querySelector(".contact-form");

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 20);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = contactForm.querySelector("button");
  button.textContent = "送信準備ができました";
  window.setTimeout(() => {
    button.textContent = "相談内容を送る";
  }, 2200);
});
