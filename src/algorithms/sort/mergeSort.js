// T: O(n log(n)), S: O(n)

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array = []) {
  if (array.length <= 1) {
    return array;
  }

  const len = array.length;
  const midIdx = Math.floor(len / 2);
  const arrL = array.slice(0, midIdx);
  const arrR = array.slice(midIdx);

  return merge(mergeSort(arrL), mergeSort(arrR));
}

function merge(arrL = [], arrR = []) {
  const res = [];
  let idxL = 0;
  let idxR = 0;

  while (idxL < arrL.length && idxR < arrR.length) {
    if (arrL[idxL] < arrR[idxR]) {
      res.push(arrL[idxL]);
      idxL++;
    } else {
      res.push(arrR[idxR]);
      idxR++;
    }
  }

  return res.concat(arrL.slice(idxL)).concat(arrR.slice(idxR));
}

const answer = mergeSort(numbers);
console.log(answer);
