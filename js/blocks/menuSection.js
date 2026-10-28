import { MenuCard } from '../components/menuCard.js';

export function renderMenuSection(plants) {
  const menuList = document.getElementById('menu-list');
  if (!menuList) return;
  
  menuList.innerHTML = plants.map(plant => MenuCard(plant)).join('');
}