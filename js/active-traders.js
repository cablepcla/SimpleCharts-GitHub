document.addEventListener("DOMContentLoaded", function () {
    const traderEl = document.querySelector(".trader-count");

    const MIN = 10000;
    const MAX = 30000;
    const TIMEZONE = "America/New_York";

    // --- Get global 30-second step index ---
    function getStepIndex() {
        const now = new Date();

        const formatter = new Intl.DateTimeFormat("en-US", {
            timeZone: TIMEZONE,
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
        });

        const parts = formatter.formatToParts(now);
        const values = {};
        parts.forEach(p => values[p.type] = p.value);

        const tzDate = new Date(
            `${values.year}-${values.month}-${values.day}T${values.hour}:${values.minute}:${values.second}`
        );

        const seconds = Math.floor(tzDate.getTime() / 1000);

        return Math.floor(seconds / 30);
    }

    function seededRandom(seed) {
        const x = Math.sin(seed * 9999) * 10000;
        return x - Math.floor(x);
    }

    function generateCount() {
        const step = getStepIndex();
        const BASE = 20000;

        let value = BASE;

        for (let i = step - 200; i <= step; i++) {
            const rand = seededRandom(i);

            let movement;

            // 🔥 70% small moves, 30% big moves
            if (rand < 0.7) {
                movement = rand < 0.35 ? -2 : 2;   // small
            } else {
                movement = rand < 0.85 ? -7 : 7;   // big
            }

            value += movement;

            if (value < MIN) value = MIN;
            if (value > MAX) value = MAX;
        }

        return value;
    }

    function updateCount() {
        const value = generateCount();
        traderEl.textContent = value.toLocaleString();
    }

    // Initial render
    updateCount();

    // Sync to next 30-second boundary
    const msToNext30Sec = 30000 - (Date.now() % 30000);

    setTimeout(() => {
        updateCount();
        setInterval(updateCount, 30000);
    }, msToNext30Sec);
});