export default function render() {
  const div = document.createElement("div");
  div.innerHTML = `
        <p>En este ejercicio, vamos a practicar el uso de estructuras de control en JavaScript.</p>
        <p>Escribe un programa que imprima los números del 1 al 10. Si el número es par, imprime "Par", y si es impar, imprime "Impar".</p>
        <button id="test-on-click">Click</button>
    `;

  const button = div.querySelector("#test-on-click");
  button.addEventListener("click", () => {
    console.log("testing");
  });

  return div;
}
