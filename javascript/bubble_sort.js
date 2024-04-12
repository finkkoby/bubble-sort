function bubbleSort(arr) {
  for (let i = 0; i < arr.length + 1; i++) {
    let a = arr[i]
    let b = arr[i + 1]
    if (a > b) {
      [a, b] = [b, a]
      arr[i] = a
      arr[i + 1] = b
      return bubbleSort(arr)
    }
  }
  return arr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1, 2, 3, 4]");
  console.log("=>", bubbleSort([3, 2, 1, 4]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", bubbleSort([1, 2, 3]));

  console.log("");

  console.log("Expecting: []");
  console.log("=>", bubbleSort([]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", bubbleSort([2, 3, 1]));
}

module.exports = bubbleSort;

// Please add your pseudocode to this file

// for let i = 0
//    if arr[i] > arr[i + 1]
//        swap
//        return bubbleSort(arr)
//    return arr
// And a written explanation of your solution
