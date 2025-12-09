
  const cards = document.querySelectorAll('.collection-card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // чтобы не повторялось
      }
    });
  }, { threshold: 0.3 }); // когда 30% элемента видно — запускаем

  cards.forEach(card => {
    observer.observe(card);
    window.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.creator-card');
    cards.forEach(card => card.classList.add('show'));
  });
  });

