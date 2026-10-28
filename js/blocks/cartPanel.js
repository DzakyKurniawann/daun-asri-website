// Blok: panel keranjang belanja (daftar item, jumlah, total)
import { $ } from '../utils/dom.js';
import { registerPanel } from '../utils/panel.js';
import { CartItem } from '../components/cartItem.js';
import { CartSummary } from '../components/cartSummary.js';
import { changeQty, removeFromCart, getCartEntries, getCartCount, getCartTotal } from '../state/store.js';

export function init() {
  registerPanel($('#shopping-cart-button'), $('#cart-panel'));

  $('#cart-items').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-act]');
    if (!btn || btn.disabled) return;
    const id = Number(btn.closest('.cart-item').dataset.id);
    if (btn.dataset.act === 'inc') changeQty(id, 1);
    else if (btn.dataset.act === 'dec') changeQty(id, -1);
    else if (btn.dataset.act === 'remove') removeFromCart(id);
  });
}

export function render() {
  const entries = getCartEntries();
  $('#cart-items').innerHTML = entries.map(({ plant, qty }) => CartItem(plant, qty)).join('');
  $('#cart-empty').hidden = entries.length > 0;

  const total = $('#cart-total');
  total.hidden = entries.length === 0;
  total.innerHTML = CartSummary(getCartCount(), getCartTotal());
}
