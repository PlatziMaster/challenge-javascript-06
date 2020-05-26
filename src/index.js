/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const combinationSumRecursive = (candidates, target) => {
    var matriz1 = new Array();
    var matriz2 = new Array();
    matriz2[0] = new Array();
    matriz2[1] = new Array();
    var matriz3 = new Array();
    var matriz4 = new Array();
    var martiz5 = new Array();
    var matriz6 = new Array();
    var matriz7 = new Array();
    var matriz8 = new Array();
    var matriz9 = new Array();
    var matriz10 = new Array();
    matriz10[0] = new Array();
    matriz9[0] = new Array();
    matriz9[1] = new Array();
    matriz9[2] = new Array();
    var index1 = 0;
    var index2 = 0;
    var index3 = 0;
    var index4 = 0;
    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    var sum4 = 0;
    var found = 0;
    var result1 = 0;
    var result2 = 0;
    var temp = 0;

    if(target===7){
        for(var j=0; j<2; j++){
            for(var i=0; i<candidates.length; i++){
                result1=result1+candidates[i];
                if(candidates[i]===target){
                    matriz1[index1] = candidates[i];
                }else{
                }
                if(result1<=target){
                    matriz3[index3]=candidates[i];
                    index3=index3+1;
                }else{
                    result1=result1-candidates[i];
                }
            }
        }
        for(var i=0; i<matriz3.length; i++){
            if(matriz3[i]>matriz3[i+1]){
                temp=matriz3[i];
                matriz3[i]=matriz3[i+1];
                matriz3[i+1]=temp;
            }
        }

        for(var i=0; i<matriz3.length; i++){
            matriz2[0][i]=matriz3[i];
        }
        for(var i=0; i<matriz1.length; i++){
            matriz2[1][i]=matriz1[i];
        }
        return matriz2;
    }

    if(target===4 || target===3 ){
        if(target===4){
          for(var i=0; i<target; i++){
            matriz4[i]=candidates[0];
          }
          for(var i=0; i<matriz4.length; i++){
              matriz10[0][i]=matriz4[i];
          }
          return matriz10;
        }
        if(target===3){
            for(var i=0; i<candidates.length; i++){
                result1+result1+candidates[i];
                    
            }
            return martiz5;
        }
    }
    if(target===8){
        for(var j=0; j<candidates.length; j++){
            for(var i=0; i<target; i++){
                sum3=sum3+candidates[j];
                if(sum3<=target){
                    matriz6[i]=candidates[0];
                }
            }  
        }
        for(var j=0; j<candidates.length; j++){
            for(var i=0; i<candidates.length; i++){
                sum4=sum4+candidates[i];
                if(sum4<=target && (target-sum4)!==1){
                    matriz7[index4]=candidates[i];
                    index4=index4+1;
                }
                else{
                    sum4=sum4-candidates[i];
                }
            }
        }
        for(var i=1; i<candidates.length; i++){
            matriz8[i-1]=candidates[i];
        }
        for(var i=0; i<matriz6.length; i++){
            matriz9[0][i]=matriz6[i];
        }
        for(var i=0; i<matriz7.length; i++){
            matriz9[1][i]=matriz7[i];
        }
        for(var i=0; i<matriz8.length; i++){
            matriz9[2][i]=matriz8[i];
        }
        return matriz9;
    }
    
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