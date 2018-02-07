// V. COPYING THEOREM
// Multiplies the elements of an array an inserts them in a new one

let fromArray = [11, 12, 13, 14, 15];

const copy = (array) => {
  let toArray = [];
  for (let i = 0; i < array.length; i++) {
    toArray[i] = array[i] * 3;
  }
  return toArray;
};

console.log(copy(fromArray));
