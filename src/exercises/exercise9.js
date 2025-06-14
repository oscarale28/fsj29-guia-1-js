export default function exercise9() {
  const form = document.createElement("form");
  form.id = "exercise-9-form";

  form.innerHTML = `
    <div class="input-group">
      <label for="celsius">Ingresa una temperatura en grados Celsius (°C)</label>
      <input id="celsius" name="celsius" required>
    </div>
    <button type="submit" class="btn btn-primary">Contar</button>
    <p class="result" id="result"></p>
  `;

  const result = form.querySelector("#result");
  const input = form.querySelector("#celsius");

  input.addEventListener("input", () => {
    result.innerHTML = "";
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const celsius = input.value.trim();
    if (celsius === "") {
      result.textContent = `Error: El campo no puede estar vacío.`;
      return;
    }

    const fahrenheit = parseFloat(celsius) * 1.8 + 32;
    let temperatureStatus;
    if (fahrenheit >= 14 && fahrenheit < 32) {
      temperatureStatus = `Temperatura baja ❄️`;
    } else if (fahrenheit >= 32 && fahrenheit < 68) {
      temperatureStatus = `Temperatura adecuada 🌤️`;
    } else if (fahrenheit >= 68 && fahrenheit < 96) {
      temperatureStatus = `Temperatura alta 🔥`;
    } else {
      temperatureStatus = `Temperatura desconocida 🌡️`;
    }

    result.textContent = `
    La temperatura en grados Fahrenheit es: ${fahrenheit.toFixed(2)}°F. 
    ${temperatureStatus}.`;
  });

  return form;
}
