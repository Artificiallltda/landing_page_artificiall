document.addEventListener('DOMContentLoaded', function() {
    const linkCards = document.querySelectorAll('.link-card.main-link');
    
    linkCards.forEach(card => {
        const button = card.querySelector('.link-header[data-target]');
        
        if (button) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                linkCards.forEach(otherCard => {
                    if (otherCard !== card && otherCard.classList.contains('active')) {
                        otherCard.classList.remove('active');
                    }
                });
                
                card.classList.toggle('active');
            });
        }
    });
    
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.link-card.main-link')) {
            linkCards.forEach(card => {
                card.classList.remove('active');
            });
        }
    });

    const aiCards = document.querySelectorAll('.ai-card');
    if (aiCards.length > 0) {
        let delay = 0;
        aiCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('ai-card-visible');
            }, delay);
            delay += 30; 
        });
    }
});
