// IV. SELECTION THEOREM
// Decides whether an array contains a certain number or not
// and if it does it returns its index too

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const selection = (array, number) => {
  let i = 0;
  while (i < array.length && array[i] !== number) {
    i++;
  }
  if (i < array.length) {
    return 'The array contains ' + number + ' and its index is ' + i;
  } else {
    return 'The array does not contain ' + number;
  }
};

console.log(selection(array, 4));
