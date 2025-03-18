document.addEventListener("DOMContentLoaded", function () {
    const dishesContainer = document.querySelector(".dishes");
    const menuButton = document.querySelector("#menuButton button");
    const dishes = document.querySelectorAll(".dishBox");
    const originalDishesHTML = dishesContainer.innerHTML;

    dishes.forEach(dish => {
        dish.addEventListener("click", function () {
            const dishName = this.querySelector("h2").textContent;
            const dishDescription = this.querySelector(".dishDescription").textContent;
            const dishImageSrc = this.querySelector("img").src;

            showDishDetails(dishName, dishDescription, dishImageSrc);
        });
    });

    function showDishDetails(name, description, imageSrc) {
        dishesContainer.innerHTML = `
            <div id="dishDetails">
                <button id="closeDetails">&times;</button>
                <h2>${name}</h2>
                <img src="${imageSrc}" alt="${name}">
                <p>${description}</p>
            </div>
        `;

        document.getElementById("closeDetails").addEventListener("click", restoreDishes);
    }

    function restoreDishes() {
        dishesContainer.innerHTML = originalDishesHTML;

        document.querySelectorAll(".dishBox").forEach(dish => {
            dish.addEventListener("click", function () {
                const dishName = this.querySelector("h2").textContent;
                const dishDescription = this.querySelector(".dishDescription").textContent;
                const dishImageSrc = this.querySelector("img").src;

                showDishDetails(dishName, dishDescription, dishImageSrc);
            });
        });
    }
    menuButton.addEventListener("click", restoreDishes);
});
