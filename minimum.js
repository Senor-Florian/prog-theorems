// X. MININMUM THEOREM
// Returns the smallest element of an array

let fromArray = [2342, 234, 1, -424, -14324, -23, 411, -6433];

const minimum = (array) => {
  let min = array[0];
  let i = 1;
  for (i; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
};

console.log(minimum(fromArray));
