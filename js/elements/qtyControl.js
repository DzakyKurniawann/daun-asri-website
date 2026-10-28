// Elemen: tombol kurang, jumlah, dan tambah. Tombol tambah mati saat jumlah mencapai stok.
export const QtyControl = (qty, max) => `
  <div class="qty">
    <button data-act="dec" aria-label="Kurangi">&minus;</button>
    <span>${qty}</span>
    <button data-act="inc" aria-label="Tambah" ${qty >= max ? 'disabled' : ''}>+</button>
  </div>`;
