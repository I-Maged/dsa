const moveZeroes = (nums) => {
  let lastNonZeroIndex = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      ;[nums[lastNonZeroIndex], nums[i]] = [nums[i], nums[lastNonZeroIndex]]
      lastNonZeroIndex++
    }
  }
  return nums
}

moveZeroes([0, 1, 0, 3, 12])
