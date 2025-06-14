const DESTINATIONS_LIST = [
  { id: 1, place: "La Costa del Sol", price: 45 },
  { id: 2, place: "Panchimalco", price: 15 },
  { id: 3, place: "Puerto El Triunfo", price: 60 }
];

const format = new Intl.NumberFormat("es-SV", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2
});

export default function exercise6() {
  const form = document.createElement("form");
  form.id = "exercise-6-form";

  form.innerHTML = `
    <h3>¡Realiza turismo en El Salvador!</h3>
    <div class="input-group">
      <label for="destination">Escoge tu destino (precio por persona)</label>
      <select id="destination" name="destination">
        <option value="">-- Seleccionar --</option>
        ${DESTINATIONS_LIST.map(
          (destination) =>
            `<option value="${destination.id}">
              ${destination.place} - ${format.format(destination.price)}
            </option>`
        ).join("")}
      </select>
    </div>
    <button type="submit">Calcular descuento</button>
    <p id="result"></p>
  `;

  const result = form.querySelector("#result");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const destinationSelection = form.querySelector("#destination");

    if (!destinationSelection.value) {
      result.textContent = "Por favor, selecciona un destino.";
      return;
    }

    const selectedDestination =
      DESTINATIONS_LIST[destinationSelection.value - 1];
    let discount;
    switch (selectedDestination.place) {
      case "La Costa del Sol":
        discount = selectedDestination.price * 0.05;
        break;
      case "Panchimalco":
        discount = selectedDestination.price * 0.1;
        break;
      case "Puerto El Triunfo":
        discount = selectedDestination.price * 0.15;
        break;
      default:
        result.textContent = "Carro no reconocido.";
    }

    result.textContent = `
    El descuento aplicable para el viaje a
    ${selectedDestination.place}
    es de ${format.format(discount)}`;
  });

  return form;
}
