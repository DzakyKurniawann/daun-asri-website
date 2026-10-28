// Blok: form kontak. Dirender sekali agar isian pengguna tidak terhapus.
import { $ } from '../utils/dom.js';
import { contactFields } from '../data/content.js';
import { InputGroup } from '../elements/inputGroup.js';

export function init() {
  $('#contact-fields').innerHTML = contactFields.map(InputGroup).join('');
  $('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Terima kasih! Pesanmu sudah kami terima.');
    e.target.reset();
  });
}
