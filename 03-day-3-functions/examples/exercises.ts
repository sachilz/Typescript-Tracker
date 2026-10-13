// 03-day-3-functions/examples/exercises.ts

// Exercise 1: Function that adds two numbers
function addNumbers(a: number, b: number): number {
  return a + b;
}
console.log(`Ex 1: 15 + 27 = ${addNumbers(15, 27)}`);

// Exercise 2: Function that calculates rectangle area
function getRectangleArea(width: number, height: number): number {
  return width * height;
}
console.log(`Ex 2: Area of 8x12 rectangle = ${getRectangleArea(8, 12)}`);

// Exercise 3: Function that greets user by name
function greetUser(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}
console.log(`Ex 3 (default): ${greetUser("Sachintha")}`);
console.log(`Ex 3 (custom): ${greetUser("Sachintha", "Welcome aboard")}`);

// Exercise 4: Function with optional parameter
function formatFullName(firstName: string, lastName: string, middleName?: string): string {
  if (middleName) {
    return `${firstName} ${middleName} ${lastName}`;
  }
  return `${firstName} ${lastName}`;
}
console.log(`Ex 4 (with middle): ${formatFullName("James", "Kirk", "Tiberius")}`);
console.log(`Ex 4 (without middle): ${formatFullName("Arthur", "Dent")}`);

// Exercise 5: Arrow function converting Celsius to Fahrenheit
const celsiusToFahrenheit = (celsius: number): number => {
  return (celsius * 9) / 5 + 32;
};
console.log(`Ex 5: 25°C in Fahrenheit = ${celsiusToFahrenheit(25)}°F`);
console.log(`Ex 5: 0°C in Fahrenheit = ${celsiusToFahrenheit(0)}°F`);
