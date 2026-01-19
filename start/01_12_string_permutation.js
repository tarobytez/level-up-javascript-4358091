function numPermutations(letters) {
  let total;
  for(let i = 1; i <= letters.length; i++) {
    if(total === undefined) {
      total = 1;
      continue;
    }

    total *= i;
  }

  return total;
}

console.log(numPermutations("hello"));