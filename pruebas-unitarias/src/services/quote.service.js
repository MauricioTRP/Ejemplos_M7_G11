export async function fetchQuote() {
  // Si es bueno hacer try-catch
  const response = await fetch('https://dummyjson.com/quotes/random')
  const data = response.json()

  return data
}
