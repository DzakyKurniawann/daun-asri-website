import { Stars } from '../elements/stars.js';

export function initProductModal() {
  const modal = document.getElementById('productModal');
  const closeBtn = document.getElementById('modal-close');

  function closeModal() {
    modal.classList.remove('active');
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  window.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  return {
    open(plant) {
      document.getElementById('modal-img').src = plant.image;
      document.getElementById('modal-name').textContent = plant.name;
      document.getElementById('modal-desc').textContent = plant.description;
      document.getElementById('modal-price').textContent = `Rp ${plant.price.toLocaleString()}`;
      document.getElementById('modal-stars').innerHTML = Stars(plant.rating || 5);
      
      const stockEl = document.getElementById('modal-stock');
      stockEl.textContent = plant.remaining > 0 ? `Stok tersedia: ${plant.remaining}` : 'Stok Habis';
      
      const addBtn = document.getElementById('modal-add');
      if (plant.remaining === 0) {
        addBtn.setAttribute('disabled', 'true');
        addBtn.textContent = 'Stok Habis';
      } else {
        addBtn.removeAttribute('disabled');
        addBtn.textContent = 'Tambah ke Keranjang';
      }

      modal.classList.add('active');
    },
    close: closeModal
  };
}