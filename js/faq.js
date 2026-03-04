const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const trigger = item.querySelector(".faq-trigger");
    const content = item.querySelector(".faq-content");

    trigger.addEventListener("click", () => {
        const isOpen = item.classList.contains("active");

        faqItems.forEach(i => {
            i.classList.remove("active");
            i.querySelector(".faq-content").style.maxHeight = null;
        });

        if (!isOpen) {
            item.classList.add("active");
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});