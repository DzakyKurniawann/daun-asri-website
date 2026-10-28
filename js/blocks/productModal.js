// Blok: modal detail produk
import { $ } from '../utils/dom.js';
import { Stars } from '../elements/stars.js';
import { PriceTag } from '../elements/priceTag.js';
import { StockBadge } from '../elements/stockBadge.js';
import { showToast } from '../components/toast.js';
import { addToCart, closeModal, getPlant, getState, remainingStock } from '../state/store.js';

export function init() {
  const modal = $('#item-detail-modal');

  $('#modal-add').addEventListener('click', (e) => {
    e.preventDefault();
    const { activeId } = getState();
    if (activeId === null) return;
    const plant = addToCart(activeId);
    if (plant) showToast(`${plant.name} ditambahkan ke keranjang`);
  });
  $('.modal .close-icon').addEventListener('click', (e) => {
    e.preventDefault();
    closeModal();
  });
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

export function render() {
  const { activeId } = getState();
  $('#item-detail-modal').style.display = activeId === null ? 'none' : 'flex';
  if (activeId === null) return;

  const plant = getPlant(activeId);
  const remaining = remainingStock(plant);
  $('#modal-img').src = plant.productImg || plant.img;
  $('#modal-img').alt = plant.name;
  $('#modal-name').textContent = plant.name;
  $('#modal-desc').textContent = plant.desc;
  $('#modal-stars').innerHTML = Stars(plant.stars);
  $('#modal-price').innerHTML = PriceTag(plant.price, plant.old);
  $('#modal-stock').innerHTML = StockBadge(remaining);
  $('#modal-add').classList.toggle('disabled', remaining === 0);
  $('#modal-add-text').textContent = remaining === 0 ? 'Stok habis' : 'Tambah ke keranjang';
}
