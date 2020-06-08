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
  remainingSum,
  finalCombinations = [],
  currentCombination = [],
  startFrom = 0
) => {
  if (remainingSum == 0) {
    finalCombinations.push([...currentCombination]);

    return [];
  }

  for (startFrom; startFrom < candidates.length; startFrom++) {
    if (remainingSum < candidates[startFrom]) return [];
    currentCombination.push(candidates[startFrom]);
    combinationSumRecursive(
      candidates,
      remainingSum - candidates[startFrom],
      finalCombinations,
      currentCombination,
      startFrom
    );
    currentCombination.pop();
  }
  return finalCombinations;
};

/**
 * Backtracking algorithm for finding all possible combinations for a specific target.
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
  return combinationSumRecursive(candidates, target);
};

module.exports = combinationSum;
