// T: O(n log(n)) -> O(n^2), S: O(log(n))

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, idxL, idxR) {
  let idxPivot;
  let idxPartition;

  if (idxL < idxR) {
    idxPivot = idxR;
    idxPartition = partition(array, idxPivot, idxL, idxR);

    //sort left and right
    quickSort(array, idxL, idxPartition - 1);
    quickSort(array, idxPartition + 1, idxR);
  }
  return array;
}

function partition(array, idxPivot, idxL, idxR) {
  let valPivot = array[idxPivot];
  let idxPartition = idxL;

  for (let i = idxL; i < idxR; i++) {
    if (array[i] < valPivot) {
      swap(array, i, idxPartition);
      idxPartition++;
    }
  }

  swap(array, idxR, idxPartition);
  return idxPartition;
}

function swap(array, idx1, idx2) {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);
