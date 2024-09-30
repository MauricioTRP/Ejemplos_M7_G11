export function suma(...args) {
  const number = [...args].map(Number)
  if (number.some((number) => isNaN(number))) {
    return NaN
  } else {
    return number.reduce((acc, item) => acc + item, 0)
  }
}
