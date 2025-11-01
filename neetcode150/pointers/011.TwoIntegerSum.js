const twoSum = (numbers, target) => {
  let left = 0
  let right = numbers.length - 1

  while (left < right) {
    let sum = numbers[left] + numbers[right]
    if (sum === target) {
      return [left + 1, right + 1]
    } else if (sum < target) {
      left++
    } else {
      right--
    }
  }
}

console.log(twoSum([1, 2, 3, 4], 3))
console.log(twoSum([-5, -3, 0, 2, 4, 6, 8], 5))
