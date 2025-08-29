function add(a, b) {
  const number1 = Number(a);
  const number2 = Number(b);
  if (isNaN(number1) || isNaN(number2)) return 'Error: Entrada no numérica';
  return number1 + number2;
}

function subtract(a, b) {
  const number1 = Number(a);
  const number2 = Number(b);
  if (isNaN(number1) || isNaN(number2)) return 'Error: Entrada no numérica';
  return number1 - number2;
}

function multiply(a, b) {
  const number1 = Number(a);
  const number2 = Number(b);
  if (isNaN(number1) || isNaN(number2)) return 'Error: Entrada no numérica';
  return number1 * number2;
}

function divide(a, b) {
  const number1 = Number(a);
  const number2 = Number(b);
  if (isNaN(number1) || isNaN(number2)) return 'Error: Entrada no numérica';
  if (number2 === 0) return 'Error: División por cero';
  return number1 / number2;
}

function ordenarNumeros(numbers, order = 'asc') {
  console.log('ordenarNumeros recibió:', numbers, order); // 👈 Log para depurar

  if (!Array.isArray(numbers) || numbers.length !== 4) {
    throw new Error('Debes enviar exactamente 4 números en un arreglo.');
  }

  const allNumbers = numbers.every(num => typeof num === 'number' && !isNaN(num)); // ✅ Mejora clave
  if (!allNumbers) {
    throw new Error('Todos los elementos deben ser números válidos.');
  }

  if (order !== 'asc' && order !== 'desc') {
    throw new Error('El parámetro "order" debe ser "asc" o "desc".');
  }

  return [...numbers].sort((a, b) => order === 'desc' ? b - a : a - b);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  ordenarNumeros
};