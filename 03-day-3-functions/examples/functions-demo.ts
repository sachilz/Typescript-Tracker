// 03-day-3-functions/examples/functions-demo.ts

// 1. Basic function with parameter and return types
function calculateTotal(subtotal: number, taxRate: number): number {
  return subtotal + subtotal * taxRate;
}

// 2. Void return type
function printReceipt(item: string, total: number): void {
  console.log(`Receipt: ${item} | Final Total: $${total.toFixed(2)}`);
}

// 3. Optional parameter
function formatUser(name: string, nickname?: string): string {
  if (nickname) {
    return `${name} ("${nickname}")`;
  }
  return name;
}

// 4. Default parameter
function sendNotification(message: string, priority: string = "Normal"): void {
  console.log(`[${priority.toUpperCase()}] ${message}`);
}

// 5. Arrow function
const divide = (dividend: number, divisor: number): number => {
  if (divisor === 0) {
    throw new Error("Cannot divide by zero.");
  }
  return dividend / divisor;
};

// Test invocations
console.log("=== Day 3: Functions Demo ===");
const total = calculateTotal(100, 0.08);
printReceipt("Headphones", total);
console.log(formatUser("Alexander", "Alex"));
console.log(formatUser("Sarah"));
sendNotification("Server restart scheduled.");
sendNotification("Database disk full!", "Urgent");
console.log(`100 / 4 = ${divide(100, 4)}`);
