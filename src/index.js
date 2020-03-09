/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

  function combinationSumRecursive (
    candidates, //conjunto inicial de candidatos 
    remainingSum, //balance de la suma
    finalCombinations = [], 
    currentCombination = [], //es el arreglo donde vamos a guardar nuestros datos temporalmente "seguimiento"
    startFrom = 0, //comienza a explorar desde el primer candidato del array
  ) {
    //si el balance de la suma es negativo significa que el último candidato no debe ser aceptado y volvemos a las combinaciones
    if (remainingSum < 0) {
      return finalCombinations;
    }
    //si la suma coincide con nuestro número objetivo entra al arreglo final
    if (remainingSum ===0) {
      finalCombinations.push(currentCombination.slice());

      return finalCombinations;
    }
    //revisamos si hay más candidatos o el combo ha sido completado
    for (let index = startFrom; index < candidates.length; index += 1) { 
      const currentCandidate = candidates [index];
    //si hay más candidatos son enviados a nuestro arreglo de seguimiento
      currentCombination.push(currentCandidate);
      // exploramos las opciones del nuevo candidato...
      combinationSumRecursive(
        candidates, 
        remainingSum - currentCandidate,
        finalCombinations,
        currentCombination,
        index
      );
      //volver e intentar...
      currentCombination.pop();
    }
    //obtenemos todas nuestras combinaciones de suma
    return finalCombinations;
  }
  
  /**
   * Backtracking algorithm of finding all possible combination for specific sum.
   *
   * @param {number[]} candidates
   * @param {number} target
   * @return {number[][]}
   */
  const combinationSum = (candidates, target) => {
    return combinationSumRecursive(candidates, target);
  }

export default combinationSum;