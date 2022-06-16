// T: O(n^2), S: O(1)

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  const len = array.length;

  for (let i = 0; i < len; i++) {
    let minValIdx = i;

    for (let j = i; j < len; j++) {
      if (array[j] < array[minValIdx]) {
        minValIdx = j;
      }
    }

    if(minValIdx !== i) {
      [array[i], array[minValIdx]] = [array[minValIdx], array[i]];
    }
  }
}

selectionSort(numbers);
console.log(numbers);