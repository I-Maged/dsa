const singleNumber = (nums) => {
  const newMap = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (!newMap.has(nums[i])) {
      newMap.set(nums[i], 1)
    } else {
      newMap.set(nums[i], newMap.get(nums[i]) + 1)
    }
  }

  nums = nums.filter((num) => newMap.get(num) === 1)

  return nums[0]
}
singleNumber([2, 2, 1])
singleNumber([4, 1, 2, 1, 2])
singleNumber([1])
