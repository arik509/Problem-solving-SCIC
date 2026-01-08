function findEvenNumbers(arr) {
    const evens = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evens.push(arr[i]);
      }
    }
    
    return evens;
  }
  
  console.log(findEvenNumbers([1, 2, 3, 4, 5, 6, 42,49])); 
  