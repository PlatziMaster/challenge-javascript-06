const combinationSum = (candidates,target,index=0, cur=[], combinations = []) => {
  if (target <=0) {
      if(target===0) combinations.push(cur.slice())
      return
  }
  if (index < candidates.length){
      const value = candidates[index]
      cur.push(value)
      combinationSum(candidates,target - value, index, cur, combinations)
      cur.pop()
      combinationSum(candidates,target,index +1, cur, combinations)
  }
  return  combinations
}

module.exports = combinationSum;