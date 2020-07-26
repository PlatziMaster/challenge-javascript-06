// /**
//  * @param {number[]} candidates - candidate numbers we're picking from.
//  * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
//  * @param {number[][]} finalCombinations - resulting list of combinations.
//  * @param {number[]} currentCombination - currently explored candidates.
//  * @param {number} startFrom - index of the candidate to start further exploration from.
//  * @return {number[][]}
//  */
  // /**
  //  * Backtracking algorithm of finding all possible combination for specific sum.
  //  *
  //  * @param {number[]} candidates
  //  * @param {number} target
  //  * @return {number[][]}
  //  */


  

function  combinationSumRecursive (
  candidates,
  remainingSum,
  finalCombinations = [],
  currentCombination = [],
  startFrom = 0 )  {
    //console.log(candidates, remainingSum)
  if(remainingSum < 0){
    return null
  }
  if(remainingSum === 0) {
    finalCombinations = finalCombinations.push([...currentCombination]);
    return finalCombinations;
  }

  for(let i = startFrom; i < candidates.length; i++) {
    if(remainingSum < candidates[i]) {
      return [];
    }
    currentCombination.push(candidates[i]);
    combinationSumRecursive(
      candidates,
      remainingSum - candidates[i],
      finalCombinations,
      currentCombination,
      i
    );
    currentCombination.pop();
  }
  console.log(finalCombinations)
  return finalCombinations;
}

// const candidates = [5, 8, 20, 30, 55, 100]
// const target = 100
// combinationSumRecursive(candidates, target)

const combinationSum = (candidates, target) => {
return combinationSumRecursive(candidates, target);
}

module.exports = combinationSum;