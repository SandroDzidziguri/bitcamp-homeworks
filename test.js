import { input, print } from './bitcamp/lib.js';

let num = input('write number _');

if(num % 2 == 0){
  console.log("true")
}else{
  console.log("false")
}


if (num > 0){
  console.log("positive")
}else if (num == 0){
  console.log("0")
}else{console.log("negative")
}

if(num % 5 == 0){
  console.log("it diveds")
}else {console.log("it doesnot divide")
}

let str = input("say something ");

if(str.length == 0){
  console.log("empty")
}else {
  console.log("full")
}

if(str.toLowerCase().includes("general")){
console.log("it contains a word general")
} else {
  console.log("it doesnot contain word general");
}

let numbers = [12, 5, 8, 130, 44];

let minValue = Math.min(...numbers);

console.log(minValue);