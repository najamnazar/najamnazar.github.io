document.addEventListener('DOMContentLoaded', function() {
  const filterChips = document.querySelectorAll('.filter-chip');
  const filterGroups = document.querySelectorAll('.filter-group');
  const publicationItems = document.querySelectorAll('.publication-item');
  const yearSections = document.querySelectorAll('.publication-year-section');

  const activeFilters = {
    year: 'all',
    status: 'all',
    type: 'all'
  };

  function updateView() {
    publicationItems.forEach(item => {
      const matchesYear = activeFilters.year === 'all' || item.dataset.year === activeFilters.year;
      const matchesStatus = activeFilters.status === 'all' || item.dataset.status === activeFilters.status;
      const matchesType = activeFilters.type === 'all' || item.dataset.type === activeFilters.type;
      item.classList.toggle('hidden', !(matchesYear && matchesStatus && matchesType));
    });

    yearSections.forEach(section => {
      const visibleItems = section.querySelectorAll('.publication-item:not(.hidden)').length;
      section.classList.toggle('hidden', visibleItems === 0);
    });
  }

  filterChips.forEach(chip => {
    chip.addEventListener('click', function() {
      const group = this.closest('.filter-options');
      const type = this.dataset.type;
      group.querySelectorAll('.filter-chip').forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      activeFilters[type] = this.dataset.filter;
      updateView();
    });
  });

  filterGroups.forEach(group => {
    const trigger = group.querySelector('.filter-trigger');
    if (!trigger) return;
    trigger.addEventListener('click', function() {
      const expanded = group.classList.toggle('is-open');
      trigger.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
  });

  updateView();
});
