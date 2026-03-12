const footerHTML = `
<section class="footer">
  <div class="footer-content">
    <a href="/index.html" style="display:flex;">
        <img src="svg/logo.svg">
    </a>
    <div class="footer-links">
      <div class="footer-links-column">
        <a class="footer-link" href="#pricing">Pricing</a>
        <a class="footer-link" href="#contact">Contact</a>
        <a class="footer-link" href="#testimonials">Testimonials</a>
        <a class="footer-link" href="#faq">FAQ</a>
      </div>
      <div class="footer-links-column">
        <a class="footer-link" href="privacy.html">Privacy Policy</a>
        <a class="footer-link" href="terms.html">Terms of Service</a>
        <a class="footer-link" href="">Refunds</a>
        <a class="footer-link" href="#checkout">Get SimpleTrade</a>
      </div>
    </div>
  </div>
</section>
    <section class="disclaimer">
        <p class="disclaimer-text">Trading & investing are risky and many will lose money in connection with trading and
            investing activities. All
            content on this site is not intended to, and should not be, construed as financial advice. Decisions to buy,
            sell, hold or trade in securities, commodities and other investments involve risk and are best made based on
            the
            advice of qualified financial professionals. Past performance does not guarantee future results.

            Hypothetical or Simulated performance results have certain limitations. Unlike an actual performance record,
            simulated results do not represent actual trading.</p>
    </section>`;

document.body.insertAdjacentHTML('beforeend', footerHTML);