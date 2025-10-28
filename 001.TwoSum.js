const twoSum = (nums, target) => {
  const newMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    let compliment = target - nums[i]
    if (newMap.has(compliment)) {
      return [newMap.get(compliment), i]
    } else {
      newMap.set(nums[i], i)
    }
  }

  return []
}
console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([3, 3], 6))
