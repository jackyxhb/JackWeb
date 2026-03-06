const faqToggles = Array.from(document.querySelectorAll('.faq-toggle'));
const announcer = document.getElementById('faq-announcer');

const announceFaqState = (button, expanded) => {
  if (!announcer) {
    return;
  }

  const labelNode = button.querySelector('span');
  const label = labelNode ? labelNode.textContent.trim() : 'FAQ item';
  const state = expanded ? 'expanded' : 'collapsed';

  // Clear first so screen readers re-announce repeated interactions.
  announcer.textContent = '';
  requestAnimationFrame(() => {
    announcer.textContent = `${label} ${state}.`;
  });
};

const setExpandedState = (button, expanded) => {
  const contentId = button.getAttribute('aria-controls');
  const content = contentId ? document.getElementById(contentId) : null;
  const container = button.closest('.faq-item');
  const chevron = button.querySelector('.chevron');

  button.setAttribute('aria-expanded', String(expanded));

  if (content) {
    if (expanded) {
      content.removeAttribute('hidden');
    } else {
      content.setAttribute('hidden', '');
    }
  }

  if (container) {
    container.classList.toggle('is-open', expanded);
  }

  if (chevron) {
    chevron.textContent = expanded ? '▲' : '▼';
  }
};

faqToggles.forEach((button) => {
  button.addEventListener('click', () => {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    faqToggles.forEach((otherButton) => {
      if (otherButton !== button) {
        setExpandedState(otherButton, false);
      }
    });

    setExpandedState(button, !isExpanded);
    announceFaqState(button, !isExpanded);
  });
});
