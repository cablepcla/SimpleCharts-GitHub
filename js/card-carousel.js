const track = document.getElementById('track');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('dots');

const VISIBLE = 3;
const GAP = 20;
let current = 0;

const cards = track.querySelectorAll('.card');
const total = cards.length;
const maxIndex = total - VISIBLE;

// Build dots
for (let i = 0; i <= maxIndex; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
}

function goTo(index) {
    current = Math.max(0, Math.min(index, maxIndex));

    const cardWidth = cards[0].offsetWidth;
    const offset = current * (cardWidth + GAP);

    track.style.transform = `translateX(-${offset}px)`;

    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === maxIndex;

    document.querySelectorAll('.dot').forEach((d, i) =>
        d.classList.toggle('active', i === current)
    );
}

function move(dir) { goTo(current + dir); }

window.addEventListener('resize', () => goTo(current));

goTo(0);