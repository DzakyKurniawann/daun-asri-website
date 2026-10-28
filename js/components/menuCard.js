import { StockBadge } from '../elements/stockBadge.js';

export function MenuCard(plant) {
  const isSoldOut = plant.remaining === 0;
  return `
    <div class="menu-card ${isSoldOut ? 'sold-out' : ''}">
      <img src="${plant.image}" alt="${plant.name}">
      <div class="menu-card-body">
        <h3>${plant.name}</h3>
        <p>${plant.description || ''}</p>
        <div class="card-footer">
          <span>Rp ${plant.price.toLocaleString()}</span>
          ${StockBadge(plant.remaining)}
        </div>
      </div>
    </div>
  `;
}