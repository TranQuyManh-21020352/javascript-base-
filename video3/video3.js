let a = "I'm groot. I'm becomming the Viking!"  ;
function Myfunction(){
    let text = document.getElementById("demo").innerHTML;
    document.getElementById("demo").innerHTML = text.replace(/Microsoft/i, "UET course").toUpperCase();
}
let b = a.trim();
document.writeln(b.padStart(40, 'x'));
//console.log(c);
console.log(a.length);
console.log(a.substring(-6, 2));
console.log(a.slice(-12, -6));
console.log(4 + 5 + 'a');
console.log('a' + 4 + 5 + 0);
console.log("a" + 4 + 5 + "b" + 8 + 9);

const array = a.split(" ");
document.writeln(array[0] + array[1]);