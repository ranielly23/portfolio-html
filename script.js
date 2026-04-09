/* ════════════════════════════════════════
   script.js — Portfólio Francisca Ranielly
   ════════════════════════════════════════ */

/* ── Cursor Personalizado ── */
const cursor     = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');

document.addEventListener('mousemove', (e) => {
  // Cursor principal segue imediatamente
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';

  // Anel segue com leve atraso (efeito suave)
  setTimeout(() => {
    cursorRing.style.left = e.clientX + 'px';
    cursorRing.style.top  = e.clientY + 'px';
  }, 80);
});

/* ── Scroll Reveal ── */
// Seleciona todos os elementos com a classe .reveal
const revealElements = document.querySelectorAll('.reveal');

// Cria o observador de interseção
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // Quando o elemento entrar na tela, adiciona a classe .visible
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 }); // Dispara quando 15% do elemento estiver visível

// Observa cada elemento
revealElements.forEach((el) => revealObserver.observe(el));

// Seleciona todos os links com a classe "proj-link"
  const projectLinks = document.querySelectorAll('.proj-link');

  // Adiciona target="_blank" e rel="noopener noreferrer" automaticamente
  projectLinks.forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  });