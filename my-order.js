document.addEventListener("DOMContentLoaded", () =>  {
    const container = document.getElementById("order-container");
    const savedDrinks = JSON.parse(localStorage.getItem("myOrder")) || [];


    if (savedDrinks.length == 0 && savedMeals == 0) {
        container.textContent = "No hay productos guardados.";
        return;
    }
    
    savedDrinks.forEach(drink => {
        const card = document.createElement("div");
        card.classList.add("card");

        const name = document.createElement("h4");
        name.textContent = drink.strDrink;

        const img = document.createElement("img");
        img.src = drink.strDrinkThumb;
        img.alt = drink.strDrink;

        const button = document.createElement("button");
        button.textContent = "Remove from My Order";
        button.classList.add("remove-btn");
        button.addEventListener("click", () => {
        let savedDrinks = JSON.parse(localStorage.getItem("myOrder")) || [];

        savedDrinks = savedDrinks.filter(saved => saved.idDrink !== drink.idDrink);

        localStorage.setItem("myOrder", JSON.stringify(savedDrinks));

        alert(`"${drink.strDrink}" eliminado de My Order.`);


        button.parentElement.remove();
        });


        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(button)
        container.appendChild(card);
    })

})