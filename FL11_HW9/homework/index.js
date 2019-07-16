//Task 0
function getNumbers(str1) {
    let arr1 = str1.split('');
    let Result = [];
    for(let i = 0; i < arr1.length; i++) {
        if(!isNaN(arr1[i])) {
            Result.push(arr1[i]);
        }
    }
    return Result;
}
//console.log(getNumbers('s12eeef41'));

//Task 1
function findTypes() {
    let arr = {};
    for(let i = 0; i < arguments.length;i++) {
        if(arr.hasOwnProperty(typeof arguments[i])) { 
            arr[typeof arguments[i]] += 1;
        } else {
            arr[typeof arguments[i]] = 1;
        }
    }
    return arr;
}
//console.log(findTypes('s12eeef41'));
//console.log(findTypes('s12eeef41', null, 'hi', 3));

//Task 2
function executeforEach (arr,func) {
    for(let i = 0; i < arr.length;i++) {
        func(arr[i]);
    }
}
//console.log(executeforEach([1,2,3], function(el) {
// console.log(el) 
//}));

//Task 3
function mapArray(arr,func) {
    let arr2 = [];
    executeforEach(arr,function(el) {
        arr2.push(func(el));
    });
    return arr2;
}
//console.log(mapArray([2, 5, 8], function(el) {
// return el + 3 
//}));

//Task 4
function filterArray(arr,func) {
    let arr3 = [];
    executeforEach(arr,function(el){
        if(func(el)) {
            arr3.push(el);
        }
    });
    return arr3;
}
//console.log(filterArray([2, 5, 8], function(el) {
// return el > 3 
//}));

//Task 5
function showFormattedDate(date) {
    let currDate = date.toDateString();    
    return 'Date:' + currDate.substring(currDate.indexOf(' '));    
}
//console.log(showFormattedDate(new Date('2019-01-27T01:10:00'))); 

//Task 6
function canConvertToDate(date){
    let validDate = new Date(date);
    return !isNaN(validDate);
}
//console.log(canConvertToDate('2019-03-27T01:10:00'));
//console.log(canConvertToDate('2019-13-27T01:10:00'));

//Task 7
function daysBetween(date1, date2){
    let sec = 1000;
    let min = 3600;
    let hr = 24;
    
    return Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (sec * min * hr));   
} 
//console.log(daysBetween(new Date('2016-01-27T01:10:00'), new Date('2016-02-27T01:10:00')));

//Task 8
let Specs = [
    {
      '_id': '5b5e3168c6bf40f2c1235cd6',
      'index': 0,
      ' birthday ': '2016-03-18T00:00:00',
      'eyeColor': 'green',
      'name': 'Stein',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e3168e328c0d72e4f27d8',
      'index': 1,
      ' birthday ': '1991-02-11T00:00:00',
      'eyeColor': 'blue',
      'name': 'Cortez',
      'favoriteFruit': 'strawberry'
    },
    {
      '_id': '5b5e3168cc79132b631c666a',
      'index': 2,
      ' birthday ': '1984-04-17T00:00:00',
      'eyeColor': 'blue',
      'name': 'Suzette',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e31682093adcc6cd0dde5',
      'index': 3,
      ' birthday ': '1994-04-17T00:00:00',
      'eyeColor': 'green',
      'name': 'George',
      'favoriteFruit': 'banana'
    }
];
  
function getAmountOfAdultPeople(Specs) {
    let Result = 0;
    let daysInYear = 365;
    let AdultYears = 18;
    filterArray(Specs, function(el) {
        if(daysBetween(new Date(el[' birthday ']), new Date()) > daysInYear * AdultYears) {
            Result++;
        }
    });
    return Result;
}
//console.log(getAmountOfAdultPeople(Specs));

//Task 9
function keys() {
    let arr = [];
    for (let i = 0; i < arguments.length; i++) {
      for (let key in arguments[i]) {
        if (arguments[i].hasOwnProperty(key)) {
          arr.push(key);
        }
      }
    }
    return arr;
}
//console.log(keys({keyOne: 1, keyTwo: 2, keyThree: 3}));

//Task 10
function values() {
    let arr = [];
    for (let i = 0; i < arguments.length; i++) {
      for (let key in arguments[i]) {
        if (arguments[i].hasOwnProperty(key)) {
          arr.push(arguments[i][key]);
        }
      }
    }
    return arr;
}
//console.log(values({keyOne: 1, keyTwo: 2, keyThree: 3}));