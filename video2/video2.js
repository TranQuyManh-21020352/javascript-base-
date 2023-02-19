var x = 2;
let y = 4;
const z = x % y;
{
    x = 4;
}
console.log('hello everybody my name is andrew!');
console.log('is x equal y: ', z);

const music = ["your lie in April", "living in the missing", "admiting the wrong"];
music[2] = "shape of you";

document.getElementById("demo").innerHTML = "show x + y = " + x + "show the music: " + music.pop() + " " + music.pop() ;
document.write(music.pop());