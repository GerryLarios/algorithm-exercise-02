function isNumber(num = 0) {
  return typeof num === 'number' && !isNaN(num) 
}

function isArray(array = []) {
  return Array.isArray(array)
}

function sumarize(array = [], acc = 0, index = 0) {
  if (!array || array?.length === 0 || array?.length <= index) return acc
  
  const item = array[index]
  let sum = 0

  if (isArray(item)) sum = acc + sumarize(item)
  else if (isNumber(item)) sum = acc + item
  else sum = acc + 0

  return sumarize(array, sum, index + 1)
}

module.exports.sumarize = sumarize
