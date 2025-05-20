const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const modalOverlay = document.getElementById("modalOverlay");

openBtn.addEventListener("click", () => {
  modalOverlay.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modalOverlay.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.style.display = "none";
  }
});
