// VI. CHOOSING THEOREM
// Returns the even elements of an array

let fromArray = [41, 23, 32, 4, 5, 66, 57, 81, 92, 102];

const choose = (array) => {
  let i = 0;
  let j = 0;
  let toArray = [];

  for (i; i < array.length; i++) {
    if ((array[i] % 2) === 0) {
      toArray[j] = array[i];
      j++;
    }
  }
  return toArray;
};

console.log(choose(fromArray));
