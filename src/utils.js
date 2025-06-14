/**
 * Funcion para dividir y validar una cadena de números ingresados por el usuario.
 * @param {*} inputValue La cadena de números ingresados por el usuario.
 * @param {*} targetQty Cantidad de números esperados.
 * @param {*} errorHelper Elemento donde se mostrará el mensaje de error.
 * @param {*} items Descripción de los números esperados (por ejemplo, "edades", "números").
 * @param {*} allowDecimals Indica si se permiten números decimales.
 * @param {*} allowNegatives Indica si se permiten números negativos.
 * @returns
 */
export function splitNumbers(
  inputValue,
  targetQty,
  errorHelper,
  items = "números",
  allowDecimals = true,
  allowNegatives = true
) {
  const numbers = inputValue.trim().split(", ");

  // Validar la cantidad de números ingresados
  if (numbers.length !== targetQty) {
    errorHelper.textContent = `Debes ingresar exactamente ${targetQty} ${items}.`;
    return false;
  }

  for (const number of numbers) {
    // Validar números decimales
    if (!allowDecimals && !Number.isInteger(Number(number))) {
      console.log("unallowed decimal", number);
      errorHelper.textContent = `<p>Error: "${number}" no es un número válido.</p>`;
      return false;
    }

    // Validar caracteres no numéricos y números negativos
    if (
      isNaN(number) ||
      number.trim() === "" ||
      (!allowNegatives && Number(number) <= 0)
    ) {
      errorHelper.textContent = `Error: "${number}" no es un número válido.`;
      return false;
    }
  }

  // Si es válido, limpiar el mensaje de error y devolver los números
  errorHelper.textContent = "";
  return numbers;
}
