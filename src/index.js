/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

comp = new Array();

const comparation = (newEle) => {
  let flag = false;
  if (comp.length > 0) {
    comp.forEach((element) => {
      if (element.join() === newEle.join()) {
        flag = true;
        return;
      }
    });
  }
  return flag;
};

const combinationSumRecursive = (
  candidates,
  target,
  suma = 0,
  sumaConv = []
) => {
  if (suma == target) {
    let copia = sumaConv.slice();
    copia.sort((a, b) => a - b);
    if (!comparation(copia)) {
      comp.push(copia);
    }
  }

  for (let i = 0; i < candidates.length; i++) {
    suma = suma + candidates[i];
    if (suma <= target) {
      sumaConv.push(candidates[i]);
      combinationSumRecursive(candidates, target, suma, sumaConv);
      sumaConv.pop();
    }
    suma = suma - candidates[i];
  }
};

/**
 * Backtracking algorithm of finding all possible combination for specific sum.
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
  comp = [];
  combinationSumRecursive(candidates, target);
  return comp;
};

module.exports = combinationSum;
