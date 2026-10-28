export function PriceTag(price, oldPrice) {
  if (oldPrice) {
    return `<div class="price-tag"><span class="old-price">Rp ${oldPrice.toLocaleString()}</span> <span class="new-price">Rp ${price.toLocaleString()}</span></div>`;
  }
  return `<div class="price-tag">Rp ${price.toLocaleString()}</div>`;
}