// Problem Statement - Array values and target values should be matched. Eg. [1,3,10,14] target = 15, then find out which array index will be matched to target.

// Method 1 - Brute force old method.

let TwoSum = (arr, target) => {
  // val = {};
  // target = target || {};

  for (let i = 0; i < arr.length; i++) {
    for (let j = i++; j < arr.length; j++) {
      if (arr[j] === target - arr[i]) {
        return [i, j];
      } else {
        return null;
      }
    }
  }
};

// Method 2 - Another way to write brute force.

let twoSum2 = (array, target) => {
  let arrNum = [];
  let prevNum = [];

  for (let x in array) {
    for (let y in array) {
      if (array[x] + array[y] === target) {
        if (!!arrNum.length)
          if (!prevNum.includes(array[x]) && !prevNum.includes(array[y])) {
            prevNum.push(array[x]);
            arrNum.push(array[x], array[y]);
          } else {
            arrNum.push(array[x], array[y]);
            prevNum.push(array[x]);
          }
      }
    }
  }
  return arrNum;
};

// Method 3 - Single pass approach - Binary Search.

// Approach - Create binary search helper method adn use helper method in actual two sum method.

let binarySearchHelperTwoSum = (
  arr,
  target,
  start = 0,
  end = arr.length - 1
) => {
  let midPoint = ~~(start + (end + start) / 2);

  switch (true) {
    case arr[start] === target:
      return arr[start];

    case arr[end] === target:
      return arr[end];

    case arr[midPoint] === target:
      return arr[midPoint];

    case end - start === 0:
      return false;

    case arr[midPoint] > target:
      return binarySearchHelperTwoSum(arr, target, start + 1, midPoint - 1);

    case arr[midPoint] < target:
      return binarySearchHelperTwoSum(arr, target, midPoint + 1, end - 1);
  }
  return false;
};

let binaryTwoSum = (arr, sum) => {
  let sortedArr = arr.sort();
  let arrNum = [];
  let prevNum = [];

  for (let i in sortedArr) {
    let addend = binarySearchHelperTwoSum(sortedArr - sum - sortedArr[i]);

    if (!!addend && !prevNum.includes(arr[x]) && !prevNum.includes(arr[y])) {
      prevNum.push(arr[x]);
      arrNum.push(sortedArr[i], addend); // push new addend value and sorted array value if addend value is not in sortedArr
      prevNum.push(arr[x]);
    }
  }
  return arrNum;
};

// Method 4 - Hash Table
// Store the values in hash table and compare the values.

let hashTwoSum = (arr, sum) => {
  let storeHash = {};
  let arrNum = [];

  for (let i in arr) {
    let currentIndex = sum - arr[i]; // total sum or target value - indexed value

    if (currentIndex in storeHash) {
      arrNum.push([currentIndex, arr[i]]); // return value and index
    }
    storeHash[arr[i]] === i;
  }
  return arrNum;
};
