const arr = [[1,2],[2,3],[3.4]];


function diagonalDifference(arr) {
    // Write your code here
    let left  = 0
    let right = 0
     
     for(let m =0 ; m < arr.length;m++){
         for(let n = 0 ; n<arr.length;n++){
            if (m==n){
                left += arr[m][n]
            }
            if(m+n == arr.length-1){
                right += arr[m][n]
            }
         }  
     }
    return Math.abs(right-left)

}

diagonalDifference(arr)