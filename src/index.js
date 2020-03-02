/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const combinationSumRecursive = (candidates, target) => {
  if (candidates.length === 0) return [];

  if (candidates.length === 1) {
    if (target % candidates[0] === 0) {
      let multiplexCandidate = [];

      for (let i = 0; i < target/candidates[0]; i++) {
        multiplexCandidate.push(candidates[0]);
      }
      return [multiplexCandidate];
    } else {
      return [];
    }
  } else {
    let effectiveCandidates = candidates.filter((candidate) => target >= candidate);
    
    let useCandidate = combinationSumRecursive(effectiveCandidates, target - effectiveCandidates[0]);
    let unuseCandidate = combinationSumRecursive(effectiveCandidates.slice(1), target);
    let result = [
      ...useCandidate.map((partial) => [effectiveCandidates[0], ...partial]) ,
      ...unuseCandidate
    ];
    return result;
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