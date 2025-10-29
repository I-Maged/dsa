const mergeAlternately = (word1, word2) => {
  let left = 0
  let right = 0
  let merge = ""
  while (left < word1.length || right < word2.length) {
    if (word1[left]) {
      merge += word1[left]
      left++
    }
    if (word2[right]) {
      merge += word2[right]
      right++
    }
  }
  console.log(merge)
}

mergeAlternately("abc", "pqr")
mergeAlternately("ab", "pqrs")
mergeAlternately("abcd", "pq")
