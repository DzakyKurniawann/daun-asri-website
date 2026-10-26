const panels = [];

document.addEventListener('click', (e) => {
  const path = e.composedPath();
  panels.forEach(({ trigger, panel }) => {
    if (!path.includes(trigger) && !path.includes(panel)) panel.classList.remove('active');
  });
});

export function registerPanel(trigger, panel) {
  panels.push({ trigger, panel });
  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    panel.classList.toggle('active');
  });
}
