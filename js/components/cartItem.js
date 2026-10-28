// Komponen: satu baris produk di keranjang (nama, harga satuan, jumlah, subtotal, hapus)
import { QtyControl } from '../elements/qtyControl.js';
import { rupiah } from '../utils/format.js';

export const CartItem = (plant, qty) => `
  <div class="cart-item" data-id="${plant.id}">
    <img src="${plant.img}" alt="${plant.name}" />
    <div class="item-detail">
      <h3>${plant.name}</h3>
      <div class="item-price">${rupiah(plant.price)} / pcs</div>
      ${QtyControl(qty, plant.stock)}
      <div class="item-subtotal">${rupiah(plant.price * qty)}</div>
    </div>
    <button class="remove-item" data-act="remove" aria-label="Hapus ${plant.name}"><i data-feather="trash-2"></i></button>
  </div>`;
