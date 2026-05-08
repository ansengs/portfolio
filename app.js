(function () {
  'use strict';

  const tabs = Array.from(document.querySelectorAll('.tab[data-panel]'));
  const panels = Array.from(document.querySelectorAll('.panel[id^="panel-"]'));

  function goTab(panelName) {
    const targetPanel = document.getElementById(`panel-${panelName}`);
    const targetTab = document.querySelector(`.tab[data-panel="${panelName}"]`);
    if (!targetPanel || !targetTab) return;

    tabs.forEach(tab => tab.classList.toggle('active', tab === targetTab));
    panels.forEach(panel => {
      panel.classList.toggle('active', panel === targetPanel);
      panel.classList.remove('exit');
      if (panel !== targetPanel) panel.scrollTop = 0;
    });
  }

  window.goTab = goTab;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => goTab(tab.dataset.panel));
  });

  document.querySelectorAll('.proj-card[data-url]').forEach(card => {
    const openCard = () => window.open(card.dataset.url, '_blank', 'noopener,noreferrer');
    card.addEventListener('click', openCard);
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openCard();
      }
    });
  });
})();
