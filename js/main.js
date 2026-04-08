/**
 * main.js — El Rincón Marino
 * NexvoraSystems
 *
 * Módulos:
 * 1. Navbar: scroll + menú hamburger
 * 2. Menu tabs
 * 3. Scroll animations (IntersectionObserver)
 * 4. Formulario de reservas
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMenuTabs();
  initScrollAnimations();
  initReservaForm();
});

/* ─────────────────────────────────────────
   1. NAVBAR
   - Cambia opacidad al hacer scroll
   - Abre/cierra menú en móvil
───────────────────────────────────────── */
function initNavbar() {
  const navbar     = document.getElementById('navbar');
  const hamburger  = document.getElementById('hamburger');
  const navLinks   = document.getElementById('navLinks');

  // Scroll: refuerza fondo al bajar
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = 'rgba(59, 31, 14, 0.98)';
    } else {
      navbar.style.backgroundColor = 'rgba(59, 31, 14, 0.95)';
    }
  });

  // Hamburger: toggle menú mobile
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('nav-links--open');
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Cierra el menú mobile al hacer clic en un enlace
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('nav-links--open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ─────────────────────────────────────────
   2. MENU TABS
   - Cambia entre categorías del menú
───────────────────────────────────────── */
function initMenuTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels  = document.querySelectorAll('.menu__grid');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.dataset.tab;

      // Desactiva todos
      tabButtons.forEach(b => b.classList.remove('tab-btn--active'));
      tabPanels.forEach(p => p.classList.remove('menu__grid--active'));

      // Activa el seleccionado
      btn.classList.add('tab-btn--active');
      const targetPanel = document.getElementById(`tab-${targetTab}`);
      if (targetPanel) {
        targetPanel.classList.add('menu__grid--active');
      }
    });
  });
}

/* ─────────────────────────────────────────
   3. SCROLL ANIMATIONS
   - Usa IntersectionObserver para animar
     elementos al entrar en el viewport
───────────────────────────────────────── */
function initScrollAnimations() {
  // Selectores de elementos a animar
  const animatedSelectors = [
    '.menu-card',
    '.test-card',
    '.galeria__item',
    '.stat',
    '.info-item',
    '.about__img',
  ];

  const elements = document.querySelectorAll(animatedSelectors.join(', '));

  // Añade clase inicial
  elements.forEach(el => el.classList.add('fade-in'));

  // Observador
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in--visible');
        // Deja de observar cuando ya es visible (optimización)
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px',
  });

  elements.forEach(el => observer.observe(el));
}

/* ─────────────────────────────────────────
   4. FORMULARIO DE RESERVAS
   - Validación básica
   - Feedback al usuario
───────────────────────────────────────── */
function initReservaForm() {
  const form = document.getElementById('reservaForm');
  if (!form) return;

  // Establece la fecha mínima como hoy
  const fechaInput = document.getElementById('fecha');
  if (fechaInput) {
    const hoy = new Date().toISOString().split('T')[0];
    fechaInput.setAttribute('min', hoy);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Recopila datos del formulario
    const nombre   = document.getElementById('nombre').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const fecha    = document.getElementById('fecha').value;
    const hora     = document.getElementById('hora').value;
    const personas = document.getElementById('personas').value;

    // Validación básica
    if (!nombre || !telefono || !fecha || !hora || !personas) {
      showMessage('Por favor completa todos los campos obligatorios.', 'error');
      return;
    }

    // Simulación de envío exitoso
    // En producción aquí iría el fetch() a tu backend o API
    showMessage(`¡Reserva recibida, ${nombre}! Te confirmamos en menos de 2 horas por WhatsApp al ${telefono}.`, 'success');
    form.reset();
  });
}

/* ─────────────────────────────────────────
   UTILIDAD: Mostrar mensaje de feedback
───────────────────────────────────────── */
function showMessage(text, type) {
  // Elimina mensaje anterior si existe
  const existing = document.getElementById('form-message');
  if (existing) existing.remove();

  const msg = document.createElement('div');
  msg.id = 'form-message';
  msg.textContent = text;
  msg.style.cssText = `
    padding: 1rem 1.5rem;
    border-radius: 4px;
    margin-top: 1rem;
    font-size: 0.9rem;
    font-weight: 600;
    background-color: ${type === 'success' ? 'rgba(37,211,102,0.15)' : 'rgba(232,97,26,0.15)'};
    color: ${type === 'success' ? '#25D366' : '#E8611A'};
    border: 1px solid ${type === 'success' ? 'rgba(37,211,102,0.3)' : 'rgba(232,97,26,0.3)'};
  `;

  const btn = document.querySelector('#reservaForm .btn--block');
  btn.insertAdjacentElement('afterend', msg);

  // Auto-elimina el mensaje después de 5 segundos
  setTimeout(() => msg.remove(), 5000);
}