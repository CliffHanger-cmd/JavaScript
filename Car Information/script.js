const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2022,
  color: "Blue",
  mileage: 15000,
  fullInfo: function () {
    return `${this.year} ${this.make} ${this.model} (${this.color}) - ${this.mileage} miles`;
  },
};

// Log the entire object
console.log("Car object:", car);

// Access and log individual properties
console.log("Make:", car.make);
console.log("Model:", car.model);
console.log("Year:", car.year);
console.log("Full Info via method:", car.fullInfo());

// Display properties on the page via DOM manipulation
const infoDiv = document.getElementById("car-info");
const makeP = document.createElement("p");
makeP.textContent = `Make: ${car.make}`;
const modelP = document.createElement("p");
modelP.textContent = `Model: ${car.model}`;
const yearP = document.createElement("p");
yearP.textContent = `Year: ${car.year}`;
const colorP = document.createElement("p");
colorP.textContent = `Color: ${car.color}`;
const mileageP = document.createElement("p");
mileageP.textContent = `Mileage: ${car.mileage.toLocaleString()} miles`;
const fullInfoP = document.createElement("p");
fullInfoP.textContent = `Info: ${car.fullInfo()}`;

// Append to container
infoDiv.append(makeP,modelP,yearP,colorP,mileageP,fullInfoP);

// Optionally use document.write (not recommended after DOM load)
    // document.write(`<p>${car.fullInfo()}</p>`);