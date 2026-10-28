import { ProductCard } from '../components/productCard.js';
import { showToast } from '../components/toast.js';

export function initProductSection(plants, openModalCallback) {
  const productList = document.getElementById('product-list');
  if (!productList) return;

  function render(data) {
    productList.innerHTML = data.map(plant => ProductCard(plant)).join('');
  }

  render(plants);

  productList.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-action]');
    if (!btn) return;
    
    const action = btn.dataset.action;
    const id = btn.closest('.product-card').dataset.id;
    const plant = plants.find(p => p.id == id);

    if (action === 'detail') {
      if (openModalCallback) openModalCallback(plant);
    } else if (action === 'cart') {
      showToast(`Berhasil menambahkan ${plant.name} ke keranjang!`);
    }
  });
}