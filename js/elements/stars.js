export const Stars = (rating) =>
  [1, 2, 3, 4, 5].map((i) => `<i data-feather="star" class="${i <= rating ? 'star-full' : ''}"></i>`).join('');