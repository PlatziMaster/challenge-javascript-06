/**
 * @param {number[]} candidates - candidate numbers we're picking from. w[]
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination. r
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates. s[elements]; y reduce() para valor
 * @param {number} startFrom - index of the candidate to start further exploration from. k
 * @return {number[][]}
 */

const combinationSumRecursive = (candidates, remainingSum, finalCombinations=[], currentCombination=[], startFrom = 0) => {

  if (remainingSum === 0) {
    finalCombinations.push(currentCombination)
    currentCombination = []
    return finalCombinations
  } else if (remainingSum < 0){
    return []
  }else {
    let i = startFrom
    while (i < candidates.length) {
      let number = candidates[i]
      combinationSumRecursive(candidates, remainingSum - number, finalCombinations, [...currentCombination, number], i)
      i++
    }
    return finalCombinations
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
    return combinationSumRecursive(candidates, target);
  }

module.exports = combinationSum;