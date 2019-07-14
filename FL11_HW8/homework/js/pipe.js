function pipe(arg) {
    for(let i=1; i< arguments.length; i++){
        arg = arguments[i](arg);
    }
    return arg;
}

function AddOne(a){
    return a+1;
}

console.log(pipe(2, AddOne, AddOne, AddOne));
console.log(pipe(4, AddOne, AddOne, AddOne, AddOne));

