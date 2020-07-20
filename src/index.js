/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const combinationSumRecursive = (
  candidates, //1
  remainingSum, //0
  finalCombinations = [], //[]
  currentCombination = [], //[1,1,1,1]
  startFrom = 0 //0
) => {
  if (!remainingSum) {
    finalCombinations.push(currentCombination.slice());
    return [];
  }

  for (let i = startFrom; i < candidates.length; i++) {
    if (remainingSum < candidates[i]) {
      return [];
    }

    currentCombination.push(candidates[i]);
    combinationSumRecursive(
      candidates,
      remainingSum - candidates[i],
      finalCombinations,
      currentCombination,
      i
    );
    currentCombination.pop();
  }

  return finalCombinations;
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
