function sum(numberOne, numberTwo) {
  const result = numberOne + numberTwo;
  return result;
}

const numberOne = Number(prompt('Digite um número: '));
const numberTwo = Number(prompt('Digite outro número: '));

alert(`Resultado da soma: ${sum(numberOne, numberTwo)}`);