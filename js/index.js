// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: "pepperoni", price: 1 },
  mushrooms: { name: "Mushrooms", price: 1 },
  greenPeppers: { name: "Green Peppers", price: 1 },
  whiteSauce: { name: "White sauce", price: 3 },
  glutenFreeCrust: { name: "Gluten-free crust", price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll(".pep").forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = "visible";
    } else {
      onePep.style.visibility = "hidden";
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach(oneShroom => {
    if (state.mushrooms) {
      oneShroom.style.visibility = "visible";
    } else {
      oneShroom.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach(onePepper => {
    if (state.greenPeppers) {
      onePepper.style.visibility = "visible";
    } else {
      onePepper.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauce = document.querySelector(".sauce");
  if (state.whiteSauce) {
    sauce.classList.add("sauce-white");
  } else {
    sauce.classList.remove("sauce-white");
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crust = document.querySelector(".crust");
  if (state.glutenFreeCrust) {
    crust.classList.add("crust-gluten-free");
  } else {
    crust.classList.remove("crust-gluten-free");
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  function addRemoveActive(button, state) {
    if (state) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  }

  document.querySelectorAll(".btn").forEach(button => {
    console.log(button, button.classList[1]);
    switch (button.classList[1]) {
      case "btn-pepperoni":
        addRemoveActive(button, state.pepperoni);
        break;
      case "btn-mushrooms":
        addRemoveActive(button, state.mushrooms);
        break;
      case "btn-green-peppers":
        addRemoveActive(button, state.greenPeppers);
        break;
      case "btn-sauce":
        addRemoveActive(button, state.whiteSauce);
        break;
      case "btn-crust":
        addRemoveActive(button, state.glutenFreeCrust);
        break;
    }
  });
}

function renderPrice() {
  const listOfPrices = document.querySelectorAll(".price li");
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let total = 10;
  if (state.pepperoni) {
    total += 1;
    listOfPrices[0].style.visibility = "visible";
  } else {
    listOfPrices[0].style.visibility = "hidden";
  }
  if (state.mushrooms) {
    total += 1;
    listOfPrices[1].style.visibility = "visible";
  } else {
    listOfPrices[1].style.visibility = "hidden";
  }
  if (state.greenPeppers) {
    total += 1;
    listOfPrices[2].style.visibility = "visible";
  } else {
    listOfPrices[2].style.visibility = "hidden";
  }
  if (state.whiteSauce) {
    total += 3;
    listOfPrices[3].style.visibility = "visible";
  } else {
    listOfPrices[3].style.visibility = "hidden";
  }
  if (state.glutenFreeCrust) {
    total += 5;
    listOfPrices[4].style.visibility = "visible";
  } else {
    listOfPrices[4].style.visibility = "hidden";
  }
  const price = document.querySelector(".price strong");
  price.innerText = `$${total}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector(".btn.btn-pepperoni").addEventListener("click", () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").addEventListener("click", () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector(".btn.btn-green-peppers")
  .addEventListener("click", () => {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").addEventListener("click", () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector(".btn.btn-crust").addEventListener("click", () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
