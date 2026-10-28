// Komponen: notifikasi singkat di bawah layar
import { $ } from '../utils/dom.js';

let timer;
export function showToast(message) {
  const el = $('#toast');
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(timer);
  timer = setTimeout(() => el.classList.remove('show'), 1800);
}
