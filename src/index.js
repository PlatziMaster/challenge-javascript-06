/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const combinationSumRecursive = (candidates, target, finalResult, sumCombination = []) =>{
  let suma = sumCombination.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  if(suma > target)
    return;
  if (suma === target)
    finalResult.push(sumCombination.slice())
  
  for (let i = 0; i < candidates.length; i++) {
    combinationSumRecursive(candidates.slice(i), target, finalResult, sumCombination.concat(candidates[i]));
    
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
    return combinationSumRecursive(candidates, target, finalResult = []);
}

module.exports = combinationSum;