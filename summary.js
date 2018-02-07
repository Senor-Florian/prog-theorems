// I. SUMMARY THEOREM
// Adds the elements of an array together
let array = [1, 2, 3, 4, 5];

const summary = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

console.log(summary(array));
