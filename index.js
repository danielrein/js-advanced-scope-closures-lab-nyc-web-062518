function produceDrivingRange(range) {
  return function(blockStringA, blockStringB) {
    start = parseInt(blockStringA.slice(0, -2))
    end = parseInt(blockStringB.slice(0, -2))
    let diff = end - start
    if (diff > range) {
      return `${diff - range} blocks out of range`
    } else {
      return `within range by ${range - diff}`
    }
  }
}

function produceTipCalculator(tip) {
  return function(fare) {
    return fare * tip
  }
}
