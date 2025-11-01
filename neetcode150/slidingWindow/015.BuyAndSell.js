const maxProfit = (prices) => {
  let max = 0
  let left = 0
  let right = 1
  while (right < prices.length) {
    if (prices[left] <= prices[right]) {
      let temp = prices[right] - prices[left]
      max = Math.max(max, temp)
    } else {
      left = right
    }

    right++
  }
  console.log(max)
}

maxProfit([10, 1, 5, 6, 7, 1])
maxProfit([10, 8, 7, 5, 2])
maxProfit([7, 1, 5, 3, 6, 4])
maxProfit([2, 1, 2, 1, 0, 1, 2])
