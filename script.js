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

    // Função para adicionar target e rel a links de qualquer container
function setLinksToNewTab(containerSelector) {
    const links = document.querySelectorAll(`${containerSelector} a`);
    links.forEach(link => {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    });
  }

  // Aplica aos links de projetos
  setLinksToNewTab('.proj-links');

  // Aplica aos links de redes sociais
  setLinksToNewTab('.social-links');
