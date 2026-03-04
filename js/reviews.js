const reviews = [
    {
        username: "Liam O’Connor",
        reviewHeading: "Super clean signals",
        reviewDescription: "I’ve tried a lot of tools, but this one just makes sense. The levels are clear, no overcomplication. I check TradingView in the morning, plan my trades, and that’s it.",
        date: "2025-08-02",
        location: "Ireland",
        avatar: "img/reviews/user-m1.jpg"
    },
    {
        username: "Mateo González",
        reviewHeading: "Finally something straightforward",
        reviewDescription: "What I like most is how direct everything feels. No endless indicators, no confusion. Just clear areas to focus on and execute with confidence.",
        date: "2025-09-11",
        location: "Spain",
        avatar: "img/reviews/user-m2.jpg"
    },
    {
        username: "Noah Müller",
        reviewHeading: "Clean charts, better decisions",
        reviewDescription: "It removed a lot of the second guessing from my trades. The structure is simple and it fits perfectly into my existing TradingView workflow.",
        date: "2025-10-05",
        location: "Germany",
        avatar: "img/reviews/user-m3.jpg"
    },
    {
        username: "Lucas Moreau",
        reviewHeading: "Simple but powerful",
        reviewDescription: "I was skeptical at first, but after a few weeks I noticed I was trading with more discipline. The signals are easy to follow and don’t clutter the chart.",
        date: "2025-07-29",
        location: "France",
        avatar: "img/reviews/user-m4.jpg"
    },
    {
        username: "Ethan Williams",
        reviewHeading: "Fits my routine perfectly",
        reviewDescription: "Morning coffee, open TradingView, check the levels, execute. That’s literally my process now. It saves me time every single day.",
        date: "2025-11-14",
        location: "United States",
        avatar: "img/reviews/user-m5.jpg"
    },
    {
        username: "Jack Thompson",
        reviewHeading: "No noise, just structure",
        reviewDescription: "I appreciate how clean everything looks. The levels are clear and I don’t feel overwhelmed anymore when I open my charts.",
        date: "2025-12-03",
        location: "Australia",
        avatar: "img/reviews/user-m6.jpg"
    },
    {
        username: "Yuki Tanaka",
        reviewHeading: "Very clear execution levels",
        reviewDescription: "The best part for me is clarity. I know exactly what I’m looking at. It makes planning trades much faster and less emotional.",
        date: "2026-01-09",
        location: "Japan",
        avatar: "img/reviews/user-m7.jpg"
    },
    {
        username: "Rafael Silva",
        reviewHeading: "Helped me stay disciplined",
        reviewDescription: "Before using this, I overtraded a lot. Now I wait for the proper levels and stick to the plan. It made my trading much more structured.",
        date: "2025-08-21",
        location: "Brazil",
        avatar: "img/reviews/user-m8.jpg"
    },
    {
        username: "Arjun Patel",
        reviewHeading: "Clear levels every day",
        reviewDescription: "What stands out is consistency. Every day I open the chart and immediately see what matters. It removes the guesswork.",
        date: "2025-09-30",
        location: "India",
        avatar: "img/reviews/user-m9.jpg"
    },
    {
        username: "Sven Andersson",
        reviewHeading: "Makes trading less stressful",
        reviewDescription: "I used to overanalyze everything. Now I just follow the structure provided. It’s calm, simple, and effective.",
        date: "2025-10-18",
        location: "Sweden",
        avatar: "img/reviews/user-m10.jpg"
    },
    {
        username: "Marco Rossi",
        reviewHeading: "Exactly what I needed",
        reviewDescription: "It feels designed for traders who want clarity. No flashy distractions, just levels and logic. I’ve integrated it fully into my workflow.",
        date: "2025-11-27",
        location: "Italy",
        avatar: "img/reviews/user-m11.jpg"
    },
    {
        username: "Daniel Popescu",
        reviewHeading: "Clean and efficient",
        reviewDescription: "I like tools that don’t waste time. This one is direct and practical. Open chart, check levels, execute with confidence.",
        date: "2025-12-19",
        location: "Romania",
        avatar: "img/reviews/user-m12.jpg"
    },
    {
        username: "Thomas Dubois",
        reviewHeading: "Simple workflow improvement",
        reviewDescription: "It didn’t change my strategy completely, but it improved my execution a lot. The clarity it brings is underrated.",
        date: "2026-02-03",
        location: "Belgium",
        avatar: "img/reviews/user-m13.jpg"
    },
    {
        username: "Hugo Nilsen",
        reviewHeading: "Very intuitive to use",
        reviewDescription: "I didn’t need a long learning curve. Everything is straightforward and easy to understand from day one.",
        date: "2025-07-22",
        location: "Norway",
        avatar: "img/reviews/user-m14.jpg"
    },




];

const tracks = document.querySelectorAll(".review-track");

const trackLeft = document.querySelector(".review-track.left");
const trackRight = document.querySelector(".review-track.right");

// Split reviews in half
const half = Math.ceil(reviews.length / 2);
const leftReviews = reviews.slice(0, half);
const rightReviews = reviews.slice(half);

// Generate HTML
function generateHTML(list) {
    return list.map(r => `
    <article class="review-card">
      <div class="review-head">
        <h4 class="review-heading">${escapeHtml(r.reviewHeading)}</h4>
        <div class="review-description">${escapeHtml(r.reviewDescription)}</div>
      </div>

      <div class="review-footer">
        <div class="review-user">
          <img class="review-avatar" src="${escapeAttr(r.avatar)}" alt="${escapeAttr(r.username)}">
          <div>
            <div class="review-username">${escapeHtml(r.username)}</div>
            <img class="review-stars" src="svg/stars.svg">
          </div>
        </div>

        <div class="review-tags">
            <div class="tag"><img class="tag-icon" src="svg/calendar.svg"> ${escapeHtml(r.date)}</div>
            <div class="tag"><img class="tag-icon" src="svg/location-pin.svg"> ${escapeHtml(r.location)}</div>
        </div>
      </div>
    </article>
  `).join("");
}

// Duplicate for smooth infinite loop
trackLeft.innerHTML = generateHTML(leftReviews) + generateHTML(leftReviews);
trackRight.innerHTML = generateHTML(rightReviews) + generateHTML(rightReviews);


function escapeHtml(str) {
    return String(str)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}
function escapeAttr(str) {
    return String(str).replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}
