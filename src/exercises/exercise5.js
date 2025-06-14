const CARS_LIST = [
  { id: 1, model: "Fiesta", year: 2015, price: 15000 },
  { id: 2, model: "Escape", year: 2016, price: 12500 },
  { id: 3, model: "Focus", year: 2019, price: 20000 },
  { id: 4, model: "Focus", year: 2018, price: 18000 },
  { id: 5, model: "Fiesta", year: 2016, price: 16000 },
  { id: 6, model: "Fiesta", year: 2017, price: 17000 },
  { id: 7, model: "Escape", year: 2022, price: 25000 }
];

const format = new Intl.NumberFormat("es-SV", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2
});

export default function exercise5() {
  const form = document.createElement("form");
  form.id = "exercise-5-form";

  form.innerHTML = `
    <div class="input-group">
      <label for="car">Catálogo de carros Ford</label>
      <select id="car" name="car">
        <option value="">-- Selecciona un carro --</option>
        ${CARS_LIST.map(
          (car) =>
            `<option value="${car.id}">${car.model} ${
              car.year
            } - ${format.format(car.price)}</option>`
        ).join("")}
      </select>
    </div>
    <button type="submit">Calcular descuento</button>
    <p id="result"></p>
  `;

  const result = form.querySelector("#result");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const carSelection = form.querySelector("#car");

    if (!carSelection.value) {
      result.textContent = "Por favor, selecciona un carro.";
      return;
    }

    const selectedCar = CARS_LIST[carSelection.value - 1];
    let discount;
    switch (selectedCar.model) {
      case "Fiesta":
        discount = selectedCar.price * 0.05;
        break;
      case "Focus":
        discount = selectedCar.price * 0.1;
        break;
      case "Escape":
        discount = selectedCar.price * 0.2;
        break;
      default:
        result.textContent = "Carro no reconocido.";
    }

    result.textContent = `
    El descuento aplicable para el 
    ${selectedCar.model} ${selectedCar.year} 
    es de ${format.format(discount)}`;
  });

  return form;
}
