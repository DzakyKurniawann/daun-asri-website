// Blok: footer (tautan dan media sosial)
import { $ } from '../utils/dom.js';
import { navLinks, socials } from '../data/content.js';
import { NavLink } from '../elements/navLink.js';
import { SocialLink } from '../elements/socialLink.js';

export function init() {
  $('#footer-links').innerHTML = navLinks.map(NavLink).join('');
  $('#footer-socials').innerHTML = socials.map(SocialLink).join('');
}
