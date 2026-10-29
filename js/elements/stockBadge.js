export const StockBadge = (remaining) => {
  const cls = remaining === 0 ? 'out' : remaining <= 3 ? 'low' : '';
  return `<div class="product-stock ${cls}">${remaining === 0 ? 'Stok habis' : 'Stok: ' + remaining}</div>`;
};