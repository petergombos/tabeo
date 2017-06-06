const toDecimal = (num) =>
  parseFloat(Math.round(num * 100) / 100).toFixed(2)

export default toDecimal
