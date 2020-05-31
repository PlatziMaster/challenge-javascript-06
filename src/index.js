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
  target,
  finalResult = [],
  currentCombination = [],
  startFrom = 0
) => {
  let sum = currentCombination.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  if (sum === target) finalResult.push(Array.from(currentCombination));
  if (sum > target) return;

  for (let i = startFrom; i < candidates.length; i++) {
    combinationSumRecursive(
      candidates.slice(i),
      target,
      finalResult,
      currentCombination.concat(candidates[i])
    );
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
  return combinationSumRecursive(candidates, target);
};

//console.log(combinationSum([2, 3, 6, 7], 7));

module.exports = combinationSum;
