function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const body = document.body;

  // Activar tema oscuro o claro desde localStorage
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
  }

  themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const newTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
  });
}
