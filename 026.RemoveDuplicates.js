const removeDuplicates = (nums) => {
  let left = 0
  let right = 1

  while (right < nums.length) {
    if (nums[left] !== nums[right]) {
      left++
      nums[left] = nums[right]
    }
    right++
  }

  console.log(left + 1)
}

removeDuplicates([1, 1, 2]) //[1,2]
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]) //[0,1,2,3,4]
