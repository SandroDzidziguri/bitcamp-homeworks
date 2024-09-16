for (let i = 0; i < 10; i++) {
    console.log(i);
    
}

// 2


function findLongestWordLength(sentence) {
    let words = sentence.split(' ');
    let longestLength = 0;
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestLength) {
        longestLength = words[i].length;
      }
    }
  
    return longestLength;
  }
  
  
  let sentence =" დაჯდა წერად ანდერძისად საბარლოსა საუბრისად ";
  
  console.log("წინადადებაში ყველაზე მეტი ასო არის:");
  console.log(findLongestWordLength(sentence));

//   3
console.log("measame davalebis ricxvebi")
for (let i = 0; i <= 20; i += 2) {
        console.log(i)

}
// 4
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log("მე4 დავალების რიცხვი")
console.log(sum)

// 5


let number = Number(3);

number = parseInt(number);

console.log(" მე5 დავალება ")
for(let i = 0 ; i < number ; i++){

  console.log("Hello!")
}

