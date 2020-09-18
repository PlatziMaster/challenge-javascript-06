/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const reducer = (accumulator, currentValue) => accumulator + currentValue;

/**
 * Backtracking algorithm of finding all possible combination for specific sum.
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */


const combinationSum = (candidates, target) => {
  let totalArrys = []
  let arrayPerNumber= []
  
  for (const candidate of candidates) {
    arrayPerNumber = []
    if (candidate > target) {
      continue
    } else if (candidate === target) {
      arrayPerNumber.push(candidate)
      totalArrys.push(arrayPerNumber)
      continue
    } else {
      for (let index = 0; index < candidates.length; index++) {
        arrayPerNumber = []
        arrayPerNumber.push(candidate)
        if ((arrayPerNumber.reduce(reducer) + candidates[index]) <= target) {
          
          do {
            arrayPerNumber.push(candidates[index])
          } while (arrayPerNumber.reduce(reducer) < target)

          if(arrayPerNumber.reduce(reducer) === target) {
            arrayPerNumber = arrayPerNumber.sort((a, b) => a - b)
            let compare = JSON.stringify(arrayPerNumber)
            
            let exist = totalArrys.find( item => JSON.stringify(item) === compare)
            
            if (!exist) totalArrys.push(arrayPerNumber)
          } 
        }
      }
    }
  }

  return totalArrys
};

module.exports = combinationSum;
