function removeDuplicates(arr) {
  let uniqueArr = [];
  
  for (let i of arr) {
    if (uniqueArr.indexOf(i) === -1) {
      uniqueArr.push(i);
    }
  }
  
  return uniqueArr;
}

console.log(removeDuplicates([1, 5, 2, 3, 4, 4, 2, 2, 5]));