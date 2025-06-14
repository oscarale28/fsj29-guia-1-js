export default function render() {
  const form = document.createElement("form");
  form.id = "exercise-1-form";
  form.innerHTML = `
      <div class="input-group">
        <label for="name">Ingresa tu edad</label>
        <input type="number" id="name" name="name" placeholder="Edad" required>
      </div>
      <button type="submit">Evaluar</button>
      <p id="result-text"></p>
    `;

  const ageInput = form.querySelector("#name");
  console.log(ageInput);
  const resultText = form.querySelector("#result-text");
  ageInput.addEventListener("input", () => {
    resultText.textContent = "";
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const age = parseInt(form.elements.name.value, 10);
    if (isNaN(age) || age < 0) {
      alert("Por favor, ingresa una edad válida.");
      return;
    }

    const result = age < 18 ? "Eres menor de edad." : "Eres mayor de edad.";
    resultText.textContent = result;
  });

  return form;
}
