function sum(a, b) {
  return a + b;
}

function divide(a, b) {
  if (b === 0) throw new Error('DIVIDE_BY_ZERO');
  return a / b;
}

module.exports = { sum, divide };
