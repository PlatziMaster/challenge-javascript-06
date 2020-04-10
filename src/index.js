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
    finalCombinations.push(currentCombination.slice());
    currentCombination = [];
    return finalCombinations;
  }  
  else {
    if (remainingSum < 0)
      return [];
    else {
      for (let currentIndex = startFrom; currentIndex < candidates.length; currentIndex++) {
        const currentNumber = candidates[currentIndex];
          currentCombination.push(currentNumber);
        combinationSumRecursive(candidates, remainingSum - currentNumber, finalCombinations, currentCombination, currentIndex);
        currentCombination.pop();
      }
      return finalCombinations;
    }
  }  
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