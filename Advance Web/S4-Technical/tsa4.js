document.addEventListener("DOMContentLoaded", function () {
    let dishCards = document.querySelectorAll(".dishesCards");
    let modal = document.querySelector(".modalContainer");
    let mainMenuBtn = document.querySelector(".btn");
    let modalTitle = document.querySelector(".modalTitleSide");
    let modalImage = document.querySelector(".modalImage img");
    let modalDishName = document.querySelector(".modalDishName");
    let modalDesc = document.querySelector(".modalDesc");

    const dishes = {
        adobo: {
            title: "ADOBO",
            image: "modalAdobo.jpg",
            description: "&emsp;&emsp;A classic Filipino dish of marinated meat braised in vinegar, soy sauce, and spices. It is one of the most iconic dishes in Filipino cuisine and is loved for its rich, savory, and slightly tangy taste.<br><br>&emsp;&emsp;Perfectly paired with steamed rice, Adobo can be made with chicken, pork, or a combination of both, and is often enhanced with bay leaves, garlic, and black pepper."
        },
        sinigang: {
            title: "SINIGANG",
            image: "modalSinigang..jpg",
            description: "&emsp;&emsp;Sinigang is a popular Filipino soup known for its sour and savory flavors. It is traditionally made with tamarind, tomatoes, and various vegetables, combined with pork, shrimp, or fish.<br><br>&emsp;&emsp;Its comforting and tangy taste makes it a favorite, especially during rainy days. It is best enjoyed with a bowl of steaming rice."
        },
        sisig: {
            title: "SISIG",
            image: "modalSisig.jpg",
            description: "&emsp;&emsp;Sisig is a sizzling Filipino dish made from chopped pig’s face and liver, seasoned with calamansi, onions, and chili peppers. It is commonly served on a hot plate, often topped with a raw egg that cooks as it’s mixed in.<br><br>&emsp;&emsp;This dish is perfect as a main meal or as a popular 'pulutan' (beer snack) during gatherings and celebrations."
        },
        lumpia: {
            title: "LUMPIA",
            image: "modalLumpia.jpg",
            description: "&emsp;&emsp;Lumpia is a Filipino-style spring roll filled with a mixture of meat and vegetables, wrapped in a thin pastry and deep-fried to perfection. It is often served with a sweet and tangy dipping sauce.<br><br>&emsp;&emsp;A staple at Filipino parties and celebrations, Lumpia is a crunchy and delicious appetizer that pairs well with a variety of main dishes."
        }
    };

    function updateModal(dishKey) {
        let dish = dishes[dishKey];
        modalTitle.textContent = dish.title;
        modalImage.src = dish.image;
        modalDishName.textContent = dish.title;
        modalDesc.innerHTML = dish.description;
    }

    function showModal() {
        modal.classList.add("show");
        modal.style.visibility = "visible";
    }

    function hideModal() {
        modal.classList.remove("show");
        setTimeout(() => {
            modal.style.visibility = "hidden";
        }, 400);
    }

    dishCards.forEach(card => {
        card.addEventListener("click", function () {
            let dishKey = this.classList[1];
            updateModal(dishKey);
            showModal();
        });
    });

    mainMenuBtn.addEventListener("click", function () {
        hideModal();
    });

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            hideModal();
        }
    });
});
