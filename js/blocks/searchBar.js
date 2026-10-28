// Blok: form pencarian. Saat dikirim, set kata kunci lalu scroll ke bagian produk.
import { $ } from '../utils/dom.js';
import { registerPanel } from '../utils/panel.js';
import { getState, setQuery } from '../state/store.js';

let prevQuery = '';

export function init() {
  const form = $('#search-form');
  const box = $('#search-box');
  const trigger = $('#search-button');

  registerPanel(trigger, form);
  trigger.addEventListener('click', () => box.focus());

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    setQuery(box.value);
    form.classList.remove('active');
    $('#products').scrollIntoView({ behavior: 'smooth' });
  });

  // Mengosongkan kolom otomatis mengembalikan produk unggulan
  box.addEventListener('input', () => {
    if (!box.value.trim() && getState().query) setQuery('');
  });
}

// Kosongkan kolom jika pencarian dihapus dari tempat lain (tombol "Tampilkan semua")
export function render() {
  const { query } = getState();
  if (prevQuery && !query) $('#search-box').value = '';
  prevQuery = query;
}
