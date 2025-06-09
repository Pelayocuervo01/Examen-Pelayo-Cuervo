document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("content-container");

    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink")
        .then(respuesta => respuesta.json())
        .then(data => {
            const drinks = data.drinks;
            // Nombre del cocktail strDrink
            // Imagen strDrinkThumb
            drinks.forEach(drink => {
                const card = document.createElement("div");
                card.classList.add("card");

                const name = document.createElement("h4");
                name.textContent = drink.strDrink;

                const img = document.createElement("img");
                img.src = drink.strDrinkThumb;
                img.alt = drink.strDrink;
                img.style.width = "100%";

                const button = document.createElement("button");
                button.textContent = "Add to My Order";
                button.classList.add("save-btn");
                button.addEventListener("click", () => {
                    const savedDrinks = JSON.parse(localStorage.getItem("myOrder")) || [];

                    const alreadyExists = savedDrinks.some(saved => saved.idDrink === drink.idDrink);

                    if (!alreadyExists) {
                        savedDrinks.push(drink);
                        localStorage.setItem("myOrder", JSON.stringify(savedDrinks));
                        alert(`"${drink.strDrink}" guardado en My Order.`);
                    } else {
                        alert(`"${drink.strDrink}" ya está en My Order.`);
                    }
                });
                card.appendChild(img);
                card.appendChild(name);
                card.appendChild(button);
                container.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Error al obtener los cócteles", error);
            container.textContent = "No se pudieron obtener los cócteles.";
        });
        // Search function
        document.getElementById("search-input").addEventListener("input", function () {
        const query = this.value.toLowerCase();
        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {
            const title = card.querySelector("h4").textContent.toLowerCase();
            card.style.display = title.includes(query) ? "inline-block" : "none";
        });
    });
});
