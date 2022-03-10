let arr = [-4, 3, -9, 0, 4, 1]

function plusMinus(arr) {
    // Write your code here
    let positive =0
    let negatif = 0
    let nol = 0
    for(let i = 0 ; i <arr.length;i++){
        if(arr[i]<0){
            negatif += 1;
        }
        else if(arr[i]>0){
            positive += 1;
        }
        else{
            nol +=1;
        }
        
    }
        positive  = (positive/arr.length).toPrecision(6)
        negatif  = (negatif/arr.length).toPrecision(6)
        nol = (nol/arr.length).toPrecision(6)
        
        return positive
}  

plusMinus(arr)