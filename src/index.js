module.exports = function reverse (n) {
  if (n.toString().split('')[0] === '-') {
    return Number(n.toString().split('').reverse().join('').slice(0, -1))
  }
  return Number(n.toString().split('').reverse().join(''))
}
