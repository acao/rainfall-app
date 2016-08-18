/* global XLSX */

export function processFileInput(files) {
  return new Promise((resolve, reject) => {
    try {
      const results = [ [], [], [] ]
      if (files.length) {
        for (var i = 0; i < files.length; i++) {
          const reader = new FileReader()
          reader.addEventListener('load', () => {
            const workbook = XLSX.read(reader.result, { type: 'binary' })
            const result = workbook.Sheets[workbook.SheetNames[0]]
            const count = parseInt(result['!ref'].substring(4))
            let column1 = []
            let column2 = []
            let column3 = []
            for (var i = 0; i < count; i++) {
              column1.push(result[`A${i+1}`].v)
              column2.push(result[`B${i+1}`].v)
              column3.push(result[`C${i+1}`].v)
            }
            results[0].push(...column1)
            results[1].push(...column2)
            results[2].push(...column3)
          }, false)
          reader.readAsBinaryString(files[i])
        }
      }
      resolve(results)
    }
    catch(err) {
      reject(err)
    }
  })
}
