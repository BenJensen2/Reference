function thisIsaFunction(arr){
  for (var i=0;i<arr.length;i++){
    // Add looping through a dictionary/object
  }
}


// Basic 13 Algorithms

// Team Members: 

// 1. Print 1-255
// Print1To255()
// Print all the integers from 1 to 255.
// output: 1 2 3 4 5 6 7 8 9 10 ... 254 255
function print1To255() {
    for(var i=1; i<=255; i++){
        console.log(i)
    }
    // code goes here
  }
  
  print1To255()
  
  
  // 2. Print Odds 1-255
  // PrintOdds1To255()
  // Print all odd integers from 1 to 255.
  // oupput: 1 3 5 7 9 11 13 15 ... 253 255
  function printOdds1To255() {
    for(var i=1; i<=255; i++){
      if(i%2 !== 0){
        console.log(i);
    }
    // code goes here
  }
  
  // 3. Print Ints and Sum 0-255
  // PrintIntsAndSum0To255()
  // Print integers from 0 to 255, and with each integer print the sum so far.
  // output: 0 0 , 1 1, 2 3, 3 6, 4 10, 5 15 ...
  function PrintIntsAndSum0To255() {
    var sum = 0;
    for(var i=0; i<=255; i++){
      console.log(i);
      sum = sum + i;
      console.log( sum)
    }
    // code goes here
  }