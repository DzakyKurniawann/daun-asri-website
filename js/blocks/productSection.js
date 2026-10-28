// Blok: section produk. Menampilkan produk unggulan atau hasil pencarian.
import { $ } from '../utils/dom.js';
import { ProductCard } from '../components/productCard.js';
import { showToast } from '../components/toast.js';
import { addToCart, openModal, setQuery, getState, getVisibleProducts, remainingStock } from '../state/store.js';

export function init() {
  $('#product-list').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    e.preventDefault();
    const id = Number(btn.closest('.product-card').dataset.id);
    if (btn.dataset.action === 'add') {
      const plant = addToCart(id);
      if (plant) showToast(`${plant.name} ditambahkan ke keranjang`);
    } else {
      openModal(id);
    }
  });

  $('#search-info').addEventListener('click', (e) => {
    if (e.target.closest('.link-btn')) setQuery('');
  });
}

export function render() {
  const { query } = getState();
  const list = getVisibleProducts();
  $('#product-list').innerHTML = list.map((p) => ProductCard(p, remainingStock(p))).join('');

  const info = $('#search-info');
  info.hidden = !query;
  if (!query) return;

  info.textContent = list.length
    ? `Menampilkan ${list.length} hasil untuk “${query}”.`
    : `Tidak ada tanaman dengan kata kunci “${query}”.`;
  const btn = document.createElement('button');
  btn.className = 'link-btn';
  btn.textContent = list.length ? 'Tampilkan semua' : 'Lihat produk unggulan';
  info.appendChild(btn);
}
