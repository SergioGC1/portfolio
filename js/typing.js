// Typed text effect for hero section
function initTypedText() {
  const typedTextElement = document.getElementById("typed-text")

  if (!typedTextElement) return // Salir si el elemento no existe todavía

  const text = "Desarrollador Full Stack"
  const cursorSpan = document.createElement("span")
  cursorSpan.className = "cursor"
  cursorSpan.textContent = "|"
  cursorSpan.style.marginLeft = "5px" // opcional: separación visual

  // Limpiar contenido y agregar cursor
  typedTextElement.textContent = ""
  typedTextElement.appendChild(cursorSpan)

  let i = 0
  function typeWriter() {
    if (i < text.length) {
      // Insertar carácter antes del cursor
      typedTextElement.insertBefore(document.createTextNode(text.charAt(i)), cursorSpan)
      i++
      setTimeout(typeWriter, 100)
    } else {
      // Parpadeo del cursor
      setInterval(() => {
        cursorSpan.classList.toggle("hidden")
      }, 500)
    }
  }

  // Iniciar animación
  setTimeout(typeWriter, 1000)
}

// Inicializar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", initTypedText)

