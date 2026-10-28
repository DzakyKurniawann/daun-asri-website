import { StockBadge } from '../elements/stockBadge.js';

export function ProductCard(plant) {
  const isSoldOut = plant.remaining === 0;
  return `
    <div class="product-card ${isSoldOut ? 'sold-out' : ''}" data-id="${plant.id}">
      ${isSoldOut ? '<div class="product-ribbon">Stok Habis</div>' : ''}
      <img src="${plant.image}" alt="${plant.name}">
      <div class="product-info">
        <h3>${plant.name}</h3>
        <p>Rp ${plant.price.toLocaleString()}</p>
        ${StockBadge(plant.remaining)}
        <div class="product-actions">
          <button class="btn-detail" data-action="detail" data-id="${plant.id}">Detail</button>
          <button class="btn-cart" data-action="cart" data-id="${plant.id}" ${isSoldOut ? 'disabled' : ''}>+ Keranjang</button>
        </div>
      </div>
    </div>
  `;
}