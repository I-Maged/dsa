// To string
// const plusOne = function (digits) {
//     let toString = ""
//     let plusOne = []
//     for (let i = 0; i < digits.length; i++) {
//       toString += digits[i]
//     }
//     toString = String(Number(toString) + 1)
//     //   toString = toString.split("")
//     for (let i = 0; i < toString.length; i++) {
//       plusOne.push(Number(toString[i]))
//     }
//     console.log(plusOne)
// }

// Carry
const plusOne = function (digits) {
  let carry = 1
  for (let i = digits.length - 1; i >= 0; i--) {
    let sum = digits[i] + carry
    digits[i] = sum % 10
    carry = Math.floor(sum / 10)
  }
  if (carry) digits.unshift(1)
  console.log(digits)
}
plusOne([1, 2, 3])
plusOne([4, 3, 2, 1])
plusOne([9])
