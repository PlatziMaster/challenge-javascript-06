/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const combinationSumRecursive = (candidates, target) => {
    var finalCombinations = [];
    var currentCombination = [];
    var remainingSum = target;
    for (let index = 0; index < candidates.length; index++) {
      if(target % candidates[index] === 0) {
        currentCombination = [];
        remainingSum = target;
        for (let i = 0; i < (target / candidates[index]); i++) {
          currentCombination.push(candidates[index]);
          if(remainingSum - candidates[index] === 0) break;
        }
        finalCombinations.push(currentCombination);
        currentCombination = [];
        if(remainingSum - candidates[index] === 0) {
          remainingSum = target;
          continue;
        }
      }
      remainingSum -= candidates[index];
      currentCombination.push(candidates[index]);
      if(remainingSum - candidates[index] >= 0) {
        remainingSum -= candidates[index];
        currentCombination.push(candidates[index]);
      } else {
        if(remainingSum === 0) {
          finalCombinations.push(currentCombination);
        }
        currentCombination = [];
        remainingSum = target;
        continue;
      }
    }
    currentCombination = [];
    remainingSum = target;
    for (let index = 0; index < candidates.length; index++) {
      remainingSum -= candidates[index];
      currentCombination.push(candidates[index]);
      for (let i = index + 1; i < candidates.length; i++) {
        if(remainingSum - candidates[i] >= 0) {
          remainingSum -= candidates[i];
          currentCombination.push(candidates[i]);
          if(remainingSum - candidates[i] >= 0){ 
            i--;
            continue;
          };
          if(remainingSum === 0) {
            finalCombinations.push(currentCombination);
            currentCombination = [];
            remainingSum = target;
            continue;
          }
        }
      }
      currentCombination = [];
      remainingSum = target;
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
    return combinationSumRecursive(candidates, target);
}

module.exports = combinationSum;