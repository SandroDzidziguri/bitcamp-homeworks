//  1

let month = parseInt(2);
switch(month){
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
  console.log("31 day's in this months");
  break;
  case 4:
  case 6:
  case 9:
  case 11:
  console.log("30 day's in this month") ;
  break;
  case 2:
    console.log("28, sometimes 29 day's in this month");
    break;
    default:
      console.log(" invalid number")
      break;
}

//  2
let num = Math.floor(Math.random()*10)+1;
  let guess = 0;
  while( guess !== num){
    guess = parseInt(prompt("guess the number "));

  }
  if(guess !== num ){
    console.log("wrong try again ");
  }else {
  console.log("just right");
  }

//   3

let grade = prompt("enter your grade :").toUpperCase()
  
  
  switch(grade){
    case "A":
      console.log("well done");
      break;
    case "B":
      console.log("great");
      break;
    case "C":
      console.log("not too bad");
      break;
    case "F":
      console.log("fail");
      break;
      default:
        console.log("inavlid input");
        break;

  }


//   4

let password = "12345";
let gues;
while(gues != password){
gues = prompt("write password :");        
}
if(gues = password ){
  console.log("correct!");
}
  
//      5


function sumDigit(number){
    let num = Math.abs(number).toString();
    let sum = 0;
    for(let i = 0; i < num.length; i++){
      sum += parseInt(num[i]);
    }
    return sum;
  }
  console.log(sumDigit("32"))

//   6

function countBs(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
      if(str[i] === "B"){
        count++
      }
    }
    return count;
    
     }
    console.log(countBs("Big Bad wolf"));
    
 

