export function StockBadge(remaining) {
  if (remaining === 0) {
    return `<span class="product-stock out">Stok habis</span>`;
  } else if (remaining <= 3) {
    return `<span class="product-stock low">Stok sisa ${remaining}</span>`;
  }
  return `<span class="product-stock">Stok tersedia (${remaining})</span>`;
}