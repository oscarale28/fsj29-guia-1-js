export default function exercise4() {
  const form = document.createElement("form");
  form.id = "exercise-4-form";

  form.innerHTML = `
    <div class="input-group">
      <label for="number1">Ingresa un número</label>
      <input type="number" id="number1" name="number1" required>
    </div>
    <div class="input-group">
      <label for="number2">Ingresa otro número</label>
      <input type="number" id="number2" name="number2" required>
    </div>  
    <button type="submit">Comparar números</button>
    <p id="result"></p>
  `;

  const inputs = form.querySelectorAll("input");
  const result = form.querySelector("#result");

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      result.innerHTML = "";
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const number1 = parseFloat(formData.get("number1"));
    const number2 = parseFloat(formData.get("number2"));

    if (number1 > number2) {
      result.innerHTML = `${number1} es mayor que ${number2}.`;
    } else if (number1 < number2) {
      result.innerHTML = `${number2} es mayor que ${number1}.`;
    } else {
      result.innerHTML = `Los números son iguales.`;
    }
  });

  return form;
}
