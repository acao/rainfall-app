export function reverseData(data) {
  const result = []
  if (data.length) {
    for (var i = 0; i < data[0].length; i++) {
      const row = []
      for (var k = 0; k < data.length; k++) {
        row.push(data[k][i])
      }
      result.push(row)
    }
    return result
  }
  else return []
}
