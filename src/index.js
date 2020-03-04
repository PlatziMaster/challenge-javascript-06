/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const combinationSumRecursive = (candidates, remainingSum, finalCombinations, currentCombination, startFrom) => {

  if (remainingSum === 0) {
    finalCombinations.push([...currentCombination]);
  } else if (remainingSum > 0) {
    candidates.slice(startFrom).forEach((candidate, index) => {
      currentCombination.push(candidate);
      combinationSumRecursive(candidates, remainingSum - candidate, finalCombinations, currentCombination, startFrom + index);
      currentCombination.pop();
    });
  }

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
  return combinationSumRecursive(candidates, target, [], [], 0);
}

module.exports = combinationSum;