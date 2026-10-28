import { navLinks } from '../data/content.js';
import { NavLink } from '../elements/navLink.js';
import { registerPanel } from '../utils/panel.js';
import { getCartTotal } from '../state/store.js';
import { $, $$ } from '../utils/dom.js';

export function init() {
  const container = $('#nav-links');
  if (container) {
    container.innerHTML = navLinks.map(NavLink).join('');
  }

  registerPanel($('#hamburger-menu'), container);
}

export function render() {
  const badge = $('#cart-count');
  if (!badge) return;
  const count = getCartTotal().count;
  badge.textContent = count;
  badge.classList.toggle('show', count > 0);
}