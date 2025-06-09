document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("content-container");

    fetch("https://www.thecocktaildb.com/api/json/v1/1/")
    .then(respuesta => respuesta.json())
    .then(data => {
        console.log(data)
    });
});