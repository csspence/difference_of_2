/*
The objective is to return all pairs of integers from a given collection of integers that have a difference of 2.

The result should be sorted in ascending order.

The input will consist of unique values. The order of the integers in the input collection should not matter.

Examples
[1, 2, 3, 4]      -->  [[1, 3], [2, 4]]
[4, 1, 2, 3]      -->  [[1, 3], [2, 4]]
[1, 23, 3, 4, 7]  -->  [[1, 3]]
[4, 3, 1, 5, 6]   -->  [[1, 3], [3, 5], [4, 6]]
*/

const twosDifference = (input) => {
  const sortInput = input.sort((a, b) => a - b);
  const pairs = [];
  for(let i = 0; i < sortInput.length; i++) {
    for(let h = i; h < sortInput.length; h++) {
      if(sortInput[i] + 2 === sortInput[h]) {
        pairs.push([sortInput[i], sortInput[h]]);
      }
    }
  }
  return pairs;
}