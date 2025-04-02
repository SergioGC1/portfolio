// Mobile Menu
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn")
  const navLinks = document.getElementById("nav-links")

  if (!mobileMenuBtn || !navLinks) return // Salir si los elementos no existen todavía

  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active")

    // Update icon
    const icon = mobileMenuBtn.querySelector("svg")
    if (navLinks.classList.contains("active")) {
      icon.setAttribute("data-feather", "x")
    } else {
      icon.setAttribute("data-feather", "menu")
    }
    if (window.feather) window.feather.replace()
  })

  // Close menu when clicking on a link
  const links = document.querySelectorAll(".nav-link")
  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active")

      // Update icon
      const icon = mobileMenuBtn.querySelector("svg")
      icon.setAttribute("data-feather", "menu")
      if (window.feather) window.feather.replace()
    })
  })
}

// Navbar Scroll Effect
function initNavbarScroll() {
  const navbar = document.getElementById("navbar")

  if (!navbar) return // Salir si el navbar no existe todavía

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })
}

// Inicializar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu()
  initNavbarScroll()
})

