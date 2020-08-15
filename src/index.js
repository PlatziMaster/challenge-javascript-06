/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
  let finalCombinations = []
  const combinationSumRecursive = (remainingSum, startFrom, currentCombination) =>{
    if(remainingSum < 0) {
      return
    }
    if (remainingSum === 0) {
      finalCombinations.push([...currentCombination])
    }
    for (let i = startFrom; i < candidates.length; i++) {
      currentCombination.push(candidates[i])
      combinationSumRecursive(remainingSum - candidates[i], i, currentCombination)
      currentCombination.pop()
    }
  }
  combinationSumRecursive(target, 0, [])
  return finalCombinations
}

  /**
   * Backtracking algorithm of finding all possible combination for specific sum.
   *
   * @param {number[]} candidates
   * @param {number} target
   * @return {number[][]}
   */

module.exports = combinationSum;