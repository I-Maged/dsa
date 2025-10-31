const isAnagram = (s, t) => {
  const sSorted = s.split("").sort().join("")
  const tSorted = t.split("").sort().join("")
  return sSorted === tSorted
}

isAnagram("racecar", "carrace")
isAnagram("jar", "jam")
