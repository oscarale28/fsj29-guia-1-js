export default function exercise8() {
  const form = document.createElement("form");
  form.id = "exercise-8-form";

  form.innerHTML = `
    <div class="input-group">
      <label for="number">Ingresa un número para generar su tabla de multiplicar</label>
      <input type="number" id="number" name="number" placeholder="" step="0" required>
    </div>
    <button type="submit" class="btn btn-primary">Generar tabla</button>
    <div class="result" id="result"></div>
  `;

  const result = form.querySelector("#result");
  const input = form.querySelector("#number");

  input.addEventListener("input", () => {
    result.innerHTML = "";
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const number = parseInt(input.value.trim());
    if (isNaN(number)) {
      result.innerHTML = `<p>Error: "${input.value}" no es un número válido.</p>`;
      return;
    }

    result.innerHTML = `
      <h3>Tabla de multiplicar del ${number}:</h3>
      <ul>
        ${Array.from(
          { length: 10 },
          (_, i) =>
            `<li>${number} x ${i + 1} = <strong>${
              number * (i + 1)
            }</strong></li>`
        ).join("")}
      </ul>
    `;
  });

  return form;
}
