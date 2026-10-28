import { rupiah } from '../utils/format.js';

export const PriceTag = (price, oldPrice) => `${rupiah(price)} <span>${rupiah(oldPrice)}</span>`;