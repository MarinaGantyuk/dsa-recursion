/** product: calculate the product of an array of numbers. */

function product(nums) {
  // let result = 1;
  // nums.forEach((num) => (result *= num));
  // return result;
  if (nums.length == 1) {
    return nums[0];
  } else {
    let last = nums.pop();
    return last * product(nums);
  }
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, longestWord = 0) {
  if (words.length == 1) {
    let currentWord = words[0];
    return Math.max(longestWord, currentWord.length);
  } else {
    let currentWord = words.pop();

    return longest(words, Math.max(longestWord, currentWord.length));
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length <= 2) {
    return str[0];
  } else {
    let firstTwoStr = str.substring(0, 2);
    let newStr = str.substring(2);
    return firstTwoStr[0] + everyOther(newStr);
  }
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 2) {
    if (str[0] == str[1] || str.length <= 1) {
      return true;
    } else {
      return false;
    }
  } else {
    let firstLetter = str[0];
    let lastLetter = str[str.length - 1];
    let newStr = str.substring(1, str.length - 1);
    return firstLetter == lastLetter && isPalindrome(newStr);
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index = 0) {
  if (index == arr.length - 1) {
    if (arr[index] == val) {
      return index;
    } else {
      return -1;
    }
  } else {
    if (arr[index] == val) {
      return index;
    } else {
      return findIndex(arr, val, index + 1);
    }
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length == 1) {
    return str;
  } else {
    let firstLetter = str.substring(0, 1);
    let restStr = str.substring(1);
    return revString(restStr) + firstLetter;
  }
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  console.log(obj);
  let result = [];
  for (let key in obj) {
    if (typeof obj[key] == "object") {
      result.push(...gatherStrings(obj[key]));
    } else if (typeof obj[key] == "string") {
      result.push(obj[key]);
    }
  }
  return result;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((right + left) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);
  }
  return binarySearch(arr, val, middle + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
