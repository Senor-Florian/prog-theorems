// II. COUNTING THEOREM
// Counts the even numbers in an array

let array = [23, 1, 32, 666, 392, 33, 43, 1024, 404];

const counting = (array) => {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      counter += 1;
    }
  }
  return counter;
};

console.log(counting(array));
