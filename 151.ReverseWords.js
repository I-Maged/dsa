const reverseWords = (s) => {
  return s.trim().split(/\s+/).reverse().join(" ")
}
reverseWords("the sky is blue")
reverseWords("  hello world  ")
reverseWords("a good   example")
