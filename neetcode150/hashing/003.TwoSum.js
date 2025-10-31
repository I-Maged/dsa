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
console.log(twoSum([3, 4, 5, 6], 7))
console.log(twoSum([4, 5, 6], 10))
console.log(twoSum([5, 5], 10))
