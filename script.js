/**
 * Website Portofolio Pribadi — Deny Kurniawan
 * Logic: Interaksi Menu Mobile, Navigasi Aksesibel, dan Inisialisasi Ikon
 */

document.addEventListener('DOMContentLoaded', () => {
  // Inisialisasi ikon Lucide
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }

  // Elemen navigasi mobile
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuToggle || !mobileMenu) {
    return;
  }

  /**
   * Buka atau tutup menu navigasi mobile
   * @param {boolean} isOpen
   */
  const setMenuState = (isOpen) => {
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi');

    if (isOpen) {
      mobileMenu.classList.remove('hidden');
    } else {
      mobileMenu.classList.add('hidden');
    }

    // Perbarui ikon menu jika Lucide tersedia
    const menuIcon = menuToggle.querySelector('[data-lucide]');
    if (menuIcon) {
      menuIcon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
      if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
      }
    }
  };

  // Toggle menu via tombol hamburger
  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    setMenuState(!isExpanded);
  });

  // Tutup menu ketika tautan navigasi dipilih
  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      setMenuState(false);
    });
  });

  // Tutup menu ketika menekan tombol Escape
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        setMenuState(false);
        menuToggle.focus();
      }
    }
  });

  // Tutup menu jika pengguna mengklik area luar menu saat terbuka
  document.addEventListener('click', (event) => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    if (!isExpanded) return;

    const clickedInsideMenu = mobileMenu.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {
      setMenuState(false);
    }
  });
});

