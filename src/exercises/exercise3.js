const CATEGORIES = [
  { value: 0.15, label: "Categoría A" },
  { value: 0.3, label: "Categoría B" },
  { value: 0.1, label: "Categoría C" },
  { value: 0.2, label: "Categoría D" }
];

export default function exercise3() {
  const form = document.createElement("form");
  form.id = "exercise-3-form";

  form.innerHTML = `
    <div class="input-group">
      <label for="name">Nombre</label>
      <input type="text" id="name" name="name" placeholder="Ingrese su nombre" required>
    </div>
    <div class="input-group">
      <label for="salary">Salario</label>
      <input type="number" id="salary" name="salary" placeholder="Ingrese su salario ($)" min=0 step="0.01" required>
    </div>  
    <div class="categories-container">
      <p>Seleccione una categoría de aumento</p>
      <div class="categories">
        ${CATEGORIES.map(
          (cat) => `
          <label>
            <input type="radio" name="category" value="${cat.value}" required>
            ${cat.label}
          </label>
        `
        ).join("")}
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Calcular aumento</button>
    <div class="result" id="result"></div>
  `;

  const result = form.querySelector("#result");
  const inputs = form.querySelectorAll("input");
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      result.innerHTML = ""; // Clear previous results
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const name = formData.get("name").trim();
    const salary = parseFloat(formData.get("salary"));
    const selectedCategory = parseFloat(formData.get("category"));

    const increase = salary * selectedCategory;
    const newSalary = salary + increase;

    result.innerHTML = `
      <p>Hola ${name}, tu aumento es de $${increase.toFixed(2)}.</p>
      <p>Tu nuevo salario es de $${newSalary.toFixed(2)}.</p>
    `;
  });

  return form;
}
