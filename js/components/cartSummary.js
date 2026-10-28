// Komponen: ringkasan total keranjang
import { rupiah } from '../utils/format.js';

export const CartSummary = (count, total) => `<span>Total (${count} barang)</span><span>${rupiah(total)}</span>`;
