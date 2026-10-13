# Solutions — Day 3: Functions

Complete solutions and explanations for Day 3 exercises.

---

## Exercise 1: Add Two Numbers

```ts
function addNumbers(a: number, b: number): number {
  return a + b;
}

console.log(addNumbers(15, 27)); // 42
```

### Explanation:
- `(a: number, b: number)` ensures that caller can only provide numeric values.
- `: number` ensures the returned value is always a number.
- Trying to invoke `addNumbers("15", 27)` triggers TypeScript error TS2345.

---

## Exercise 2: Rectangle Area

```ts
function getRectangleArea(width: number, height: number): number {
  return width * height;
}

console.log(getRectangleArea(8, 12)); // 96
```

### Explanation:
- `width * height` produces a numeric result that satisfies the `: number` return type.

---

## Exercise 3: Greet User with Default Parameter

```ts
function greetUser(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}

console.log(greetUser("Alice"));                 // "Hello, Alice!"
console.log(greetUser("Bob", "Good morning"));   // "Good morning, Bob!"
```

### Explanation:
- Setting `greeting: string = "Hello"` makes the second argument optional for the caller.
- If omitted, `"Hello"` is automatically assigned at runtime.

---

## Exercise 4: Format Full Name (Optional Parameter)

```ts
function formatFullName(firstName: string, lastName: string, middleName?: string): string {
  if (middleName) {
    return `${firstName} ${middleName} ${lastName}`;
  }
  return `${firstName} ${lastName}`;
}

console.log(formatFullName("John", "Doe"));                  // "John Doe"
console.log(formatFullName("Franklin", "Roosevelt", "Delano")); // "Franklin Delano Roosevelt"
```

### Explanation:
- `middleName?: string` means the type of `middleName` inside the function is `string | undefined`.
- The `if (middleName)` check narrows it so that inside that branch it is guaranteed to be a `string`.

---

## Exercise 5: Arrow Function (Celsius to Fahrenheit)

```ts
const celsiusToFahrenheit = (celsius: number): number => {
  return (celsius * 9) / 5 + 32;
};

// Or as a concise single-line expression:
const cToF = (c: number): number => (c * 9) / 5 + 32;

console.log(`25°C = ${celsiusToFahrenheit(25)}°F`); // 77°F
console.log(`0°C = ${celsiusToFahrenheit(0)}°F`);   // 32°F
```

### Explanation:
- Arrow functions use `(params): returnType => body` syntax.
- Both explicit return blocks `{ return ...; }` and concise expressions `=> expression` are fully supported with TypeScript type annotations.
