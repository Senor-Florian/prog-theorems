// VII. ASSORTMENT THEOREM
// Takes the elements of an array an puts them in two separate arrays
// depending on whether the elements are positive or negative

let fromArray = [52, -2, -32, 44, 6, -23, 537, 228, -359, -110];

const assort = (array) => {
  let i = 0;
  let j = 0;
  let k = 0;
  let toArray1 = [];
  let toArray2 = [];

  for (i; i < array.length; i++) {
    if ((array[i] >= 0)) {
      toArray1[j] = array[i];
      j++;
    } else {
      toArray2[k] = array[i];
      k++;
    }
  }
  return [toArray1, toArray2];
};

console.log(assort(fromArray));
