function myFunction() {
    let output = '';
    let age = Number(document.getElementById('age').value);
    if (isNaN(age)) {
        output = 'please input your age by number';
    } else {
        output = (age < 18) ? 'you are not enough old' : 'you are enough old';
    }
    document.getElementById('demo').innerHTML = output + ' to vote!';
}

class User {
    constructor(firsName, lastName, avatar) {
        this.firsName = firsName;
        this.lastName = lastName;
        this.avatar = avatar;

        this.getName = function () {
            return `${this.firsName} ${this.lastName}`;
        };

        this.getAge = function () {
            return this.avatar;
        }
    }
}

let date = new Date();
console.log(`Hom nay la ngay ${date.getDate()} thang ${date.getMonth() + 1} nam ${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`);
let MU = new User('Thanh', 'Pham Duc', 'Avatar');
let Barca = new User('Manh', 'Tran Quy', 19);
console.log(MU.getName());
console.log(Barca.getAge());

let day = 3;
switch (day) {
    case 1:
        console.log('Hom nay la thu hai');
        break;
    case 2:
        console.log('Hom nay la thu ba');
        break;
    case 3:
        console.log('Hom nay la thu tu');
        break;
    default:
        console.log('Hom nay la thu tam');
}

let course = [{
    name: 'os',
    id: '1',
    coin: 0
},
{
    name: 'dbms',
    id: '2',
    coin: 0
},
{
    name: 'se',
    id: '3',
    coin: 5
}]

// for(let key in course){
//     console.log(course[key]);
// }

let isFree = course.every(function(course, index){
    return course.coin === 0;
});

let newCourses = course;
for(let value of course){
console.log(`<h2>${value.name}</h2>`);
}

function sumCoin(accumuator, currentValue, currentIndex, currentArray ){
    return accumuator + currentValue.coin;
}

let totalCoin = course.reduce(sumCoin, 0);
console.log((totalCoin > 0) ? 'phai tra phi' : 'mien phi');

let depthArray = [1, 2, [3, 4], 5, 6 , [7, 8, 9]];
let outArray  = depthArray.reduce(function(pre, current){
    return pre.concat(current);
}, []);
console.log(outArray.length);


