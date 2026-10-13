// 02-day-2-types-and-variables/examples/primitive-types.ts

// 1. Primitive types
const productName: string = "Mechanical Keyboard";
const unitPrice: number = 79.99;
const inStock: boolean = true;

// 2. null and undefined
let discountCode: string | null = null;
let deliveryNote: string | undefined = undefined;

// 3. Typed Arrays
const ratings: number[] = [4.8, 4.9, 4.2, 5.0];
const features: string[] = ["RGB Backlight", "Hot-swappable", "Wireless"];

// 4. any vs unknown demo
let unsafeInput: any = 42;
// TypeScript allows this, but it could fail at runtime if a string method was called:
console.log(`Unsafe input value: ${unsafeInput}`);

let safeInput: unknown = "TypeScript";
// safeInput.toUpperCase(); // TypeScript prevents this because type is unknown!

if (typeof safeInput === "string") {
  // Now safeInput is safely treated as a string:
  console.log(`Safe input uppercase: ${safeInput.toUpperCase()}`);
}

console.log("=== Product Info ===");
console.log(`Item: ${productName} - $${unitPrice}`);
console.log(`In Stock: ${inStock}`);
console.log(`Features count: ${features.length}`);
console.log(`First feature: ${features[0]}`);
