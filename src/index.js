/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const combinationSumRecursive = (
  candidates,
  remainingSum = 0,
  finalCombinations = [],
  currentCombination = [],
  startFrom = 0
) => {
  if (remainingSum === 0 && currentCombination.length) {
    finalCombinations.push([...currentCombination]);
    return finalCombinations;
  }

  if (remainingSum < 0) {
    return finalCombinations;
  }

  for (let i = startFrom; i < candidates.length; i++) {
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
