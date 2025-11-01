const isValid = (c) => {
  if (
    (c >= "a" && c <= "z") ||
    (c >= "A" && c <= "Z") ||
    (c >= "0" && c <= "9")
  ) {
    return true
  }

  return false
}

const isPalindrome = (s) => {
  let processedString = ""

  for (let i = 0; i < s.length; i++) {
    if (isValid(s[i])) {
      processedString += s[i].toLowerCase()
    }
  }

  let left = 0
  let right = processedString.length - 1

  while (left < right) {
    if (processedString[left] !== processedString[right]) {
      console.log(false)
      return false
    }

    left++
    right--
  }

  return true
}

isPalindrome("Was it a car or a cat I saw")
isPalindrome("tab a cat")
