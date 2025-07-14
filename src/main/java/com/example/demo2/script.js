// Smoothie class definition
class Smoothie {
    constructor(name, base, ingredients, sweetener) {
        this.name = name;
        this.base = base;
        this.ingredients = ingredients;
        this.sweetener = sweetener;
    }

    describe() {
        return `${this.name}, your smoothie with ${this.base}, ` +
            `${this.ingredients.join(", ")}, and ${this.sweetener} is ready!`;
    }
}

// Event listener for form
document.getElementById("smoothieForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("customerName").value;
    const base = document.getElementById("base").value;
    const sweetener = document.getElementById("sweetener").value;

    const ingredients = Array.from(document.querySelectorAll("input[type='checkbox']:checked"))
        .map((checkbox) => checkbox.value);

    if (ingredients.length > 3) {
        alert("Please choose up to 3 ingredients.");
        return;
    }

    const smoothie = new Smoothie(name, base, ingredients, sweetener);
    document.getElementById("output").innerHTML = `
    <h2>Here's your smoothie, ${name}!</h2>
    <p>${smoothie.describe()}</p>
    <img src="images/${ingredients[0]?.toLowerCase() || 'default'}.jpg" alt="Smoothie" width="200"/>
  `;
});
