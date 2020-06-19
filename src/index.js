/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const combinationSumRecursive = (candidatos, num) => {
  let arrayResultado = [];
  let arrayComprobacionEvitarRepetir = [];
  let arrayCombinacionesPosibles = [];
  let combinacionesBinario = "";
  candidatos.map((item) => {
    const cantCandidatoEnResulado = Math.floor(num / item);
    if (cantCandidatoEnResulado > 0) {
      for (let i = 0; i < cantCandidatoEnResulado; i++) {
        arrayCombinacionesPosibles.push(item);
        combinacionesBinario = combinacionesBinario.concat("1");
      }
    }
  });
  const combinacionesPosibleDecimal = parseInt(combinacionesBinario, 2);
  const largebin = combinacionesBinario.length;
  for (let x = 1; x <= combinacionesPosibleDecimal; x++) {
    let binarioARevisar = x.toString(2);
    if (binarioARevisar.length < largebin) {
      let largoString = largebin - binarioARevisar.length;
      while (largoString > 0) {
        binarioARevisar = "0" + binarioARevisar;
        largoString = largoString - 1;
      }
    }
    // console.log(binarioARevisar);
    const arraybin = binarioARevisar.split("");
    let arraytest = [];
    let stringtest = "";
    let itemsArrayBin = arraybin.length;
    // console.log(itemsArrayBin);
    for (let j = 0; j < itemsArrayBin; j++) {
      // console.log(arraybin[j]);
      if (arraybin[j] === "1") {
        arraytest.push(arrayCombinacionesPosibles[j]);
        stringtest = stringtest.concat(arrayCombinacionesPosibles[j]);
      }
    }
    const sumaArrayTest = arraytest.reduce((total, value) => total + value, 0);
    // console.log(arraytest);
    if (sumaArrayTest === num) {
      if (arrayComprobacionEvitarRepetir.includes(stringtest)) {
      } else {
        arrayResultado.push(arraytest);
        arrayComprobacionEvitarRepetir.push(stringtest);
      }
    }
  }
  return arrayResultado.reverse();
};

/**
 * Backtracking algorithm of finding all possible combination for specific sum.
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
  return combinationSumRecursive(candidates, target);
};

module.exports = combinationSum;

function factorial(n) {
  if (n <= 1) {
    console.log(1);
    return 1;
  }
  console.log(n * factorial(n - 1));
  //  return n * factorial(n - 1)
}

factorial(3);
