document.addEventListener("DOMContentLoaded", () => {
    // He decidido usar una API de comidas para hacerlo de manera mas sencilla 
    // la api es TheMealDB — https://www.themealdb.com
    // Replicamos algo parecido a lo que hemos hecho con los cocteles 
    // y lo representamos en my order 
    // si lees esto no me ha dado tiempo a separar por categorias
    
    const container = document.getElementById("content-container");

    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    .then(respuesta => respuesta.json())
    .then(data => {
        const comidas = data.meals;

        comidas.forEach(comida => {
            const card = document.createElement("div");
            card.classList.add("card");

            const name = document.createElement("h4");
            name.textContent = comida.strMeal;
 
            const img = document.createElement("img");
            img.src = comida.strMealThumb;
            img.alt = comida.strMeal;
            img.style.width = "100%";

            card.appendChild(img);
            card.appendChild(name);
            container.appendChild(card);
        })
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

