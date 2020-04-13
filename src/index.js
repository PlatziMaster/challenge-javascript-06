/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const combinationSumRecursive = (candidates, target)=>{
  
  let grupoSolucion = []
  let suma = 0
  let solucion = []
  let i = 0
  let z = candidates.length;

  for (let index = 0; index < candidates.length; index++) {
    i = index
    const Number = candidates[index];

    if (Number == target) {
      grupoSolucion.push([Number])
        break
      }
    if((target%2 == 0) && (Number%2 == 0)){
          while(suma < target){
              suma += candidates[i]
              solucion.push(candidates[i])
              if (suma == target) {
                grupoSolucion.push(solucion)
                suma = 0              
                solucion = []
              break
            }
          }
      } 
    
      while (suma < target && i < z) {
          if (candidates[i] + suma > target) {
            break
          }else{          
            suma += candidates[i]
            solucion.push(candidates[i])
            i++
          }
          if (suma == target) {
            grupoSolucion.push(solucion.sort())
            suma = 0              
            solucion = []
            break
          }
      }

      if (suma == target) break

      while(suma < target ){

        if (z == 1) {
          suma += candidates[i-1]
          solucion.push(candidates[i-1])
        }else{
          
          while((candidates[i] + suma > target) && i >= index){
            i--
          }
          if (i >= index) {
            suma += candidates[i]
            solucion.push(candidates[i])
          }            
        }
        if (suma == target) {
          grupoSolucion.push(solucion.sort())
          suma = 0              
          solucion = []
          break
        }
        if(i <= index){
          suma = 0              
          solucion = []
          break
         }  
      }
    
  }
  
  return grupoSolucion
 
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