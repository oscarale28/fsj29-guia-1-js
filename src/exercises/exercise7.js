import { splitNumbers } from "../utils";

let negatives = [];
let positives = [];
let multipliesOfFifteen = [];
let evenNumbers = [];

function resetArrays() {
  negatives = [];
  positives = [];
  multipliesOfFifteen = [];
  evenNumbers = [];
}

export default function exercise7() {
  const form = document.createElement("form");
  form.id = "exercise-7-form";

  form.innerHTML = `
    <div class="input-group">
      <label for="numbers">Ingresa 10 números separados por coma y espacio (, )</label>
      <input type="text" id="numbers" name="numbers" placeholder="1, 0, -20..." required>
    </div>
    <button type="submit" class="btn btn-primary">Evaluar números</button>
    <div class="result" id="result"></div>
  `;

  const result = form.querySelector("#result");
  const inputs = form.querySelectorAll("input");
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      result.innerHTML = "";
      resetArrays();
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const numbersInput = form.querySelector("#numbers");

    const numbers = splitNumbers(numbersInput.value, 10, result);

    if (!numbers) return;

    for (const number of numbers) {
      if (number < 0) {
        negatives.push(number);
      }
      if (number > 0) {
        positives.push(number);
      }
      if (number % 15 === 0) {
        multipliesOfFifteen.push(number);
      }
      if (number % 2 === 0) {
        evenNumbers.push(number);
      }
    }
    result.innerHTML = `
      <p>Números negativos ingresados: 
        <strong>
        ${negatives.length}
        </strong>
      </p>
      <p>Números positivos ingresados: 
        <strong>
          ${positives.length}
        </strong>
      </p>
      <p>Múltiplos de 15 ingresados: 
        <strong>
          ${multipliesOfFifteen.length}
        </strong>
      </p>
      <p>
        El valor acumulado de los números pares ingresados es: 
        <strong>
          ${evenNumbers.reduce((acc, current) => acc + parseFloat(current), 0)}
        </strong>
      </p>
    `;
  });

  return form;
}
