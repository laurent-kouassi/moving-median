function PermutationStep(num) { 

  // code goes here
  // logic: digits compute
  var permutationArray = [];
  var charsUsed = [];

  const permutation = numbersArr => {
    let i;
    let char;

    for(i = 0; i < numbersArr.length; i++){
      char = numbersArr.splice(i, 1)[0]; // remove 1 element at i
      charsUsed.push(char);

      if(numbersArr.length === 0) {
        permutationArray.push(charsUsed.slice()) // copy chararters used to permutation array
      }

      permutation(numbersArr); // recursively 
      numbersArr.splice(i, 0, char); // remove nothing at our original array but change char at i
      charsUsed.pop(); // remove the most last element in charsUsed
    }

    return permutationArray; 
  };

  permutation(String(num).split(""));

  for(var x = 0; x < permutationArray.length; x++) {
    permutationArray[x] = Number(permutationArray[x].join(''));
  };

  permutationArray = permutationArray.sort((a, b) => a - b);

  for(var j = 0; j < permutationArray.length; j++){
    if(permutationArray[j] > num) return permutationArray[j];
  }

  return -1; 
}
   
// keep this function call here 
console.log(PermutationStep(readline()));
