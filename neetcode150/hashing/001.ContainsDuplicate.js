const hasDuplicate = (nums) => {
  const newSet = new Set(nums)
  return newSet.size < nums.length ? true : false
}

hasDuplicate([1, 2, 3, 3])
hasDuplicate([1, 2, 3, 4])
