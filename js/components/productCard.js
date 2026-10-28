// Komponen: kartu produk. Saat stok habis tombol keranjang mati, tombol detail tetap aktif.
import { IconButton } from '../elements/iconButton.js';
import { Stars } from '../elements/stars.js';
import { PriceTag } from '../elements/priceTag.js';
import { StockBadge } from '../elements/stockBadge.js';

export const ProductCard = (plant, remaining) => {
  const out = remaining === 0;
  return `
  <div class="product-card ${out ? 'sold-out' : ''}" data-id="${plant.id}">
    <div class="product-icons">
      ${IconButton({ icon: 'shopping-cart', label: 'Tambah ke keranjang', action: 'add', disabled: out })}
      ${IconButton({ icon: 'eye', label: 'Lihat detail', action: 'detail' })}
    </div>
    <div class="product-image">
      <img src="${plant.productImg || plant.img}" alt="${plant.name}" />
      ${out ? '<span class="product-ribbon">Stok habis</span>' : ''}
    </div>
    <div class="product-content">
      <h3>${plant.name}</h3>
      <div class="product-stars">${Stars(plant.stars)}</div>
      <div class="product-price">${PriceTag(plant.price, plant.old)}</div>
      ${StockBadge(remaining)}
    </div>
  </div>`;
};
