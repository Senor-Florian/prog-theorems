// VIII. INTERSECTION THEOREM
// Return the elements of two arrays that are elements of both

let fromArray1 = [3, 24, 5, -24, 66, 2, 7, -9, 28];
let fromArray2 = [4, 23, -9, 28, 43, 2, 52, -65];

const intersect = (array1, array2) => {
  let i = 0;
  let j = 0;
  let k = 0;
  let toArray = [];
  for (i; i < array1.length; i++) {
    j = 0;
    while (j < array2.length && array1[i] !== array2[j]) {
      j++;
    }
    if (j < array2.length) {
      toArray[k] = array1[i];
      k++;
    }
  }
  return toArray;
};

console.log(intersect(fromArray1, fromArray2));
