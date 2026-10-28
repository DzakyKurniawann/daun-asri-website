// Elemen: satu kolom input dengan ikon
export const InputGroup = ({ icon, type, placeholder }) =>
  `<div class="input-group"><i data-feather="${icon}"></i><input type="${type}" placeholder="${placeholder}" required /></div>`;
