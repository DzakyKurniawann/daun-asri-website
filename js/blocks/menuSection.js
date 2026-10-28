// Blok: section koleksi tanaman
import { $ } from '../utils/dom.js';
import { MenuCard } from '../components/menuCard.js';
import { getAllPlants, remainingStock } from '../state/store.js';

export function render() {
  $('#menu-list').innerHTML = getAllPlants().map((p) => MenuCard(p, remainingStock(p))).join('');
}