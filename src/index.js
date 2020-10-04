/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */


const findNumbers = function(candidates, target, i, current, result){
  if(target === 0){
      const temp = current.slice()
      result.push(temp)
      return
  }

  for(let j = i; j < candidates.length; j++){
      if(target < candidates[j]) {
        return
      }
      current.push(candidates[j])
      findNumbers(candidates, target - candidates[j], j, current, result)
      current.pop()
  }
}

function sum (target) {
  return function (candidates) {
    let result = []
    candidates.sort((a, b) => a - b)
    const uniqs = candidates.filter(function(item, index, array) {
      return array.indexOf(item) === index
    })
    let elements = []
    let suma = 0
    findNumbers(uniqs, target, suma, elements, result);
    return result;
  }
}

const combinationSumRecursive = (candidates, target) => {
  const sumatory = sum(target)
  return sumatory(candidates)
}

/**
 * Backtracking algorithm of finding all possible combination for specific sum.
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
  return combinationSumRecursive(candidates, target)
}

module.exports = combinationSum
