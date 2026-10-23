(() => {
  const menuButton = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-menu]');
  if (menuButton && menu) {
    const close = () => { menu.classList.remove('is-open'); menuButton.setAttribute('aria-expanded','false'); };
    menuButton.addEventListener('click', () => {
      const next = !menu.classList.contains('is-open');
      menu.classList.toggle('is-open', next);
      menuButton.setAttribute('aria-expanded', String(next));
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
    document.addEventListener('keydown', e => { if(e.key === 'Escape') close(); });
  }
  const portrait = document.querySelector('.hero-portrait img');
  if (portrait) portrait.addEventListener('error', () => portrait.parentElement.classList.add('no-photo'));
  const buttons = document.querySelectorAll('.filter[data-filter]');
  const publications = document.querySelectorAll('.pub-item[data-category]');
  const empty = document.querySelector('.empty-state');
  if (buttons.length && publications.length) {
    buttons.forEach(button => button.addEventListener('click', () => {
      const selected = button.dataset.filter;
      buttons.forEach(b => b.setAttribute('aria-pressed', String(b === button)));
      let visible = 0;
      publications.forEach(p => {
        const show = selected === 'all' || p.dataset.category.split(' ').includes(selected);
        p.hidden = !show;
        if (show) visible++;
      });
      if (empty) empty.classList.toggle('visible', visible === 0);
    }));
  }
  document.querySelectorAll('[data-current-year]').forEach(el => el.textContent = String(new Date().getFullYear()));
})();
