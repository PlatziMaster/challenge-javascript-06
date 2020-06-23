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
  target
) => {
  const finalResult = [];
  const recur = (remainingSum, index, currentCombination) => {
    if(remainingSum < 0){
      return;
    }
    if(remainingSum == 0){
      finalResult.push(currentCombination.slice());
    }
    for(let i = index; i < candidates.length; i++){
      currentCombination.push(candidates[i]);
      recur(remainingSum - candidates[i], i, currentCombination);
      currentCombination.pop();
    }
  };

  recur(target, 0 , []);
  return finalResult;

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