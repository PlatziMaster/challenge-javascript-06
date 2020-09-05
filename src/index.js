/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const combinationSumRecursive = (candidates, remainingSum, finalCombinations = [], currentCombination = [], startFrom = 0) => {
  if (remainingSum === 0) {
    finalCombinations.push(currentCombination.slice());
  }

  if (remainingSum < 0) {
    return finalCombinations;
  }

  for (let i = startFrom; i < candidates.length; i++) {

    const current = candidates[i];
    currentCombination.push(current);
    combinationSumRecursive(candidates, remainingSum - current, finalCombinations, currentCombination, i);
    currentCombination.pop();
  }
  return finalCombinations
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

module.exports = combinationSum;