const reviews = [
    {
        username: "Jacob D.",
        reviewHeading: "I'm recommending it to my friend group",
        reviewDescription: "We're all trading newbies and this is the first tool everyone understood.",
        date: "2025-02-14",
        location: "United States",
        avatar: "img/reviews/user-m1.jpg"
    },
    {
        username: "Oliver H.",
        reviewHeading: "Works on everything I trade",
        reviewDescription: "I use it on BTC, ETH, also NASDAQ sometimes. Same simple layout every time.",
        date: "2025-03-02",
        location: "United Kingdom",
        avatar: "img/reviews/user-m2.jpg"
    },
    {
        username: "Luca F.",
        reviewHeading: "It's like a checklist on the chart",
        reviewDescription: "Having 3 take profits is huge. I used to close too early or hold too long. Now I just follow the levels.",
        date: "2025-04-18",
        location: "Italy",
        avatar: "img/reviews/user-m3.jpg"
    },
    {
        username: "Markus B.",
        reviewHeading: "SimpleTrade made me profitable (finally)",
        reviewDescription: "Not like 1000% gains. Just consistent wins and smaller losses. That's the key.",
        date: "2025-05-07",
        location: "Germany",
        avatar: "img/reviews/user-m4.jpg"
    },
    {
        username: "Daniel R.",
        reviewHeading: "Took me out of 'random mode'",
        reviewDescription: "I used to hop from coin to coin entering nonsense. Now I wait for clean setups.",
        date: "2025-06-22",
        location: "Canada",
        avatar: "img/reviews/user-m5.jpg"
    },
    {
        username: "Hugo M.",
        reviewHeading: "Helps with patience",
        reviewDescription: "No signal? I don't trade. That alone improved my results.",
        date: "2025-07-05",
        location: "Spain",
        avatar: "img/reviews/user-m6.jpg"
    },
    {
        username: "Victor L.",
        reviewHeading: "I'm not even good at trading lol",
        reviewDescription: "But with SimpleTrade I can still make solid trades because it's so clear.",
        date: "2025-07-29",
        location: "France",
        avatar: "img/reviews/user-m7.jpg"
    },
    {
        username: "Ethan K.",
        reviewHeading: "I literally follow the script",
        reviewDescription: "It's like: do this, then this, then this. That's exactly what I needed.",
        date: "2025-08-11",
        location: "Australia",
        avatar: "img/reviews/user-m8.jpg"
    },
    {
        username: "Andre V.",
        reviewHeading: "Can't believe I waited",
        reviewDescription: "I watched it for weeks before buying. Wish I got it earlier honestly.",
        date: "2025-08-25",
        location: "Brazil",
        avatar: "img/reviews/user-m9.jpg"
    },
    {
        username: "Johan S.",
        reviewHeading: "I'm not a chart guy… still works",
        reviewDescription: "I don't like technical analysis. SimpleTrade is basically plug and play.",
        date: "2025-09-11",
        location: "Netherlands",
        avatar: "img/reviews/user-m10.jpg"
    },
    {
        username: "Diego L.",
        reviewHeading: "I hit targets way more now",
        reviewDescription: "I used to exit early and watch it go to my target without me lol. Now I literally just follow the levels and it's working.",
        date: "2025-09-02",
        location: "Uruguay",
        avatar: "img/reviews/user-m11.jpg"
    },
    {
        username: "Patrick O.",
        reviewHeading: "Feels like having a plan every time",
        reviewDescription: "Before SimpleTrade I would open TradingView and just stare at the chart like ok… now what. With this, I get a clear Long/Short signal and the whole trade is basically mapped out.",
        date: "2025-10-03",
        location: "Ireland",
        avatar: "img/reviews/user-m12.jpg"
    },
    {
        username: "Kevin S.",
        reviewHeading: "Actually profitable with a simple process",
        reviewDescription: "I'm not some pro trader. But using SimpleTrade I'm finally seeing real profits because it's so easy to use.",
        date: "2025-10-14",
        location: "Canada",
        avatar: "img/reviews/user-m13.jpg"
    },
    {
        username: "Niklas W.",
        reviewHeading: "I don't overcomplicate charts anymore",
        reviewDescription: "I used to add indicators until my chart looked like a science project. SimpleTrade is the opposite. Clean, simple, and the signals are readable instantly. I like that it tells me what to do without making me learn 50 different things first.",
        date: "2025-10-21",
        location: "Sweden",
        avatar: "img/reviews/user-m14.jpg"
    },
    {
        username: "Tomas R.",
        reviewHeading: "Targets make taking profit easier",
        reviewDescription: "I always struggled with exits. Like I'd be up and then I'd hold too long and it would reverse. Now I just take TP1/TP2/TP3 like a normal person. Even if I don't hit all 3, I'm locking in profit way more consistently.",
        date: "2025-11-08",
        location: "Argentina",
        avatar: "img/reviews/user-m15.jpg"
    },
    {
        username: "Tom H.",
        reviewHeading: "Doubled my \"good trades\"",
        reviewDescription: "Not saying I doubled my account lol. But I doubled the amount of trades that feel clean and planned. And yeah my results improved a lot.",
        date: "2025-11-17",
        location: "United Kingdom",
        avatar: "img/reviews/user-m16.jpg"
    },
    {
        username: "Kenji T.",
        reviewHeading: "The alerts actually changed my routine",
        reviewDescription: "I don't sit on charts all day anymore. I set alerts and go do other things. When it pings, I check it, and everything is already on the chart. Entry, stop, targets. It's honestly the easiest workflow I've had.",
        date: "2025-11-29",
        location: "Japan",
        avatar: "img/reviews/user-m17.jpg"
    },
    {
        username: "Miguel A.",
        reviewHeading: "Great for people who hate technical analysis",
        reviewDescription: "I'm not into learning every pattern and indicator. I just want something that makes trading straightforward. This does it. It's like… here's the direction, here's where you're wrong (stop), here's where to take profit. Done.",
        date: "2025-12-12",
        location: "Mexico",
        avatar: "img/reviews/user-m18.jpg"
    },
    {
        username: "David P.",
        reviewHeading: "Less guessing, more executing",
        reviewDescription: "The main value is it removes the 'maybe' feeling. Before I'd enter a trade and instantly doubt it. Now the signal is clear and the levels are clear, so I'm spending more time executing and less time arguing with myself.",
        date: "2025-12-27",
        location: "United States",
        avatar: "img/reviews/user-m19.jpg"
    },
    {
        username: "Mateusz K.",
        reviewHeading: "Made me more consistent than anything else",
        reviewDescription: "I've tried different indicators, courses, strategies… the thing that helped most was having a repeatable process. SimpleTrade basically forces a process: wait for signal, use the stop, take profits at the levels. That consistency is everything.",
        date: "2026-01-09",
        location: "Poland",
        avatar: "img/reviews/user-m20.jpg"
    },
    {
        username: "Adrian C.",
        reviewHeading: "Clean and practical",
        reviewDescription: "A lot of tools try to do too much and end up confusing. SimpleTrade is clean and practical. Even on mobile it's readable. It doesn't feel like an 'expert only' indicator. It feels like it was made for real people.",
        date: "2026-01-28",
        location: "Romania",
        avatar: "img/reviews/user-m21.jpg"
    },
    {
        username: "Lukas P.",
        reviewHeading: "The easiest money I've made trading",
        reviewDescription: "Not 'easy' like guaranteed, but easy like… I'm not confused anymore. When it prints a signal I take it, set the stop, and let it play. Been getting solid gains.",
        date: "2026-02-11",
        location: "Austria",
        avatar: "img/reviews/user-m22.jpg"
    },
    {
        username: "Carlos D.",
        reviewHeading: "Helped me stop \"chasing\" moves",
        reviewDescription: "I used to chase pumps and then get wrecked. Now if there's no signal, I don't trade. That alone saved me so many stupid losses.",
        date: "2026-02-05",
        location: "Chile",
        avatar: "img/reviews/user-m23.jpg"
    },
    {
        username: "Liam F.",
        reviewHeading: "The stop loss level is underrated",
        reviewDescription: "Everyone talks entries, but for me the stop loss level is the best part. It stops you from letting a bad trade turn into a disaster.",
        date: "2026-02-16",
        location: "New Zealand",
        avatar: "img/reviews/user-m24.jpg"
    },
    {
        username: "Rasmus N.",
        reviewHeading: "SimpleTrade made TradingView feel less intimidating",
        reviewDescription: "TradingView has so many buttons and indicators, it's overwhelming. With SimpleTrade I basically open the chart and it's already telling me the important info. It made me actually enjoy using TradingView.",
        date: "2026-02-22",
        location: "Denmark",
        avatar: "img/reviews/user-m25.jpg"
    },
    {
        username: "Victor S.",
        reviewHeading: "I recommend it if you want SIMPLE trading",
        reviewDescription: "If you're tired of complicated stuff, SimpleTrade is refreshing. It's like it turns trading into steps. Signal shows up, follow the plan. I feel way more in control with it.",
        date: "2026-02-27",
        location: "Portugal",
        avatar: "img/reviews/user-m26.jpg"
    },
    {
        username: "Andrei M.",
        reviewHeading: "The learning curve is almost zero",
        reviewDescription: "I set it up and within the same day I was using it. No giant manual. No 'watch 12 videos first'. If you want something that you can understand fast, this is it.",
        date: "2026-03-01",
        location: "Romania",
        avatar: "img/reviews/user-m27.jpg"
    },
    {
        username: "Julian T.",
        reviewHeading: "Small wins add up fast",
        reviewDescription: "This tool made me focus on hitting the targets instead of dreaming of moon shots. Those TP1/TP2 hits stack up. My PnL looks way steadier now.",
        date: "2026-03-03",
        location: "Germany",
        avatar: "img/reviews/user-m28.jpg"
    },
    {
        username: "Matteo G.",
        reviewHeading: "Had a little \"oh wow\" moment",
        reviewDescription: "I just realized something mid-week… one single good trade basically covers the subscription and there's still profit left for me. Kinda made the whole thing feel like a no-brainer.",
        date: "2026-03-04",
        location: "Italy",
        avatar: "img/reviews/user-m29.jpg"
    },
    {
        username: "Marcus J.",
        reviewHeading: "Best week I've had in months",
        reviewDescription: "Had my cleanest week in forever. I didn't take many trades, but the ones I took were simple and hit targets. Felt almost too easy.",
        date: "2026-03-05",
        location: "United States",
        avatar: "img/reviews/user-m30.jpg"
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
