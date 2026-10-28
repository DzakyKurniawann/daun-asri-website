// Komponen: kartu koleksi tanaman
import { StockBadge } from '../elements/stockBadge.js';
import { rupiah } from '../utils/format.js';

export const MenuCard = (plant, remaining) => `
  <div class="menu-card ${remaining === 0 ? 'sold-out' : ''}" data-id="${plant.id}">
    <img src="${plant.img}" alt="${plant.name}" class="menu-card-img" />
    <h3 class="menu-card-title">${plant.name}</h3>
    <p class="menu-card-price">${rupiah(plant.price)}</p>
    ${StockBadge(remaining)}
  </div>`;
