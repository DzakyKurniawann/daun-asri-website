import { $ } from '../utils/dom.js';
import { registerPanel } from '../utils/panel.js';
import { navLinks } from '../data/content.js';
import { NavLink } from '../elements/navLink.js';
import { getCartCount } from '../state/store.js';

export function init() {
  $('#nav-links').innerHTML = navLinks.map(NavLink).join('');
  registerPanel($('#hamburger-menu'), $('.navbar-nav'));
}

export function render() {
  const count = getCartCount();
  const badge = $('#cart-count');
  badge.textContent = count;
  badge.classList.toggle('show', count > 0);
}