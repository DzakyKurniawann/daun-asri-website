export function Stars(rating = 5) {
  let html = '<div class="star-full">';
  for (let i = 0; i < 5; i++) {
    html += i < rating ? '★' : '☆';
  }
  html += '</div>';
  return html;
}