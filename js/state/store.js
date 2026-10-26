import { plants } from '../data/plants.js';

const state = { cart: {}, query: '', activeId: null }; // cart: { idTanaman: jumlah }
const listeners = [];
const emit = () => listeners.forEach((fn) => fn());

export const subscribe = (fn) => listeners.push(fn);
export const getState = () => state;

export const getAllPlants = () => plants;
export const getPlant = (id) => plants.find((p) => p.id === id);
export const remainingStock = (p) => p.stock - (state.cart[p.id] || 0);

export const getCartEntries = () =>
  Object.keys(state.cart).map((id) => ({ plant: getPlant(Number(id)), qty: state.cart[id] }));
export const getCartCount = () => getCartEntries().reduce((sum, e) => sum + e.qty, 0);
export const getCartTotal = () => getCartEntries().reduce((sum, e) => sum + e.plant.price * e.qty, 0);

export const getVisibleProducts = () => {
  const q = state.query.toLowerCase();
  return q ? plants.filter((p) => p.name.toLowerCase().includes(q)) : plants.filter((p) => p.featured);
};

export function addToCart(id) {
  const plant = getPlant(id);
  if (!plant || remainingStock(plant) <= 0) return null;
  state.cart[id] = (state.cart[id] || 0) + 1;
  emit();
  return plant;
}

export function changeQty(id, delta) {
  const plant = getPlant(id);
  const next = (state.cart[id] || 0) + delta;
  if (next <= 0) delete state.cart[id];
  else if (next <= plant.stock) state.cart[id] = next;
  emit();
}

export function removeFromCart(id) {
  delete state.cart[id];
  emit();
}

export function setQuery(query) {
  state.query = query.trim();
  emit();
}

export function openModal(id) {
  state.activeId = id;
  emit();
}

export function closeModal() {
  if (state.activeId === null) return;
  state.activeId = null;
  emit();
}
