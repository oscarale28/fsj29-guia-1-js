import "./style.css";
import javascriptLogo from "/javascript.svg";

document.querySelector("#app").innerHTML = `
  <header>
    <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    <div class="title">
      <h1>Guía Estructuras de Control JS</h1>
      <h3>Oscar Alejandro Orellana Morán - FSJ29</h3>
    </div>
  </header>

  <main>
    <ul id="exercise-list"></ul>
    <div id="exercise-sandbox">
      Selecciona un ejercicio del menú.
    </div>
  </main>
`;

const exerciseList = document.getElementById("exercise-list");
const sandbox = document.getElementById("exercise-sandbox");

// Importación de todos los ejercicios como módulos
const modules = import.meta.glob("./exercises/*.js");

// Armado de la lista de ejercicios
const exercises = Object.keys(modules).map((path, i) => {
  console.log(`Cargando módulo: ${path}`); // Verifica el nombre del módulo
  return {
    id: i + 1,
    title: `Estructuras de Control - Ejercicio ${i + 1}`,
    path: modules[path]
  };
});

exercises.forEach((exercise) => {
  // Creación de items de la lista de ejercicios
  const li = document.createElement("li");
  const button = document.createElement("button");
  button.textContent = `Ejercicio ${exercise.id}`;

  // Event listener para cargar cada ejercicio
  button.addEventListener("click", async () => {
    sandbox.innerHTML = "Cargando ejercicio...";
    try {
      // Carga del módulo
      const module = await exercise.path();
      generalRender(exercise.title, module.default ? module.default() : null);
    } catch (err) {
      console.error("Error al cargar el ejercicio:", err);
      sandbox.innerHTML = "Error al cargar el ejercicio.";
    }
  });
  li.appendChild(button);
  exerciseList.appendChild(li);
});

/**
 * Renderizador general para cada ejercicio
 * @param {*} exerciseTitle Título del ejercicio
 * @param {*} domElement Módulo del DOM creado para el ejercicio
 */
function generalRender(exerciseTitle, domElement) {
  // Limpiar primero el mensaje de carga
  sandbox.innerHTML = "";
  const title = document.createElement("h2");
  title.textContent = exerciseTitle;
  sandbox.appendChild(title);

  if (domElement) {
    sandbox.appendChild(domElement);
  } else {
    sandbox.innerHTML = "No se pudo cargar el ejercicio.";
  }
}
