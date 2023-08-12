const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

function pivot(arr, start = 0, end = arr.length - 1) {
  var pivot = arr[start];
  var swapIdx = start;

  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));

// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));
// 3
// [2, 1, 3, 4, 8, 6, 7, 5]

// call stack
// [4, 8, 2, 1, 5, 7, 6, 3]
// [4, 8, 2, 1, 5, 7, 6, 3]
// [4, 2, 8, 1, 5, 7, 6, 3]
// [4, 2, 1, 8, 5, 7, 6, 3]
// ...
// ...swap with swapIndex
// [4, 2, 1, 3, 5, 7, 6, 8]
