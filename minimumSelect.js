// XI. MININMUM SORT THEOREM
// Sort the elements of an array

let i;
let j;
let min;
let fromArray = [2342, 234, 1, -424, -14324, -23, 411, -6433];

const minimumSort = (array) => {
  for (i = 0; i < array.length; i++) {
    min = i;
    for (j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
};
console.log(minimumSort(fromArray));
