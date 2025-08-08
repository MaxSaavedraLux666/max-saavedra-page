// Dark Mode toggle
const toggleModeButton = document.getElementById('toggleMode');
if (toggleModeButton) {
  toggleModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
  });
}

// Modal for certificates
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeModal = document.getElementById("closeModal");
document.querySelectorAll(".cert-img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});
if (closeModal) {
  closeModal.onclick = () => modal.style.display = "none";
}
window.onclick = (e) => {
  if (e.target == modal) modal.style.display = "none";
};
