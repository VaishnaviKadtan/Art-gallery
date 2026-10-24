
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener("click", (event) => {
        if (event.target.closest(".card-footer")) {
            const title = card.querySelector("h2, h3");

            if (title) {
                console.log("Selected card:", title.textContent);
            }
        }
    });
});
