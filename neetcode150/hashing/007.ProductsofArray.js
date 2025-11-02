// const productWithDivision = (nums) => {
//   let totalProduct = 1
//   let zeroCount = 0
//   let products = []

//   for (let num of nums) {
//     if (num !== 0) {
//       totalProduct *= num
//     } else {
//       zeroCount++
//     }
//   }

//   for (let i = 0; i < nums.length; i++) {
//     if (zeroCount > 0) {
//       products[i] = nums[i] === 0 ? totalProduct : 0
//     } else {
//       products[i] = totalProduct / nums[i]
//     }
//   }

//   console.log(products)
// }

// productWithDivision([1, 2, 4, 6])
// productWithDivision([-1, 0, 1, 2, 3])

const productExceptSelf = (nums) => {
  const n = nums.length
  let prefix = new Array(n)
  let suffix = new Array(n)
  let result = new Array(n)

  prefix[0] = 1
  suffix[n - 1] = 1

  for (let i = 1; i < n; i++) {
    prefix[i] = nums[i - 1] * prefix[i - 1]
  }

  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = nums[i + 1] * suffix[i + 1]
  }

  for (let i = 0; i < n; i++) {
    result[i] = prefix[i] * suffix[i]
  }

  return result
}

productExceptSelf([1, 2, 4, 6])
productExceptSelf([-1, 0, 1, 2, 3])
