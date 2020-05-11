/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const combinationSumRecursive = (candidates, target) => {
    let result = []

    const recursion = (sum, candidatesCombination) => {

      for( let candidate of candidates ) {
        
        let temp = sum + candidate;

        if(temp === target) {
          candidatesCombination.push(candidate);
          candidatesCombination.sort((a,b) => a - b);
          result.push(candidatesCombination);
          break;
        }
        
        if(temp > target) {
          break;
        }

        recursion(temp, candidatesCombination.concat(candidate))
      };
    }

    recursion(0, [])

    let uniqueResult = Array.from(new Set(result.map(JSON.stringify)), JSON.parse);

    return uniqueResult;
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