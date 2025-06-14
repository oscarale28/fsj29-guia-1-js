export default function exercise2() {
  const form = document.createElement("form");
  form.id = "exercise-2-form";

  form.innerHTML = `
    <div class="input-group">
        <label for="name">Nombre</label>
        <input type="text" id="name" name="name" placeholder="Nombre del estudiante" required>
      </div>
     <div class="input-group">
      <label for="carnet">Carnet</label>
      <input type="text" id="carnet" name="carnet" placeholder="Carnet del estudiante" required>
    </div>
    <hr/>
    <div class="input-group">
      <label for="test">Examen (20%)</label>
      <input type="number" id="test" name="test" placeholder="Nota de examen" min="0" max="10" step="0.01" required>
    </div>
    <div class="input-group">
      <label for="homeworks">Tareas (40%)</label>
      <input type="number" id="homeworks" name="homeworks" placeholder="Nota promedio de tareas" min="0" max="10" step="0.01" required>
    </div>
    <div class="input-group">
      <label for="attendance">Asistencia (10%)</label>
      <input type="number" id="attendance" name="attendance" placeholder="Nota de asistencia" min="0" max="10" step="0.01" required>
    </div>
    <div class="input-group">
      <label for="research">Investigación (30%)</label>
      <input type="number" id="research" name="research" placeholder="Nota de investigación" min="0" max="10" step="0.01" required>
    </div>
    <button type="submit">Calcular nota final</button>
    <div id="results"></div>
  `;

  const inputs = form.querySelectorAll("input");
  const results = form.querySelector("#results");
  results.style.textAlign = "left";

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      results.innerHTML = ""; // Clear results when inputs change
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const name = formData.get("name");
    const carnet = formData.get("carnet");

    const test = parseFloat(formData.get("test"));
    const homeworks = parseFloat(formData.get("homeworks"));
    const attendance = parseFloat(formData.get("attendance"));
    const research = parseFloat(formData.get("research"));

    const finalGrade =
      test * 0.2 + homeworks * 0.4 + attendance * 0.1 + research * 0.3;

    results.innerHTML = `
      <h4>Estudiante: ${name} (carnet ${carnet})</h4>
      <p>Nota final: ${finalGrade.toFixed(2)}</p>
    `;
  });

  return form;
}
