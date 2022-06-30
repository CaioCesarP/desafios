// Função
const contarOcorrencias = (string) => {
  let element;
  let object = {};
  let emptyIndex = 0;
  let initialIndex = 0;
  let countTimesAppear = 0;
  for (let index = 0; index < string.length; index++) {
    element = string[index];
    if (element === " " || index === string.length - 1) {
      emptyIndex = index;
      let getWord = string.slice(initialIndex, emptyIndex + 1).trim();
      object[getWord] === undefined
        ? (object[getWord] = countTimesAppear + 1)
        : (object[getWord] += countTimesAppear + 1);
      initialIndex = emptyIndex;
    }
  }
  return object;
};

// Teste
const test =
  "asa casa casa bola asa bola bola asaa uhuhh yh yhyhyhy hu hu hu sa";

console.log(contarOcorrencias(test));
