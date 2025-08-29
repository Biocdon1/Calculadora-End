const { add, subtract, multiply, divide, ordenarNumeros } = require('../operaciones/operaciones');

function calcular(req, res) {
  const { operation, number1, number2 } = req.body;

  const operationsMap = {
    sumar: add,
    restar: subtract,
    multiplicar: multiply,
    dividir: divide
  };

  const selectedOperation = operationsMap[operation];

  if (!selectedOperation) {
    return res.status(400).json({ error: 'Operación no válida.' });
  }

  const result = selectedOperation(number1, number2);
  res.json({ resultado: result });
}

function ordenar(req, res) {
  const { numbers, order } = req.body;
  console.log('Petición recibida en /ordenar:', numbers, order);

  try {
    const sorted = ordenarNumeros(numbers, order);
    console.log('Resultado ordenado:', sorted);
    res.json({ ordenado: sorted });
  } catch (error) {
    console.error('Error en ordenar:', error.message);
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  calcular,
  ordenar
};