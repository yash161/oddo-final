export async function fetchBooks() {
  const response = await fetch('https://openlibrary.org/subjects/fiction.json?limit=100');
  const data = await response.json();
  return data.works;
}
