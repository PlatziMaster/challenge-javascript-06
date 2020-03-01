/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const combinationSumRecursive = (candidates, target) => {
  if(!candidates.length || target<0) return[];

  console.log(`Candidates: ${candidates}; target: ${target}`)
  
  effectiveCandidates = candidates.filter((candidate) => candidate <= target)
  let result = effectiveCandidates.map((candidate) =>{
    let useCandidate = combinationSumRecursive(effectiveCandidates, target - candidate);
    let unuseCandidate= combinationSumRecursive(rmValueOfArray(effectiveCandidates, candidate), target);
    useCandidate = useCandidate.map((partialSolution) => partialSolution.unshift(candidate));
    return[...useCandidate,...unuseCandidate];
  });
  console.log(result);
  
  return result;
}


const rmValueOfArray = (arr, value) => {
  return arr.filter((elem)=> elem !== value);
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

console.log(combinationSum([1],1));



module.exports = combinationSum;