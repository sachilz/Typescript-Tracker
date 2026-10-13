/**
 * =====================================================================
 * Day 6: Generics and Utility Types
 * =====================================================================
 */

console.log("--- Day 6: Generics & Utility Types ---");

// 1. Generic Function with Constraint
interface HasId {
  id: string | number;
}

function findById<T extends HasId>(items: T[], targetId: string | number): T | undefined {
  return items.find((item) => item.id === targetId);
}

const users = [
  { id: 1, name: "Alice", role: "admin" },
  { id: 2, name: "Bob", role: "member" }
];

const foundUser = findById(users, 2);
console.log("Found User:", foundUser?.name);

// 2. Generic Class (Key-Value Store)
class KeyValueStore<K extends string | number, V> {
  private store = new Map<K, V>();

  set(key: K, value: V): void {
    this.store.set(key, value);
  }

  get(key: K): V | undefined {
    return this.store.get(key);
  }
}

const cache = new KeyValueStore<string, { token: string; expires: number }>();
cache.set("session_1", { token: "abc123xyz", expires: Date.now() + 3600000 });
console.log("Cache hit:", cache.get("session_1"));

// 3. Built-in Utility Types
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  stock: number;
}

// Partial: For patch updates
type UpdateProductDto = Partial<Product>;

// Pick: Select only public preview fields
type ProductSummary = Pick<Product, "id" | "title" | "price">;

// Omit: Remove internal/database fields
type CreateProductDto = Omit<Product, "id">;

// Record: Key-Value map
type CategoryCatalog = Record<string, Product[]>;

const sampleProductUpdate: UpdateProductDto = {
  price: 29.99
};

console.log("Partial update payload:", sampleProductUpdate);

// =====================================================================
// 📝 TODO / EXERCISES FOR YOU:
// =====================================================================
// Exercise 1: Write a generic function `wrapInArray<T>(item: T): T[]`.
// Exercise 2: Use `Readonly<T>` to make an immutable configuration object.
// Exercise 3: Use `Record<string, number>` to represent product inventory levels.
