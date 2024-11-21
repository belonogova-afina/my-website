document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.card');
    const flipButtons = document.querySelectorAll('.flip-button');
    
    flipButtons.forEach(button => {
        button.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space' && document.activeElement.classList.contains('flip-button')) {
            e.preventDefault();
            card.classList.toggle('flipped');
        }
    });

    card.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.02) rotateY(' + (this.classList.contains('flipped') ? '180deg' : '0deg') + ')';
    });

    card.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1) rotateY(' + (this.classList.contains('flipped') ? '180deg' : '0deg') + ')';
    });
});