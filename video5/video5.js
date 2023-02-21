

const a = 4;
let i = 1;
while(i <= 10){
console.log(
    `luy thua bac i: ${a ** i}`
);
i++;
}

let array = ['Arsenal', 'ManchesterCity', 'ManchesterUnited', 'Liverpool'];
console.log(array[0].concat(' ' + array[2]));
// let i = {};
// for(let i = 0; i < array.length; i ++){
//     if(i == 0)
//     console.log(array[i]);
// }
// console.log(i);

function myFunction(){
    let output = '';
    let age = Number(document.getElementById('age').value);
    if(isNaN(age)){
        output = 'please input your age by number';
    }else{
        output = (age < 18) ? 'you are not enough old' : 'you are enough old';
    }
    document.getElementById('demo').innerHTML = output + ' to vote!';
}

let test = 39/'ab';
console.log(isNaN(test));

let arr = [24, 0, 25];
console.log(arr);
console.log(arr.join(', '));// join()
console.log(arr.pop());//remove the first element of array
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.push(28,29,30));// add one element into array
console.log(arr.unshift(45, 46, 48));// insert onto the first element
arr.splice(1, 2);// remove n elements from the start 
console.log(arr);
console.log(arr.slice(0));






