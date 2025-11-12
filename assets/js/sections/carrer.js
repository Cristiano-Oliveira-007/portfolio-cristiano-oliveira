document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".accordion-item");

    items.forEach(item => {
        const header = item.querySelector(".accordion-header");
        const content = item.querySelector(".accordion-content");
        const arrow = item.querySelector(".arrow");

        header.addEventListener("click", () => {
            const isOpen = item.classList.contains("active");

            if (isOpen) {
                item.classList.remove("active");
                content.style.maxHeight = null;
                arrow.textContent = "+";
            } else {
                item.classList.add("active");

                requestAnimationFrame(() => {
                    const fullHeight = content.scrollHeight + 40;
                    content.style.maxHeight = fullHeight + "px";
                });

                arrow.textContent = "–";
            }
        });

        content.addEventListener("transitionend", () => {
            if (!item.classList.contains("active")) {
                content.style.maxHeight = null;
            }
        });
    });
});
