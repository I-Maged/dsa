const lengthOfLongestSubstring = (s) => {
  const newMap = new Map()
  let left = 0
  let right = 0
  let max = 0

  while (right < s.length) {
    if (newMap.has(s[right])) {
      left = Math.max(left, newMap.get(s[right]) + 1)
    }
    newMap.set(s[right], right)
    max = Math.max(max, right - left + 1)
    right++
  }

  console.log(max)
}

lengthOfLongestSubstring("zxyzxyz") //3
lengthOfLongestSubstring("xxxx") //1
lengthOfLongestSubstring("pwwkew") //3
lengthOfLongestSubstring("dvdf") //3
lengthOfLongestSubstring(" ") //1
