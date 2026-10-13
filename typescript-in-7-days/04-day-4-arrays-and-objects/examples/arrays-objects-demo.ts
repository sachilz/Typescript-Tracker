// 04-day-4-arrays-and-objects/examples/arrays-objects-demo.ts

// 1. Defining a custom type
type Book = {
  id: number;
  title: string;
  author: string;
  year: number;
  isAvailable?: boolean;
};

// 2. Creating an array of typed objects
const library: Book[] = [
  { id: 1, title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, isAvailable: true },
  { id: 2, title: "1984", author: "George Orwell", year: 1949, isAvailable: false },
  { id: 3, title: "Clean Code", author: "Robert C. Martin", year: 2008, isAvailable: true },
];

// 3. Using map to extract titles
const bookTitles: string[] = library.map((book) => book.title);

// 4. Using filter to find modern books
const modernBooks: Book[] = library.filter((book) => book.year >= 2000);

// 5. Using find to look up a book by ID
const bookFound: Book | undefined = library.find((book) => book.id === 2);

console.log("=== Day 4: Arrays & Objects Demo ===");
console.log("All Titles:", bookTitles);
console.log(`Modern Books count: ${modernBooks.length}`);
if (bookFound) {
  console.log(`Found Book #2: "${bookFound.title}" by ${bookFound.author}`);
}
