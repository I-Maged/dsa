const longestConsecutive = (nums) => {
  if (nums.length === 0) return 0

  nums = nums.sort((a, b) => a - b)
  nums = [...new Set(nums)]

  let right = 0
  let current = 1
  let max = 1

  while (right < nums.length) {
    if (nums[right + 1] === nums[right] + 1) {
      current++
    } else {
      current = 1
    }
    right++
    max = Math.max(max, current)
  }
  return max
}

longestConsecutive([2, 20, 4, 10, 3, 4, 5])
longestConsecutive([0, 3, 2, 5, 4, 6, 1, 1])
longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]) //7
