export function calc(data) {
  return new Promise((resolve, reject) => {
    fetch('http://localhost:9003/calculate/rainfall', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      resolve(json)
    })
    .catch((err) => {
      reject(err)
    })
  })
}
