import { splitNumbers } from "../utils";

function printShiftAgesAverage(ages, helper) {
  const avg = ages.reduce((sum, age) => sum + Number(age), 0) / ages.length;
  if (isNaN(avg)) {
    helper.textContent = "Error: No se pudo calcular el promedio.";
    return null;
  }
  helper.textContent = "El promedio de edades es: " + avg.toFixed(2);
  helper.style.color = "#fff";
  return avg;
}

export default function exercise10() {
  const form = document.createElement("form");
  form.id = "exercise-10-form";

  form.innerHTML = `
    <div class="input-group" id="am-shift-group">
      <label for="am-shift">Ingresa las edades de 5 alumnos del turno matutino</label>
      <input type="text" id="am-shift" name="am-shift" placeholder="Sepáralas con coma y espacio (, )" required>
      <p id="am-shift-helper"></p>
    </div>
    <div class="input-group" id="ev-shift-group">
      <label for="ev-shift">Ingresa las edades de 6 alumnos del turno vespertino</label>
      <input type="text" id="ev-shift" name="ev-shift" placeholder="Sepáralas con coma y espacio (, )" required>
      <p id="ev-shift-helper"></p>
    </div>
    <div class="input-group" id="pm-shift-group">
      <label for="pm-shift">Ingresa las edades de 11 alumnos del turno nocturno</label>
      <input type="text" id="pm-shift" name="pm-shift" placeholder="Sepáralas con coma y espacio (, )" required>
      <p id="pm-shift-helper"></p>
    </div>
    <button type="submit" class="btn btn-primary">Evaluar números</button>
  `;

  const helpers = form.querySelectorAll("p");
  const inputs = form.querySelectorAll("input");
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      helpers.forEach((helper) => {
        helper.textContent = "";
      });
    });
  });

  // Inputs y mensajes de error para cada turno
  const amShiftInput = form.querySelector("#am-shift");
  const amShiftHelper = form.querySelector("#am-shift-helper");

  const evShiftInput = form.querySelector("#ev-shift");
  const evShiftHelper = form.querySelector("#ev-shift-helper");

  const pmShiftInput = form.querySelector("#pm-shift");
  const pmShiftHelper = form.querySelector("#pm-shift-helper");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Obtener las edades de cada turno y validar
    const amAges = splitNumbers(
      amShiftInput.value,
      5,
      amShiftHelper,
      "edades",
      false,
      false
    );

    const evAges = splitNumbers(
      evShiftInput.value,
      6,
      evShiftHelper,
      "edades",
      false,
      false
    );

    const pmAges = splitNumbers(
      pmShiftInput.value,
      11,
      pmShiftHelper,
      "edades",
      false,
      false
    );

    if (!amAges || !evAges || !pmAges) {
      return;
    }

    const averages = [
      {
        shift: "am",
        average: printShiftAgesAverage(amAges, amShiftHelper),
        helper: amShiftHelper
      },
      {
        shift: "ev",
        average: printShiftAgesAverage(evAges, evShiftHelper),
        helper: evShiftHelper
      },
      {
        shift: "pm",
        average: printShiftAgesAverage(pmAges, pmShiftHelper),
        helper: pmShiftHelper
      }
    ];

    const maxAverage = averages.sort((a, b) => {
      const avgA = a.average;
      const avgB = b.average;
      return avgB - avgA;
    })[0];

    maxAverage.helper.scrollIntoView({ behavior: "smooth", block: "center" });
    maxAverage.helper.style.color = "#fee85a";
    maxAverage.helper.textContent += `, es el turno con promedio más alto.`;
  });

  return form;
}
