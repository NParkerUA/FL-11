const a = +prompt('Please enter the length of First side of triangle');
const b = +prompt('Please enter the length of Second side of triangle');
const c = +prompt('Please enter the length of Third side of triangle');

if (a <= 0 || b <= 0 || c <= 0) {
    console.log('Triangle does not exist');
} else {
    if (a === b &&
        b === c &&
        c === a) {
        console.log('Equivalent triangle');
    } else if (a === b &&
        a !== c || b === c &&
        b !== a || c === a &&
        c !== b) {
        console.log('Isosceles triangle');
    } else {
        console.log('Normal triangle');
    }
}