function ReverseNumber(a) {
    let str1 = a.toString();
    let Result='';
    
    if(str1[0] === '-'){
        Result += '-';
        str1 = str1.slice(1);
    }
    
    for (let i=str1.length-1; i>=0;i--){
        Result +=str1[i];
    }    
    return Result;
}
console.log(ReverseNumber(-23456));
console.log(ReverseNumber(12345));