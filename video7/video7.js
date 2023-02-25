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

/** DOM stand for 'Document object model'
 * 1. Element: id, class, tag, css selector, html collection
 * 2. Atrribute
 * 3. Text
 */
/*
Browser: HTML -> DOM -> WEB API
*/

/**
 * stopPropagation and preventDefault
 */

document.write('HELLO MY FRIEND!');
let headingNode = document.getElementById('heading');
console.log({
    element: headingNode,
});

let classNames = document.getElementsByClassName('classes');
console.log(classNames);

var box = document.querySelector('.box-1');

console.log(box.querySelectorAll('li'));

console.log(document.forms[0]);

let atribute = document.querySelectorAll('a')[0];

//atribute.href = 'https://i.ytimg.com/vi/jISzv0mpIKo/frame0.jpg';
atribute.setAttribute('href', 'https://i.ytimg.com/vi/jISzv0mpIKo/frame0.jpg');


console.log([box]);

box.innerHTML = '<h1>takudo</h1>';

let classlist = document.querySelector('div.box.box-1');
console.log(classlist.classList.value);

classlist.classList.add('red');

// setInterval(() => {
//     classlist.classList.toggle('red');
// }, 1000);