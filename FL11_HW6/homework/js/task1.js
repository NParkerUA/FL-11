const a1 = +prompt('Please enter the X coordiante of the start of a line');
const a2 = +prompt('Please enter the Y coordiante of the start of a line');
const b1 = +prompt('Please enter the X coordiante of the end of a line');
const b2 = +prompt('Please enter the Y coordiante of the end of a line');
const c1 = +prompt('Please enter the X coordinate of the point on coordinate system');
const c2 = +prompt('Please enter the Y coordinate of the point on coordinate system');
const divider = 2;

let C1 = (a1 + b1) / divider;
let C2 = (a2 + b2) / divider;

if (c1 === C1 && c2 === C2) {
    console.log(true);
} else {
    console.log(false);
}