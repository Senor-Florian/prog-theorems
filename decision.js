// III. DECISION THEOREM
// Decides whether an array contains a certain number or not

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const decision = (array, number) => {
  let i = 0;
  while (i < array.length && array[i] !== number) {
    i++;
  }
  if (i < array.length) {
    return 'The array contains ' + number;
  } else {
    return 'The array does not contain ' + number;
  }
};

console.log(decision(array, 666));
