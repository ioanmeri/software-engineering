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
  console.log(arr);
  return swapIdx;
}

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));
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
