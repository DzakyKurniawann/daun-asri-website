export function IconButton(action, iconClass, label) {
  return `<button class="icon-btn" data-action="${action}"><i class="${iconClass}"></i> ${label || ''}</button>`;
}