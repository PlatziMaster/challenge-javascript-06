/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} target - number we're searching possible sum combinations
 * @param {number} index - index of the candidate to start further exploration from.
 * @param {number[][]} combinations - resulting list of combinations.
 * @param {number[]} current - currently explored candidates.
 * @return {number[][]}
 */
const combinationSum = (
  candidates,
  target,
  index = 0,
  current = [],
  combinations = []
) => {
  // Case base
  if (target < 0) {
    return;
  }

  if (target === 0) {
    combinations.push([...current]);
    return;
  }

  for (let i = index; i < candidates.length; i++) {
    const currentValue = candidates[i];
    current.push(currentValue);
    combinationSum(candidates, target - currentValue, i, current, combinations);
    current.pop();
  }

  return combinations;
};

module.exports = combinationSum;
