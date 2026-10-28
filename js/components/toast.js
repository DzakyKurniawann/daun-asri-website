let timeoutId = null;

export function showToast(pesan) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  
  toast.textContent = pesan;
  toast.classList.add('show');
  
  if (timeoutId) clearTimeout(timeoutId);
  
  timeoutId = setTimeout(() => {
    toast.classList.remove('show');
  }, 1800);
}