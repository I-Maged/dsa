var isPalindrome = function (x) {
  if (x < 0) return false

  let num = String(x)
  num = Number(num.split("").reverse().join(""))

  return num === x
}

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))
