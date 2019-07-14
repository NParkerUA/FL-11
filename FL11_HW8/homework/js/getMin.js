function GetMin() {
    let arr1 = [];
    for (let i=0; i<arguments.length; i++) {
        arr1[i]=arguments[i];
    }
    let Result = arr1[0];
    for (let i=0; i<arr1.length;i++){
        if(arr1[i]<Result){
            Result=arr1[i];
        }        
    }    
    return Result;
}
console.log(GetMin(5, 2, -4, 4, 7, -2));