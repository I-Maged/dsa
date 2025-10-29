const kidsWithCandies = (candies, extraCandies) => {
  const greatest = Math.max(...candies)
  let result = []
  for (let i = 0; i < candies.length; i++) {
    candies[i] + extraCandies >= greatest
      ? result.push(true)
      : result.push(false)
  }
  console.log(result)
}

kidsWithCandies([2, 3, 5, 1, 3], 3)
kidsWithCandies([4, 2, 1, 1, 2], 1)
kidsWithCandies([12, 1, 12], 10)
