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
  remainingSum = 0,
  finalCombinations = [],
  currentCombination = [],
  startFrom = 0
) => {
  // Base
  if (remainingSum === 0) {
    finalCombinations.push([...currentCombination])
    return
  }
  // Termination
  if (remainingSum < 0) {
    return
  }
  // Recursion
  candidates.slice(startFrom).forEach((candidate, idx) => {
    combinationSumRecursive(
      candidates,
      remainingSum - candidate,
      finalCombinations,
      [...currentCombination, candidate],
      idx + startFrom
    )
  })

  return finalCombinations.map(combination => {
    return combination.sort((a, b) => a - b)
  })
}

/**
 * Backtracking algorithm of finding all possible combination for specific sum.
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
  const uniqueCandidates = candidates.reduce((uniques, act) => {
    return uniques.includes(act) ? uniques : [...uniques, act]
  }, [])

  return combinationSumRecursive(uniqueCandidates, target);
}

module.exports = combinationSum;