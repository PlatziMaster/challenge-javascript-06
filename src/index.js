/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

let finalResult = [];
const combinationSumRecursive = (
  candidates,
  target,
  results = [],
) => {
  
  let s = results.reduce((a, b) => a + b, 0);
  
  if (s === target) {
    finalResult.push(Array.from(results))
  }
  if (s >= target) {
    return;
  }

  for (let i = 0; i < candidates.length; i++) {
    let num = candidates[i];
    let candidatesTests = candidates.slice(i);
    combinationSumRecursive(candidatesTests, target, results.concat([num]));
  }
  return finalResult;
};

/**
 * Backtracking algorithm of finding all possible combination for specific sum.
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
  finalResult = [];
  return combinationSumRecursive(candidates, target);
};

module.exports = combinationSum;
