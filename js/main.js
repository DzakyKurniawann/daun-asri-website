// Titik masuk aplikasi: merakit blok dan merender ulang saat state berubah.
import { subscribe } from './state/store.js';
import { refreshIcons } from './utils/icons.js';
import * as navbar from './blocks/navbar.js';
import * as searchBar from './blocks/searchBar.js';
import * as cartPanel from './blocks/cartPanel.js';
import * as menuSection from './blocks/menuSection.js';
import * as productSection from './blocks/productSection.js';
import * as productModal from './blocks/productModal.js';
import * as contactSection from './blocks/contactSection.js';
import * as footer from './blocks/footer.js';

// init: dijalankan sekali (render statis dan pasang event listener)
// render: dijalankan setiap state berubah
const blocks = [navbar, searchBar, cartPanel, menuSection, productSection, productModal, contactSection, footer];

blocks.forEach((o) => o.init?.());

function renderAll() {
  blocks.forEach((o) => o.render?.());
  refreshIcons();
}

subscribe(renderAll);
renderAll();
