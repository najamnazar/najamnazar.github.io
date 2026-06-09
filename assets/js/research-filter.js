document.addEventListener('DOMContentLoaded', function() {
  const chips = document.querySelectorAll('.area-chip');
  const projectCards = document.querySelectorAll('.project-card');

  chips.forEach(chip => {
    chip.addEventListener('click', function() {
      chips.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      const area = this.dataset.area;

      projectCards.forEach(card => {
        if (area === 'all') {
          card.classList.remove('hidden');
          return;
        }
        const areas = card.dataset.areas.split(' ');
        card.classList.toggle('hidden', !areas.includes(area));
      });
    });
  });
});
