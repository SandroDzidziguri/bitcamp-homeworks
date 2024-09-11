import { input, print } from './bitcamp/lib.js';
// davaleba 1
let x = input("wahts your name? ");

console.log("Hello , ", x , " nice to meet you!");

// davaleba 2
let string = input(" WRITRE YOUR STRING HERE: ");
  
console.log(" your string has ", string.length , " letters");

// davaleba 3
let quote = input("wahts your quote?");

let author = input(" who said it ?");

console.log(author, `said `, quote);

// davaleba 4

let str = input(" wahts youre sentence ?");

console.log(str.toLowerCase());

// davaleba 5

let sent = input( ' sentence please _ ');

console.log(sent.replaceAll(" ", "..."));

// davaleba6

function convert(str){
  return str.replace(":)","😊").replace(":(","🙁");
}

function main(){
   let str = input("how do you feel?");
  console.log(convert(str));
  }
main();
// davaleba 7


let noun = input("enter a noun: ");
let verb = input("enter a verb: ");
let adjective = input("enter a adjactive: ");
let adverb = input("enter a adverb: ");
let adjective1 = input("enter a adjactive: ");
console.log(noun, verb , adjective , adverb , adjective1,"! . that\'s hilarious :DD");




