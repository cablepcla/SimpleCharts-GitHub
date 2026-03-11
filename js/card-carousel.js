(function () {
    const slider = document.getElementById('cardsSlider');
    const btnPrev = document.getElementById('cardsPrev');
    const btnNext = document.getElementById('cardsNext');

    if (!slider || !btnPrev || !btnNext) return;

    /* One step = first card's width + the 32px gap */
    function step() {
        const card = slider.querySelector('.card');
        return card ? card.offsetWidth + 32 : 377;
    }

    function updateButtons() {
        btnPrev.disabled = slider.scrollLeft <= 0;
        btnNext.disabled =
            slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 1;
    }

    btnPrev.addEventListener('click', () =>
        slider.scrollBy({ left: -step(), behavior: 'smooth' })
    );
    btnNext.addEventListener('click', () =>
        slider.scrollBy({ left: step(), behavior: 'smooth' })
    );

    slider.addEventListener('scroll', updateButtons, { passive: true });
    window.addEventListener('resize', updateButtons);

    updateButtons(); // set initial disabled state
})();