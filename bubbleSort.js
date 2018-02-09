// XI. BUBBLE SORT THEOREM
// Sort the elements of an array

let i;
let j;
let fromArray = [2342, 234, 1, -424, -14324, -23, 411, -6433, 2346252, -124432, 5262, 2, -43];

const bubbleSort = (array) => {
  for (i = array.length - 1; i > 0; i--) {
    for (j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
};
console.log(bubbleSort(fromArray));
