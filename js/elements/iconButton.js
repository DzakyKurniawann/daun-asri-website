export const IconButton = ({ icon, label, action, disabled = false }) =>
  `<a href="#" class="${disabled ? 'disabled' : ''}" data-action="${action}" aria-label="${label}" aria-disabled="${disabled}"><i data-feather="${icon}"></i></a>`;
