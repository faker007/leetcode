// O(n + m)
const findMedianSortedArrays = function (nums1, nums2) {
  let sortedArr = nums1.concat(nums2).sort((a, b) => a - b);

  while (sortedArr.length > 2) {
    sortedArr = sortedArr.slice(1, sortedArr.length - 1);
    console.log(sortedArr);
  }

  if (sortedArr.length == 1) {
    return sortedArr[0];
  }
  return (sortedArr[0] + sortedArr[1]) / 2;
};

// @Testing
console.log(findMedianSortedArrays([1, 2], [3, 4]));
