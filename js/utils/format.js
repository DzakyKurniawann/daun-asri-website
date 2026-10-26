export const rupiah = (n) => 'IDR ' + (n % 1000 === 0 ? n / 1000 + 'K' : n.toLocaleString('id-ID'));
