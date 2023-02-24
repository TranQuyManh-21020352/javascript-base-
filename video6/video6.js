console.log(Math.floor(Math.random() * 100));
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

function myMethod(value) {
    console.log(value);
}

function myValue(Value) {
    return Value;
}

myMethod(myValue('Tran Quy Manh'));

let course = ['html', 'css', 'js', 'nodejs'];

Array.prototype.map2 = function (agrs) {
    //if(typeof agrs == )
    let output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(agrs(this[i]));
    }
    return output;
}

let html = course.map2(function (course) {
    return `<h2>${course}</h2>`;
});

let htmls = course.map(function (course) {
    return `<h2>${course}</h2>`;
});

let foreach = course.forEach(function (course, index) {
    console.log(`khoa ${index} la: ${course}`);
});

let find = course.find(function (course) {
    console.log
})
console.log(html.join(''));

//forEach method

Array.prototype.forEach2 = function (callbackfn) {
    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            callbackfn(this[index]);
        }
    }
}

let f = course.forEach2(function (course) {
    console.log(course);
});

//fillter

Array.prototype.filter2 = function (callbackfn) {
    let output = [];
    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            if (callbackfn(this[index])) {
                output.push(this[index]);
            }
        }
    }
    return output;
}

let F = course.filter2(function (course) {
    return course == 'html';
});

console.log(F);

//every() return true of false if all of elements of array get the same value

Array.prototype.somes = function(callbackfn){
    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            if (callbackfn(this[index])) {
                return true;
            }
        }
    }
    return false;
}

let s = course.somes(function(course){
    return course == 'CSS';
});

console.log(s);

let set = ['1', '2', '3', '3', '2', '4'];
console.log(new Set(set));

function giaithua(n){
    if(n == 1){
        return 1;
    }
    return giaithua(n - 1) * n;
}

let n = giaithua(5);
console.log(n);