/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const combinationSumRecursive = (candidates, target, startFrom = 0, remainingSum = target, currentCombination = [], finalCombinations = []) => { 
  
  // If the recursivity has to continue or not
  if(startFrom >= candidates.length){
    console.log(finalCombinations);
    return finalCombinations;
  }

  // Verificate if the selected number can plus for himself
  while(candidates[startFrom] <= remainingSum){
    currentCombination.push(candidates[startFrom]);
    remainingSum = remainingSum-candidates[startFrom];
    if(candidates.includes(remainingSum)){
      let currNum = candidates.filter(num => num === remainingSum);
      currentCombination.push(currNum[0]);
      remainingSum = remainingSum-currNum[0];
    }
  }
  
  // If the current combination it's correct
  if(remainingSum === 0){
    finalCombinations.push(currentCombination);
    currentCombination = [];
    remainingSum = target;
  }

  // Plus each number until get the result
  for(let i = 0; i < candidates.length; i++){
    if(candidates.includes(remainingSum)){
      
    }else if(candidates[i] <= remainingSum){
      currentCombination.push(candidates[i])
      remainingSum = remainingSum-candidates[i]
      if(remainingSum === 0){
        finalCombinations.push(currentCombination);
        currentCombination = [];
        remainingSum = target;
      }

    }else if(remainingSum != 0 ){
      currentCombination = [];
      remainingSum = target;
    }
  }

  candidates.shift()
  combinationSumRecursive(candidates,target,startFrom,remainingSum,currentCombination,finalCombinations)
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

  combinationSum([1], 4);
  combinationSum([2,3,6,7], 7);
  combinationSum([2,3,5], 8);
  combinationSum([2,5], 3);
  combinationSum([], 3);

module.exports = combinationSum;