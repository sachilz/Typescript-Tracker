// 04-day-4-arrays-and-objects/examples/exercises.ts

// Exercise 1: Array of five student names
const studentNames: string[] = ["Alice", "Bob", "Charlie", "Diana", "Ethan"];
console.log(`Ex 1: First: ${studentNames[0]}, Third: ${studentNames[2]}, Last: ${studentNames[studentNames.length - 1]}`);

// Exercise 2: Filter numbers greater than ten
const rawNumbers: number[] = [4, 12, 8, 25, 3, 19, 10, 42];
const numbersGreaterThanTen: number[] = rawNumbers.filter((num) => num > 10);
console.log(`Ex 2: Numbers > 10:`, numbersGreaterThanTen);

// Exercise 3: Typed object representing a student
const studentRecord: { id: number; name: string; age: number; major: string } = {
  id: 101,
  name: "Sophia Martinez",
  age: 20,
  major: "Computer Science",
};
console.log(`Ex 3: Student: ${studentRecord.name}, Age: ${studentRecord.age}, Major: ${studentRecord.major}`);

// Exercise 4: Product type and 3 products
type Product = {
  id: number;
  name: string;
  price: number;
  category?: string;
};

const productCatalog: Product[] = [
  { id: 1, name: "Mechanical Keyboard", price: 89.99, category: "Peripherals" },
  { id: 2, name: "USB-C Hub", price: 34.5, category: "Accessories" },
  { id: 3, name: "Desk Pad", price: 19.99 }, // category is optional
];
console.log(`Ex 4: Catalog size: ${productCatalog.length}`);

// Exercise 5: Use map() to format student or product names
const productSummaries: string[] = productCatalog.map(
  (product) => `Product #${product.id}: ${product.name} ($${product.price.toFixed(2)})`
);
console.log("Ex 5: Product summaries:");
productSummaries.forEach((summary) => console.log(` - ${summary}`));
