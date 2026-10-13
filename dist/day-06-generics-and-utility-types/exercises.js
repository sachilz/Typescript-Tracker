"use strict";
/**
 * =====================================================================
 * Day 6: Generics and Utility Types
 * =====================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
console.log("--- Day 6: Generics & Utility Types ---");
function findById(items, targetId) {
    return items.find((item) => item.id === targetId);
}
const users = [
    { id: 1, name: "Alice", role: "admin" },
    { id: 2, name: "Bob", role: "member" }
];
const foundUser = findById(users, 2);
console.log("Found User:", foundUser?.name);
// 2. Generic Class (Key-Value Store)
class KeyValueStore {
    store = new Map();
    set(key, value) {
        this.store.set(key, value);
    }
    get(key) {
        return this.store.get(key);
    }
}
const cache = new KeyValueStore();
cache.set("session_1", { token: "abc123xyz", expires: Date.now() + 3600000 });
console.log("Cache hit:", cache.get("session_1"));
const sampleProductUpdate = {
    price: 29.99
};
console.log("Partial update payload:", sampleProductUpdate);
// =====================================================================
// 📝 TODO / EXERCISES FOR YOU:
// =====================================================================
// Exercise 1: Write a generic function `wrapInArray<T>(item: T): T[]`.
// Exercise 2: Use `Readonly<T>` to make an immutable configuration object.
// Exercise 3: Use `Record<string, number>` to represent product inventory levels.
