/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

//Initializing variables
function combinationSumRecursive(
  candidates,
  remainingSum,
  finalCombinations = [],
  currentCombination = [],
  startFrom = 0,
)

//Recursive function
//Block of code
{
  if (remainingSum < 0) {
    return finalCombinations;
  }

  if (remainingSum === 0) {
    finalCombinations.push(currentCombination.slice());
    return finalCombinations;
  }

  //Cycle
  for (let candidateNumber = startFrom; candidateNumber < candidates.length; candidateNumber ++) {
    const currentCandidate = candidates[candidateNumber];
    currentCombination.push(currentCandidate);
    combinationSumRecursive(
      candidates,
      remainingSum - currentCandidate,
      finalCombinations,
      currentCombination,
      candidateNumber,
    );
    currentCombination.pop();
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