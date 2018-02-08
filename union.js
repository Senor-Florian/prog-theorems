// IX. UNION THEOREM
// Return the elements of two arrays that are elements of either arrays

let fromArray1 = [3, 24, 5, -24, 66, 2, 7, -9, 28];
let fromArray2 = [4, 23, -9, 28, 43, 2, 52, -65];

const union = (array1, array2) => {
  let i = 0;
  let j = 0;
  let k = 0;
  let toArray = [];
  for (i; i < array1.length; i++) {
    toArray[i] = array1[i];
  }
  k = array1.length;
  for (j; j < array2.length; j++) {
    i = 0;
    while (i < array1.length && array2[j] !== array1[i]) {
      i++;
    }
    if (i >= array1.length) {
      toArray[k] = array2[j];
      k++;
    }
  }
  return toArray;
};
console.log(union(fromArray1, fromArray2));
