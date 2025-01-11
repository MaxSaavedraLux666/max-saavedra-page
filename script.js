const toggleModeButton = document.getElementById('toggleMode');

toggleModeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
});
