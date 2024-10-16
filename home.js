document.querySelector('.search-bar input').addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    const amiiboCards = document.querySelectorAll('.amiibo-card');
    
    amiiboCards.forEach(card => {
      const amiiboName = card.alt.toLowerCase();
      if (amiiboName.includes(filter)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
  