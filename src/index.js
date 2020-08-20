/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */
/** if you want to test the function combinationSumRecursive 
 * I suggest to copy code from line 10 to line 40 and able debugger in line 28
 */
const combinationSumRecursive = (
    candidates,
    remainingSum,
    finalCombinations =[],
    currentCombination =[],
    startFrom = 0,
    )=>{
        if (remainingSum ===0){ 
          finalCombinations.push(currentCombination.slice());
        }
        
        if(remainingSum < 0) {
          return finalCombinations;
        }
        
        for (let i= startFrom; i < candidates.length; i++){
          //debugger
          const current = candidates[i];
          currentCombination.push(current);
          
          //add the next position of the array candidates and try again until remainingSum < 0
          combinationSumRecursive(candidates, remainingSum - current, finalCombinations,currentCombination, i);

          //delete candidate
          currentCombination.pop();

          

        }
       return finalCombinations
    
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